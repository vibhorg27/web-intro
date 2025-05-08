const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const NUMBER_OF_WORKING_DAYS = 20;


function calculateWage(workType) {
    switch (workType) {
        case 0: return 0; 
        case 1: return PART_TIME_HOURS * WAGE_PER_HOUR; 
        case 2: return FULL_TIME_HOURS * WAGE_PER_HOUR; 
        default: return 0;
    }
}


let dailyWagesArray = [];

let dailyWagesMap = new Map();
for (let day = 1; day <= NUMBER_OF_WORKING_DAYS; day++) {
    let workType = Math.floor(Math.random() * 3);
    let dailyWage = calculateWage(workType);
    dailyWagesMap.set(day, dailyWage);
}

console.log("Day-Wise Wage Map:");
for (let [day, wage] of dailyWagesMap.entries()) {
    console.log(`Day ${day}: Wage = ${wage}`);
}

let totalWage = 0;
for (let wage of dailyWagesMap.values()) {
    totalWage += wage;
}

console.log("Total Wage from Map:", totalWage);
