function unitConverter(value, unit){
    switch(unit){
        case 'feet to inches':
            return value * 12;
        
        case 'inches to feet':
            return value / 12;
        
        case 'feet to meters':
            return value * 0.3048;
        
        case 'meters to feet':
            return value / 0.3048;
    }
}

const value = parseFloat(process.argv[2]);
const unit = process.argv[3].toLowerCase();
console.log(`Converted value: ${unitConverter(value, unit)}`);