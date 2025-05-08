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

for (let day = 1; day <= NUMBER_OF_WORKING_DAYS; day++) {
    let workType = Math.floor(Math.random() * 3);
    let dailyWage = calculateWage(workType);
    dailyWagesArray.push({ day, wage: dailyWage });
}

console.log(dailyWagesArray);

//a.
let totalWageUsingForEach = 0;
dailyWagesArray.forEach(entry => totalWageUsingForEach += entry.wage);

// Reduce has a accumulator and second thing is the parameter in the array
let totalWageUsingReduce = dailyWagesArray.reduce((total, entry) => total + entry.wage, 0);

console.log(totalWageUsingForEach);
console.log(totalWageUsingReduce);


//b.
console.log("*******************************");
dailyWagesArray.map((entry) => console.log(`Day : ${entry.day}  Wage : ${entry.wage}`));

//c.
console.log("*******************************");
let filterFunction = dailyWagesArray.filter(entry => entry.wage === 160).map(entry => entry.day);
console.log(filterFunction);

//d.
console.log("*******************************");
let firstFullTime = dailyWagesArray.find(entry => entry.wage===160);
console.log(firstFullTime);

//e.
console.log("*******************************");
let checkFullTimeWage = dailyWagesArray.filter(entry => entry.wage === 160).every(entry => entry.wage ===160);
console.log(checkFullTimeWage);

//f.
console.log("*******************************");
let workedDays = dailyWagesArray.filter(entry => entry.wage > 0).length;
console.log(workedDays);