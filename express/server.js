const express= require('express');

const app= express();

app.get('/number',(req,res)=>{
    res.send("Go to /number/num to check if num is prime or composite");
});

app.get('/number/:num',(req,res)=>{
    const num= req.params.num;
    if(Number(num)===1){
        res.send(`The number ${num} is neither prime nor composite`);
        res.end();
    }
   else if(isPrime(Number(num))){
        res.send(`The number ${num} is prime`);
        res.end();
    }
    else{
        res.send(`The number ${num} is composite`);
        res.end();
    }

})

const isPrime = num => {
    if(num===2){
        return true;
    }
    else{
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){
        if(num % i === 0) {
            return false
        };
    }
    return num > 1; 
}
        
    
}

app.listen(8000,()=>console.log("Connected"));