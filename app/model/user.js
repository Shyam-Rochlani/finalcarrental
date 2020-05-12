/*******CONNECTION TO MONGO DB********/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shyamrochlani:Shyam7514@cluster0-2cxbo.mongodb.net/test";

var connection;
MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},function(err, db) {
  if (err) throw err;
  console.log("Connected to DB");
  connection = db;
  //db.close();
});

/**************MODEL METHODS*****************/
var methods = {
    save: function(customer){
        var dbo = connection.db("mydb");
        dbo.collection("customer").insertOne(customer, function(err, res) {
        if (err) throw err;
        console.log("Customer inserted");
        });
        return customer;
    },
    login:function(customer){
        var dbo = connection.db("mydb");
        var res = dbo.collection("customer").find(customer,function(err,result){
            console.log(result);
        });
        // res.count(function(err,count){
        //     if(count == 1){
        //         console.log("login successfull");
        //     }
        // });
        // console.log(res.customer_email);
        // return res.customer_email;
        return "logged in";
    },
    update: function(){
        console.log("Hey! You called update");
    }
}

module.exports = methods;