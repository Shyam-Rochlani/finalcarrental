/*******CONNECTION TO MONGO DB********/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shyamrochlani:Shyam7514@cluster0-2cxbo.mongodb.net/test";

let connection;
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err, db) {
    if (err) throw err;
    console.log("Connected to DB");
    connection = db;
    //db.close();
});

/**************MODEL METHODS*****************/
var methods = {
    save: function (booking) {
        var dbo = connection.db("mydb");
        var check = {
            user: "1",
            carId: booking.carId,
            startDate: booking.startDate,
            endDate: booking.endDate
        };

        dbo.collection("bookings").find(check).toArray(function (error, result) {
            if (error) {
                return error;
            }
            console.log(result);
            console.log("Check Now");
            if ((result.length == 0)) {
                console.log("Hello");
                dbo.collection("bookings").insertOne(booking, function (error, result) {
                    if (error) throw error;
                    console.log("Booking Confirmed");
                    console.log(booking);
                    return booking;
                    console.log("a");
                });
            }
            /*TODO
            check the error and try to return object/json to the postman
            cannot return object. Visible on console
            */
            return "Car is busy!";
        });
    },
    update: function () {
        console.log("Hey! You called update");
    }
}

module.exports = methods;
