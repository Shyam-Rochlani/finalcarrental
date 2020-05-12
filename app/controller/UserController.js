var bodyParser = require('body-parser');
var User = require('../../app/model/User.js');
var methods = {
    store: function(request){
        var customer_name = request.body.customer_name;
        var customer_email = request.body.customer_email;
        var customer_pho = request.body.customer_pho;
        var customer_password = request.customer_password;
        var customer = {
            customer_name: customer_name,
            customer_email:customer_email,
            customer_pho:customer_pho,
            customer_password:customer_password
        };
        // if(User.ifEmailExists(customer)){
        //     return "This Email is Already Linked with another account";
        // }
        return User.save(customer);
    },
    
    login:function(request){
        var customer_email = request.body.customer_email;
        var customer_password = request.body.customer_password;
        var customer = {
            customer_email:customer_email,
            customer_password:customer_password
        };
        console.log(customer);
        return User.login(customer);

    },

    update: function(){
        
    },
    
    delete: function(){
        
    }
}
module.exports = methods;
