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

    return empHrs * WAGE_PER_HOUR;
}

let totalCost = 0;
for(let days = 1 ; days<=20 ; days++){
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalCost += calculateWagePerHour(empCheck);

}
console.log(totalCost);


