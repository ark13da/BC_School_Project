// The one armed bandit
let fiveArray = [];
let fiveString = '';

let fiver = () => {
    for (let i = 0; i <5; i++) {
        fiveArray.push(Math.floor(Math.random() * Math.floor(2)));
    }

    if (fiveArray.includes(0) && fiveArray.includes(1)) {
        fiveString = `The sequence was: ${fiveArray.join(',')} and you lost. Please try again!`;
    } else if (fiveArray.includes(0) && !fiveArray.includes(1)) {
        fiveString = `The sequence was: ${fiveArray.join(',')} and you lost. But good job on getting all zeros; it is rare! Please try again!`;
    } else if (!fiveArray.includes(0) && fiveArray.includes(1)) {
        fiveString = `The sequence was: ${fiveArray.join(',')} and you Won!`;
    } else { 
        fiveString = `The sequence was: ${fiveArray.join(',')} and this is a terrible code. please debug!`;
    }
    
    //console.log(fiveArray);
    //console.log(fiveString);
    document.getElementById('result').innerHTML=fiveString;
    fiveArray = [];
    fiveString = '';
};

