let minTeeth = 18
let maxTeeth = 84
let increment = .1
let currentPitch = .9
let currentDiameter = 1
let data = [];
for(let i = minTeeth; i<=maxTeeth; i+=2){
    let teeth = i;
    let pitch = parseFloat(currentPitch.toString().substring(0,4));
    let diameter = parseFloat(currentDiameter.toString().substring(0,4));
    data.push({teeth,pitch,diameter})
    currentPitch+=increment;
    currentDiameter+=increment;
}

let centerToCenter = 4.5;

let combinations = (ctc) => {
    let foundRatios = [];
    for(let i = 0; i < data.length; i++){
        let currentP = data[i].pitch;
        for(let x = 0; x < data.length; x++){
            if(currentP + data[x].pitch == ctc){
                let ratio = parseFloat((data[i].teeth/data[x].teeth).toString().substring(0,3))
                foundRatios.push({gear1:data[i].teeth,gear2:data[x].teeth,ratio:`${ratio}:1`})
            }
        }
    }
    return foundRatios;
}

let gear1 = 18;
let gear2 = 72;

let p1 = data.filter((g) => {return g.teeth == gear1});
let p2 = data.filter((g) => {return g.teeth == gear2});

let totalPitch = p1[0].pitch+p2[0].pitch;

let combinationsRes = combinations(totalPitch);


console.log(p1[0].pitch, p2[0].pitch, totalPitch)
console.log(combinationsRes)
