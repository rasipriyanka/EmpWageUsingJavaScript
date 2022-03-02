//-----UC10--------//
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const Working_Per_Hr = 20;
let totalEmployeeWage = 0;
let empHr = 0;
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
function calculateDailyWage(empHr) {
    return empHr * Working_Per_Hr;
}
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = GetWorkingHrs(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calculateDailyWage(empHrs),
        toString() {
            console.log("\nDay" + this.dayNum + " => Working Hours is " + this.dailyHours + " And Wage Earned = " + this.dailyWage);
        },
    });
}
console.log(
    "\nUC10 Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr)