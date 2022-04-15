// ================ NODE JS =============
// Create a api to SIGNUP (create db schemas using postgresql)
// Required fields
// A. name,
// B. email
// C. password
// D. Communication Address(One user can add multiple address) field contains
//    - House Number
//    - Locality
//    - City
//    - Pin Code


// 2. Create a api to get details of logged user

// 3. create a login api with JWT-Authentication



// ======================= ANGULAR ===============

// 1. Login page and call login api
// 2. after login go to profile page 


const knex=require("../model/db")
const jwt=require('jsonwebtoken')
const cookie=require('cookie-parser')
const bcrypt=require('bcrypt')
const signup=(req,res)=>{
    if (!req.body.name || !req.body.email || !req.body.password){
        res.status(400)
        return res.json({
            message:"failed "
        })
    }
    else{
        const hash=bcrypt.hashSync(req.body.password,10),

        user = {
            name:req.body.name,
            email:req.body.email,
            password:hash,
        }
        knex('signup').insert(user)
        .then(()=>{
            res.send({message:"inserted"})
            
        }).catch((err)=>{
            console.log(err);
            res.send({message:"already inserted",message:err})

        })
    }
    
    }

const login=(req,res)=>{
    if(!req.body.password || !req.body.email){
        res.send({message:'All fields require!'})
    }
    knex.select("*").from('signup').where("email","=",req.body.email)

    .then((details)=>{

        if(details.length===0){
            res.send({message:'User not exist'})
        }else{
        
            var compare = bcrypt.compareSync(req.body.password,details[0].password)
            if(compare===false){
                res.send({message:'Invalid Email/password'})
            }else{
                const token=jwt.sign({id:details[0].userid},"jabeenabano")
                console.log(token)
                res.cookie('user',token)
                res.send({message:'Login Succesfully!',
                data:details,
                token:token})
            }
        }
        console.log(details)
    })
}


module.exports={signup,login}