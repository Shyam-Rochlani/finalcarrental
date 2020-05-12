/*******CONNECTION TO MONGO DB********/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shyamrochlani:Shyam7514@cluster0-2cxbo.mongodb.net/test";

let connection;
MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},function(err, db) {
  if (err) throw err;
  console.log("Connected to DB");
  connection = db;
  //db.close();
});

/**************MODEL METHODS*****************/
var methods = {
    save: function(car){
        var dbo = connection.db("mydb");
        dbo.collection("car").insertOne(car, function(err, res) {
        if (err) throw err;
        console.log("CAR inserted");
        });
        return car;
    },
    
    update: function(){
        console.log("Hey! You called update");
    },
    
    delete:function(carId){
        var dbo = connection.db("mydb");
        var date = new Date();
        var day = date.getDate()+1;
        var month = date.getMonth();
        var year = date.getFullYear();
        var finalDate = "" + day + "/" + month + "/" + year;
        console.log(finalDate);
        var check = {
            date:date,
            carId:carId
        }
        dbo.collection("bookings").find({"carId":carId,"startDate":{$gte:date}}).toArray(function (error, result) {
            if (error) {
                return error;
            }
            console.log(result);
            
        });
    }
}

module.exports = methods;