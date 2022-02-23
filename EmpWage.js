//--------UC2 Using switch stmt daily emp  wage----------//
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HR = 20;
let empHrs = 0;
//----To Check Whether the employee is full time part time or work based---//
switch (empInput) {
    case IS_FULL_TIME:
        empHrs = 8;
        console.log("FullTime Employee")
        break;
    case IS_PART_TIME:
        empHrs = 8;
        console.log("PartTime Employee")
        break;
    default:
        empHrs = 0;
        console.log("absent")
        break;
}
//-----calculate daily wage-------//
let dailWage = EMP_RATE_PER_HR * empHrs;
console.log("UC2 DAily wage:" + dailWage);