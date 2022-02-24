//----uc6-----//
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
let totalWage = 0,day=1,hrs=0;
let empWageArray=new Array();
while(day <= MAX_WORKING_DAYS && hrs<= MAX_WORKING_HRS) {
    let randomInput = Math.floor(Math.random() * 10) % 3;
    empHrs = GetWorkingHrs(randomInput);
    let dailyWage = EMP_RATE_PER_HR * empHrs;
    empWageArray.push(dailyWage);
    console.log(" day"+day+"wage:"+dailyWage);
    totalWage += dailyWage;
    day++;
    hrs+=empHrs;
}
console.log("UC6 TotalWage for "+MAX_WORKING_DAYS+"days:"+hrs+"hrs"+totalWage);
console.log("EmpWageArray:"+empWageArray.join(" "));
//------UC7A Total Wage Using foreach helper method-----//
let emptotalWage=0;
function GetTotalWage(dailyWage){
    emptotalWage+=dailyWage;
}
console.log("Array"+empWageArray.forEach(GetTotalWage));
console.log(" UC7A-Total Wage using foreach help method:"+emptotalWage);

function GetTotalWageUsingReduce(empTotal,dailyWage){
   return empTotal+=dailyWage;
}
console.log("ArrayReduce"+empWageArray.reduce(GetTotalWageUsingReduce));

//---------UC7B Array Map Helper Function----------//
let days=1;
function GetMapValues(dailyWage){
    return "Day"+days++ +"="+dailyWage;
}
let mapResult=empWageArray.map(GetMapValues);
//---Converting map to array---//
console.log(Array.from(mapResult));
for(let s of mapResult){  
    console.log(s);
}
// console.log("UC7BArray"+empWageArray.map(GetMapValues));
