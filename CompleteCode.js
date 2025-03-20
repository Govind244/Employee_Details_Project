//UC-1 Check the Presence of Employee
const present = 1;

let isPresent = Math.floor(Math.random()*10)%2;

if(isPresent == present){
    console.log("Employee is Present");
}
else{
    console.log("Employee is Absent");
    return;
}