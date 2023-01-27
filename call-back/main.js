function first(){
    setTimeout(function(){
        console.log("first")
        secound();
    },3000);
}
function secound(){
    console.log("secound");
}
first();
