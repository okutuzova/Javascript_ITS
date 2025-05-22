let noisesArray = ['quack', 'sneeze', 'boom'];

function capitalizeLetter(string) {
    let myArray = [];
    for (let i = 0; i < string.length; i++) {
        let capitalizedChar =  string.slice(0, i) + string.charAt(i).toUpperCase() + string.slice(i + 1) + '!'.repeat(i+1);
        myArray.push(capitalizedChar);
    }
    return myArray;
}

let noiseArray2 = noisesArray.map(capitalizeLetter).reduce(function (accu, curr) {
    return accu.concat(curr);
}, []);
console.log(noiseArray2);


   