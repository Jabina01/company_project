const knex=require('../model/db')

const user_communication=(req,res)=>{
    const dic1={
        user_id:req.body.user_id,
        House_Number:req.body.House_Number,
        Locality:req.body.Locality,
        Pin_Code:req.body.Pin_Code

    }
    knex("communication").insert(dic1)
    .then(()=>{
        res.send({message:'communication Posted!'})
        console.log("data inserted")
    }).catch((err)=>{
        res.send(err)
    })
}


const get_data=(req,res)=>{
    knex('communication')
    .join("signup","communication.user_id","signup.user_id")
    // .join('signup','communication.communication_id','signup.id') 
    // .select('todolist.title','todolist.description','Users.username')
    .select("*")
    .then((data)=>{
    console.log(data)
    res.send({message:"all done",
    data:data})
    }).catch((err)=>{
    console.log(err)
    res.send(err)
})
}


module.exports={user_communication,get_data}