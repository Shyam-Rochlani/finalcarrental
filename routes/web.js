var express= require('express');
var router = express.Router();  
var CarController = require('../app/controller/CarController.js');
var BookingController = require('../app/controller/BookingController.js');

console.log(CarController);
console.log(BookingController);

router.post('/car/store',function(request,response){
    //var message = request.body.message;
    //response.send(message);
    response.send(CarController.store(request));  
});
router.post('/car/show',function(request,response){
    //var message = request.body.message;
    //response.send(message);
    response.send(CarController.store(request));  
});

router.post('/car/booking',function(request,response){
    response.send(BookingController.store(request));
});

router.delete('/car',function(request,response){
   response.send(CarController.delete(request)) ;
});


router.get('/',function(request,response){
    response.send(CustomerController.store());
});
router.get('/login',function(request,response){
    response.send(CustomerController.login());
});

router.delete('/car',function(request,response){
    response.send(CarController.delete(request));
});

module.exports = router;