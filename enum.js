// let meetingdays:string= "monday"
// if(meetingdays === "sunday"){
//     console.log("no meeting")
// }else if(meetingdays === "MONDAY"){
//     console.log("meeting at a 10:00 am")
// }
//enum 
var days;
var Days;
(function (Days) {
    Days[Days["sunday"] = 0] = "sunday";
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thurday"] = 4] = "thurday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
})(Days || (Days = {}));
console.log(Days.wednesday);
// let meetingdays:Da
// let meetingday:Days= Days.friday;
// if(meetingday === Days.friday){
//     console.log("mEETING DAY")
// }else if(meetingday=== Days.sunday) {
// console.log("no meeting")}
// enum myoperator {
//     addition,
//     subraction,
//     multiplication,
//     division,
// }
// let operator :myoperator = myoperator.addition
// if(operator === myoperator.addition){
//     console.log(2+2)
// }else if(operator===myoperator.subraction){
//     console.log(2-2)
// };
