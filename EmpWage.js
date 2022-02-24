//----uc5-----//
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
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HRS=80;
let totalWage = 0,day=1;
while(day <= MAX_WORKING_DAY && hrs<= MAX_WORKING_HRS) {
    let randomInput = Math.floor(Math.random() * 10) % 3;
    empHrs = GetWorkingHrs(randomInput);
    let dailWage = EMP_RATE_PER_HR * empHrs;
    console.log("UC5 day"+day+"wage:"+dailywage);
    totalWage += dailyWage;
    day++;
    hrs+=empHrs;
}
console.log("UC5 TotalWage for "+MAX_WORKING_DAYS+"days:"+hrs+"hrs"+totalWage);