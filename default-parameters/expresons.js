//expreson orgiment//
//1
function myFun1(a=3,b=a,c=a*b){
    let z=a+b+c;
    return z;

 }
 console.log(myFun1());


 //2
myFun2=(a=10,b=20,c=a+b) =>console.log(c);
myFun2()
 
//3
myFun3=(a=20,b=2 ,c=a-b) => console.log(c);
myFun3();

//4
myFun4=(a=5*(2+16)/2-4*(2+2)+1/4) => console.log(a);
myFun4();

//5

myFun5=(a=4*(3-1)/9-3+(3+3)*2/5) =>console.log(a);
myFun5();


//6

myFun6=(b=10*(5-1)/4+5+(7+2)*2+2)=>console.log(b);
myFun6();

//7


function myFun7(a=20,b=10,c=a/b){
    let z=a+b+c
    console.log(z);
}
myFun7();

//8
function myFun8(x=200){
    console.log(x);
}
myFun8(undefined);

//9

myFun9=(a=10,b=12,c=a+b**2)=>console.log(c);
myFun9();

//10

myFun10=(a=10,b=5,c=a*a, d=b*b) =>console.log(d);
myFun10();



