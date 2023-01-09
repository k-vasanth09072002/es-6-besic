//1

myFun1=(a) => 54+a;
console.log(myFun1(6));



//2

myFun2=(a,b)=>a+b+myFun1(10);
console.log(myFun2(1,12));


//3

myFun3=(a,b)=>a/b+myFun1(10,2)
console.log(myFun3(1,2));


//4

myFun4=(a,b)=>a*b+myFun1(10,2)
console.log(myFun4(3,4));


//5
myFun5=(a,b)=>a%b+myFun1(10,10)
console.log(myFun5(5,6));



//6 

myFun6=(a,b)=>a-b+myFun1(10,5)
console.log(myFun6(7,8));


//7 

myFun7=(a,b)=> a*b/myFun1(7,8)
console.log(myFun7(9,10));


//8

myFun8=(a,b) =>a-b*myFun1(8,9)
console.log(myFun8(7,8));


//9

myFun9=(a,b)=>a+b*myFun1(9,8);
console.log(myFun9(9,8));


//10

myFun10=(a,b)=>a-b/myFun1(5,6)
console.log(myFun10(5,6));