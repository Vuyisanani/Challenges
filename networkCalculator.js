let fetch = require('node-fetch');

function Catch(x){ 
    var Add=0;

    for(let i=0 ; i < x ; i++){

    let initialTime = new Date().getTime();    
    fetch("http://date.jsontest.com")
         .then(function(res) {
          return res.json();
        }).then(function(res) {
           Add=res.milliseconds_since_epoch - initialTime; 
        console.log(res);
        let avg = (Add/x);
        console.log("Average request time is ",avg);
       });
    }
    
   
}
Catch(3);
