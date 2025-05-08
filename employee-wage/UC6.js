const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HOUR = 20;

function calculateWagePerHour(empCheck){
    let empHrs = 0
    switch(empCheck){
        case IS_PART_TIME:
            empHrs = 4
            break;
        case IS_FULL_TIME:
            empHrs = 8
            break;
        default:
            empHrs = 0
    }

    return empHrs;

}

let dailyWageArr = new Array();

let days = 0;
let totalHrs = 0;
let totalWages = 0;
while(totalHrs <= 160 && days < 20 ){
    
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalHrs += calculateWagePerHour(empCheck);
    days++;

    dailyWageArr.push(calculateWagePerHour(empCheck) * WAGE_PER_HOUR);
    
}
totalWages = totalHrs * WAGE_PER_HOUR;
console.log(dailyWageArr);
console.log(totalWages);


