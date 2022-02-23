//----uc3-----//
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HR = 20;
let empHrs = 0;

function GetWorkingHrs(empInput) {
    switch (empInput) {
        case IS_FULL_TIME:
            empHrs = 8;
            console.log("FullTime Employee")
            return empHrs;
        case IS_PART_TIME:
            empHrs = 8;
            console.log("PartTime Employee")
            return empHrs;
        default:
            empHrs = 0;
            console.log("absent")
            return empHrs;
    }
}
empHrs = GetWorkingHrs(empInput);
//-----calculate daily wage-------//
let dailWage = EMP_RATE_PER_HR * empHrs;
console.log("UC3 DAily wage:" + dailWage);