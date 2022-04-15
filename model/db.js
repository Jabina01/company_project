const knex =require('knex')({
    client:"mysql",
    connection:{
        host:"127.0.0.1",
        user:"root",
        password:"Jabina@123",
        database:"APIs"  
    }
});


knex.schema.createTable("signup", function (t) {
        t.increments("user_id").primary()
        t.string("name",255).notNullable();
        t.string("email",255).notNullable().unique();
        t.string("password",255).notNullable()
      })
      .then(()=>{
          console.log("table_created")
      }).catch(()=>{
          console.log("table already exists")

      })

knex.schema.createTable("communication", function (t) {
    t.increments("user_id").primary().unsigned().references("Users.id")
    t.string("House_Number",255)
    t.string("Locality",255)
    t.string("Pin_Code",255)
    })
    .then(()=>{
        console.log("table_created")
    }).catch((err)=>{
        console.log("table already exists")
    })


module.exports=knex