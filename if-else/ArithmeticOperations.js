function arithmeticOperations(a,b,c){
    let one = a + b * c;
    let two = a % b + c;
    let three = c + a / b;
    let four = a * b + c;

    let max = Math.max(one, two, three, four);
    let min = Math.min(one, two, three, four);
    
    return { max, min };
}

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);
console.log(arithmeticOperations(a, b, c));