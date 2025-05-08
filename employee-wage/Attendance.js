const IS_PRESENT = 0;

let attendance = Math.floor(Math.random() * 10) % 2;
if (attendance == IS_PRESENT) {
    console.log("Employee is Absent");
}
else{
    console.log("Employee is Present");
}