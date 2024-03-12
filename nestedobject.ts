// nested object

type person = {
    name: string;
    age:number;
    email:string;
    children?:{
        name:string;
        age:number;
    }
}

let person1 ={
    name:"usman",
    age:44,
    email:"usman@gmail.com",
    childern:{
        name:"faheem",
        age:15,
    }                                           
};
