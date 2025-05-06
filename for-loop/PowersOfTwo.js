function powersOfTwo(n){
    for(let i = 1; i <= n ; i++){
        console.log(Math.pow(2, i));
    }
}

const input = parseInt(process.argv[2]);
powersOfTwo(input);


