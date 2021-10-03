var req = new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload=function(){
    var result= JSON.parse(req.response);
    console.log(result);
    for(var i=0; i<result.length;i++){
        console.log(result[i].name+" "+result[i].capital);
    }
}