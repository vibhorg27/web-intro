function headsOrTails(){
    let coin = Math.random() < 0.5 ? "Heads" : "Tails";
    return coin;
}

console.log(headsOrTails());