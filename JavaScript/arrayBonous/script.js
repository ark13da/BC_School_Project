const band = {
    members: {
        current: [
            { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },
            { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
            { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
            { name: 'Steve', age: 55, plays: ['guitar'] }
        ],
        past: [
            { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
            { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
            { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] }
        ]
    }
};

let fullArr = [];
let nameSorter = () => { 
    
    band.members.current.forEach(item => { 
            fullArr.push(item)
    })
    band.members.past.forEach(item => {
        fullArr.push(item)
    })
    let nameArr = [...fullArr].sort((a,b) => { 
        return b.age - a.age;
    })
    let nameArrLow= nameArr.map(i => i.name.toLowerCase());
    //console.log(fullArr); 
    //console.log(nameArr);
    //console.log(nameArrLow);
    return nameArrLow;
}

band.all=nameSorter();

let instSorter = () => { 
    let insts = [];
    let players = {};

    fullArr.forEach(item => {
        item.plays.forEach(i => { 
            if (!insts.includes(i)) { 
                insts.push(i);
            }
        })    
    });

    insts.forEach(item => { 
        players[item] = 
            fullArr.filter(i => i.plays.includes(item))
                .map(a => a.name.toLowerCase());
    })
    //console.log(players);
    return players
    
}
band.plays = instSorter();

console.log(band);