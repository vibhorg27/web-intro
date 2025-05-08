let totalWageUsingForEach = 0;
dailyWageArr.forEach((day, wage) => totalWageUsingForEach += wage);

let totalWageUsingReduce = dailyWageArr.reduce((total, wage) => total + wage, 0);

console.log(totalWageUsingForEach);
console.log(totalWageUsingReduce);