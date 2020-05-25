let minTeeth = 18
let maxTeeth = 84
let increment = .1
let currentPitch = .9
let currentDiameter = 1
/*
Generates all gears with their tooth count, pitch, and diameter
*/
let data = [];
for (let i = 18; i <= 84; i += 2) {
    let pitch = parseFloat(currentPitch.toString().substring(0, 4));
    let diameter = parseFloat(currentDiameter.toString().substring(0, 4));
    data.push({ teeth:i, pitch, diameter });
    currentPitch += increment;
    currentDiameter += increment;
}

/*
    Returns the overall gear ratio for the two inputted gears
*/
let gearRatio = (g1, g2) => {
    return g1>g2 ? g1/g2 : g2/g1;
}

let getPitch = (gear) => {
    return (data.filter((p) => { return p.teeth == gear})).pitch;
}

let tolerance = (number, tolerance) => {
    // if(number < number+tolerance && number+tolerance !< number+(tolerance*2) )
}

/* 
    Based off the center to center distance of the two gears, it willprovide 
    all possible gear ratios.
*/
let combinations = (ctc, variance=0) => {
    let foundRatios = [];
    for (let i in data) {
        for (let x in data) {
            if (data[i].pitch + data[x].pitch == ctc) {
            // if (data[i].pitch + data[x].pitch == ctc || ((data[i].pitch + data[x].pitch)+variance)) {
                let ratio = parseFloat(gearRatio(data[i].teeth,data[x].teeth).toString().substring(0, 3))
                foundRatios.push({ gear1: data[i].teeth, gear2: data[x].teeth, ratio: `${ratio}:1`, ctc })
            }
        }
    }
    // Remove all duplicate ratios
    foundRatios = [...new Map(foundRatios.map(item => [item.ratio, item])).values()]
   
    return foundRatios;
}


//////////////////////////////////////////////////


let gear1 = 18;
let gear2 = 72;

let p1 = data.filter((g) => { return g.teeth == gear1 });
let p2 = data.filter((g) => { return g.teeth == gear2 });

let totalPitch = p1[0].pitch + p2[0].pitch;

let combinationsRes = combinations(totalPitch);

console.log(p1[0].pitch, p2[0].pitch, totalPitch)
console.log(combinationsRes)
