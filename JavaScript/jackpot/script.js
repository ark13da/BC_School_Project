// The one armed bandit
let fiveArray = [];
let fiveString = '';

let fiver = () => {
    for (let i = 0; i < 5; i++) {
        fiveArray.push(Math.floor(Math.random() * Math.floor(2)));
    }

    if (fiveArray.includes(0) && fiveArray.includes(1)) {
        fiveString = `The sequence was: ${fiveArray.join(',')} and you lost. Please try again! The chance of winning was ${1 / 2 ** 5} `;
    } else if (fiveArray.includes(0) && !fiveArray.includes(1)) {
        fiveString = `The sequence was: ${fiveArray.join(',')} and you lost. But good job on getting all zeros; it is rare! Please try again! The chance of winning was ${1 / 2 ** 5} `;
    } else if (!fiveArray.includes(0) && fiveArray.includes(1)) {
        fiveString = `The sequence was: ${fiveArray.join(',')} and you Won! The chance of winning was ${1 / 2 ** 5} `;
    } else {
        fiveString = `The sequence was: ${fiveArray.join(',')} and this is a terrible code. please debug!`;
    }

    document.getElementById('result').innerHTML = fiveString;
    fiveArray = [];
    fiveString = '';
};

