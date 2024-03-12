type STUDENT = {
    name:string;
    rollnumber:number;
}

type TEACHER = {
    name:string;
    experiense:string;
}

let student :STUDENT={
name:"ayesha",
rollnumber:748745,
}

let teacher : TEACHER={
    name:"ayesha",
    experiense:"bhscvkcuwofv"

}

// let both :STUDENT|TEACHER = {
// name:"humzah",
// experience:"fszhjvn",
// rollnumber:567,
// }

// both.name

type c = number|string


let both:STUDENT & TEACHER={
    experiense:"34455",
    name:"atyegg",
    rollnumber:3528612  
}