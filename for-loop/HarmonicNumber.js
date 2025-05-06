function harmonicNumber(n){
    let sum = 0;

    if(n<=0 || isNaN(n)){
        return "Please enter a positive integer";
    }
    else{
        for(let i =1; i<=n ; i++){
            sum += 1/i;
        }
    }
    return sum;
}

const input = parseInt(process.argv[2]);
console.log(harmonicNumber(input));