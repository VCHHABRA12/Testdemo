var req = new XMLHttpRequest();
req.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
req.send();
req.onload=function(){
    var result= JSON.parse(req.response);
    console.log(typeof(result));
    for(var i=0; i<result.length;i++){
        console.log(result[i].name+" "+result[i].region+" "+result[i].subregion+" "+ result[i].population);
    }
}