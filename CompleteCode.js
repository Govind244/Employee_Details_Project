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



// UC-2  Calculate Daily Employee Wage based on part time or full time work

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs;
let empCheck = Math.floor(Math.random() * 3);
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}
console.log(empHrs);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: $" + empWage);
