//------------EMP WAGE USING JAVA SCRIPT-----//
//------UC1 Emp is present or absent----------//
const IS_ABSENT = 0;
let empInput = Math.floor(Math.random() * 10) % 2;
// console.log(Math.floor(Math.random()*10)%2);
console.log("Employee attendance:" + empInput);
//----To Check Whether Emp is present or absent-----//
if (empInput == IS_ABSENT)
    console.log("Employee Absent");
else
    console.log("Employee Present");