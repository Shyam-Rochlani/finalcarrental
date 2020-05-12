var bodyParser = require('body-parser');
var Booking = require('../../app/model/Booking.js');
var methods = {
    store:function(request){
        var carId = request.body.carId;
        var startDate = request.body.startDate;
        var endDate = request.body.endDate;
        var user = request.body.user;
        var booking = {"carId":carId,
                       "startDate":startDate,
                       "endDate":endDate,
                       "user":user
                      };
        return Booking.save(booking);
    },
    
    update:function(){
        return "Hey! You called update";
    },
    delete:function(){
    }
}
module.exports = methods;   