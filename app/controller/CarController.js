var bodyParser = require('body-parser');
var Car = require('../../app/model/Car.js');
var methods = {
    store: function(request){
        var model = request.body.model;
        var number = request.body.number;
        var capacity = request.body.capacity;
        var rent = request.body.rent;
        var carToBeInserted = {model:model,
                               number:number,
                               capacity:capacity,
                               rent:rent
                              };
        return Car.save(carToBeInserted);
    },
    
    update: function(){
        
    },
    
    delete: function(request){
        var carId = request.body.carId;
        return Car.delete(carId);
    }
}
module.exports = methods;

