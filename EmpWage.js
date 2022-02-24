//----uc4-----//
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
let totalWage = 0;
for (let day = 1; day <= MAX_WORKING_DAY; day++) {
    let randomInput = Math.floor(Math.random() * 10) % 3;
    empHrs = GetWorkingHrs(randomInput);

    let dailWage = EMP_RATE_PER_HR * empHrs;
    console.log("UC3 DAily wage:" + dailWage);
    totalWage += dailyWage;
}
console.log("UC4 TotalWage for 20 days:" + totalWage);