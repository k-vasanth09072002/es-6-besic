let arr1=[1,2,3];
let arr2=[4,5,6];
let arr4=arr1.concat(arr2);
let arr3=[...arr1,...arr2]
console.log(arr4);
console.log(arr3);



//2

// let arr=["a","b"];
// let arrs=[...arr,"c","d"];

// console.log(arrs);


// //3

// function myFun1(...x){
//     console.log(x);
// }
// myFun1(1,23,3,4,5);

// //4

// function myFun2(...x){
//     console.log(x);
// }
// myFun2(1,2,3,4,5)
// myFun2(6,7,8,9)



// ///5

// function myFun1(a=3,b=a,c=a*b){
//     let z=a+b+c;
//     return z;

//  }
//  console.log(myFun1());

// function cal(a=3,b=5* myFun1()){
//     let sum=a+b;
//     return sum;

// }
// console.log(cal());




// ///6

// arr4=[1,2,3];
// arr5=[4,5,6];
// arr6=[7,8,9];
// let arr7=arr4.concat(arr5,arr6);
// let arr8=[...arr4,...arr5,...arr6];

// console.log(arr7);
// console.log(arr8);



// ///7

// arr9=[1,"a",2,"b"];
// arr10=[3,"c",4,"d"]

// arr11=[arr9.concat(arr10)];

// console.log(arr11);



///2

arr1=(...x)=>console.log(x);
arr1("red","orange","yellow");



//3

let arr=[1,2,3,4];
myFun2=(...a)=>{
    let arr5=[...arr,5,...a];
    console.log(arr5);
}
myFun2(9,8,7,6);


//4


let arr6=[1,2,3,4];
myFun2=(...a)=>{
    let arr6=[...arr,6,{name:"vasanth"},...a];
    console.log(arr6);
}
myFun2(9,8,7,6);




///5

let arr7=[1,2,3,4];
myFun2=(...a)=>{
    let arr7=[...arr,6,"vasanth",...a];
    console.log(arr7);
}
myFun2(9,8,7,6);



///6

let arr8=[1,2,3,4];
myFun2=(...a)=>{
    let arr8=[...arr,6,...a,{location:"chennai",company:"zoho"}];
    console.log(arr8);
}
myFun2(9,8,7,6);




///7


let arr9=[1,2,3,4];
myFun2=(...a)=>{
    let arr9=[...arr,6,...a,{location:"chennai",
    company:"zoho",
     course:"front-end-developer"}];
    console.log(arr9);
}
myFun2(9,8,7,6);




///8

function restFunction(...a){
    console.log(a);
}
restFunction(200,300,100,500)




///9


myFun11=(...b)=>console.log(b);

myFun11("tenkasi","nellai","madhurai")
myFun11("chennai,velor");


myFun12=(...x)=>console.log(x);

myFun12(1,"a",2,"b","c",3)