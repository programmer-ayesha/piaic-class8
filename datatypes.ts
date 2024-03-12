

let a :any = 20;
let b:boolean= true;

a = "hello world";
a=b;

a=b;
b=a;
// //unkown 


// //never
let d:string = "hello world";

if(typeof d=== "string"){
    console.log(d)
}else{
   console.log( d)
}

// //unkown
// let :unknown = "hello"
// let :

let c :unknown;
 c = "humzah" as string;

 let myname :unknown= "zia";
 console.log((myname as string ).toUpperCase())

//  myname

 let f:string = "humzah"
 let e:unknown = 22;

 f = e as string;
//  f = e as number;