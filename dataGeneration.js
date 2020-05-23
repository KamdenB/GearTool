let minTeeth = 18
let maxTeeth = 84
let increment = .1
let currentPitch = .9
let currentDiameter = 1
let data = [];
for(let i = minTeeth; i<=maxTeeth; i+=2){
    
    let tooth = i;
    let pitch = parseFloat(currentPitch.toString().substring(0,4));
    let diameter = parseFloat(currentDiameter.toString().substring(0,4));
    data.push({tooth,pitch,diameter})
    currentPitch+=increment;
    currentDiameter+=increment;
}

// console.log(data);

const FileSystem = require("fs");
 FileSystem.writeFile('data.json', JSON.stringify(data), (e) => {
    if(e) throw e
    console.log('Data saved')
  });