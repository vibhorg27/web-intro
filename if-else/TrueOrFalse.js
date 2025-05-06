let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

if (isNaN(day) || isNaN(month) && day < 1 || day > 31 || month < 1 || month > 12) {
    console.log("Please provide valid");
} else {
    // March 21 -> 321
    let dateValue = month * 100 + day;

    
    if (dateValue >= 320 && dateValue <= 620) {
        console.log(true);
    } else {
        console.log(false);
    }
}
