let meetingdays:string= "monday"

if(meetingdays === "sunday"){
    console.log("no meeting")
}else if(meetingdays === "MONDAY"){
    console.log("meeting at a 10:00 am")
}


//enum 
let days:"monday" | "tuesday" | "wednesday";
enum Days {
    sunday,
    monday,
    tuesday,
    wednesday,
    thurday,
    friday,
    saturday,
}

console.log(Days.wednesday)

// let meetingdays:Da

let meetingday:Days= Days.friday;

if(meetingday === Days.friday){
    console.log("MEETING DAY")
}else if(meetingday=== Days.sunday) {
console.log("no meeting")}


enum myoperator {
    addition,
    subraction,
    multiplication,
    division,
}
let operator :myoperator = myoperator.addition
if(operator === myoperator.addition){
    console.log(2+2)
}else if(operator===myoperator.subraction){
    console.log(2-2)
};


