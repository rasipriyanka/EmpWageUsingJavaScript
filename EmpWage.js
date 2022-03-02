//-----UC8 Use Map To store Emp Daily Wage--------//
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const Working_Per_Hr=20;
let totalEmployeeWage=0;
let empHr=0;
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
function calculateDailyWage(empHr)
{
    return empHr*Working_Per_Hr;
}
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    let empDailyWageMap = new Map();
  
    function calcDailyWage(empHrs) {
      return empHrs * Working_Per_Hr;
    }
  
    while (
      totalEmpHrs <= MAX_HRS_IN_MONTH &&
      totalWorkingDays < NUM_OF_WORKING_DAYS
    ) {
      totalWorkingDays++;
      let empCheck = Math.floor(Math.random() * 10) % 3;
      let empHrs = GetWorkingHrs(empCheck);
      totalEmpHrs += empHrs;
      empDailyWageArr.push(calcDailyWage(empHrs));
      empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }
    console.log(empDailyWageMap);
    function totalWages(totalWage, dailyWage) {
      return totalWage + dailyWage;
    }
    console.log(
      "UC8 - Total Emp Wage: " +
        Array.from(empDailyWageMap.values()).reduce(totalWages, 0)
    );