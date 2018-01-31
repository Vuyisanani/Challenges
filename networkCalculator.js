let fetch = require('node-fetch');

function Catch(x){ 
    var Add=0;

    for(let i=0 ; i < x ; i++){

    var initialTime = new Date().getTime();    
    fetch("http://date.jsontest.com")
         .then(function(res) {
          return res.json();
        }).then(function(json) {
           Add+=json.milliseconds_since_epoch - initialTime; 
        console.log(json);
       });
    }
    let avg = (Add/x);
    console.log("Average request time is ",avg);
}
Catch(1);
