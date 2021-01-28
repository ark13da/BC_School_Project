// Jackpot




let fiver = () => {
    let fiveArray = [];
    let fiveGenreator=0
    while (fiveGenreator<5) {
        fiveArray.push(Math.floor(Math.random() * Math.floor(2)));
        fiveGenreator += 1;
       
    }
    return fiveArray;
    
};

let fiver5 = () => {
    let fiveArray = [];
    let fiveGenreator=0
    while (fiveGenreator<5) {
        fiveArray.push(Math.floor(Math.random() * Math.floor(6)));
        fiveGenreator += 1;
    }
    return fiveArray;
};

let Arraytester = (arrFeed) => { 
    let i = 0;
    let ones = 0;
    while (i < 5) { 
        if (arrFeed[i] === 1) {
            ones += 1;
        } 
        i += 1;
    }
    return (ones == 5 ? 'bigWin' : ones == 4 ? 'smallWin' : ones == 0 ? 'Congrats' : 'loss');

}


let looper = (arg) => { 
    let results = {
        bigWin: 0,
        smallWin: 0,
        congrats: 0,
        loss: 0,
        tries: 0
    };

    let luck;

    do { 
        luck = Arraytester(arg());
        switch (luck) { 
            case 'bigWin':
                results.tries += 1;
                results.bigWin += 1;
                break;
            
            case 'smallWin':
                results.tries += 1;
                results.smallWin += 1;
                break;
            
            case 'Congrats':
                results.tries += 1;
                results.congrats += 1;
                break;
            
            case 'loss':
                results.tries += 1;
                results.loss += 1;
                break;
            default:
                console.log('oops');
                break;
        }
        
    } while (results.bigWin < 1);
    return results;
    
}


let fiveLister = (obj) => {
    
    let fiveLi = [];
    let i = 0;
    while (i < Object.keys(obj).length) {
        //fiveLi.push(`<li>The number of  ${Object.keys(obj)[i]} was ${Object.values(obj)[i]}.</li>`) this does not work
        fiveLi.push('<li>'+ `The number of  ${Object.keys(obj)[i]} was ${Object.values(obj)[i]}.`+'</li>')
        i++;
    }
    return fiveLi.join(' ');
    
}

avChecker=(obj)=> { 
    let trySum = 0;
    let i = 0;
    let luck;
    do {
        luck=obj
        trySum += luck.tries;
        i++;
    }
    while (i < 5);
    return (trySum * 0.5) / 5;
  
}

profLos = (n) => { 
    return 30000-n;

}



let myTest01 = () => { 
    let resu = fiveLister(looper(fiver));
    let av1 = avChecker(looper(fiver));
    let pl1 = profLos(av1);
    document.getElementById('result01').innerHTML = resu;
    document.getElementById('av01').textContent = `average amount spent to win is ${av1} Euros`;
    document.getElementById('pl1').textContent = `Your profit is ${pl1} Euros`;
}

let myTest05 = () => { 
    let resul = fiveLister(looper(fiver5));
    let av5 = avChecker(looper(fiver5));
    let pl5 = profLos(av5);
    document.getElementById('result05').innerHTML = resul;
    document.getElementById('av05').textContent = `average amount spent to win is ${av5} Euros`;
    document.getElementById('pl5').textContent = `Your profit is ${pl5} Euros`;
}



