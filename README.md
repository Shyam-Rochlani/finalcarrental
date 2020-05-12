# finalcarrental

https://finalcarrental.herokuapp.com/api/ 


Explanation for Routes:

/car/store - To add a new Car     
      POST request with parameters - {model,number,capacity,rent}   
/car/show - to list all available cars    
      POST request with parameter - {startDate,endDate}   
/car/booking - to book a car        
      POST request with parameters - {userId,carId,startDate,endDate}   
 /car - to delete  a car    
      DELETE request
/login - login for customer   
      GET request to login for customer with parameters {customer_email,customer_password}    
 / - base route     
      GET - SignUp for customer     
