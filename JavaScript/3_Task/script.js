

//Finnish number generator

let randNum = 0;
let finnTranslation = '';

const nums = {
    
        0:'nolla',
        1: 'yksi',
        2: 'kaksi',
        3: 'kolme',
        4: 'neljä',
        5: 'viisi',
        6: 'kuusi',
        7: 'seitsemän',
        8: 'kahdeksan',
        9: 'yhdeksan',
        10: 'kymmenen'
}


let tens = (n) => { 
    if (n - (Math.floor(n / 10) * 10) == 0) {
        return nums[(Math.floor(n / 10) * 10) / 10] + 'kymmentä';
    } else {
        return nums[(Math.floor(n / 10) * 10) / 10] + 'kymmentä ' +
            nums[n - (Math.floor(n / 10) * 10)];
    };
}

let hundreds = (n) => { 

    if (n - (Math.floor(n / 100) * 100) == 0) {
        return nums[(Math.floor(n / 100) * 100) / 100] + ' sataa ';
    } else if (n - (Math.floor(n / 100) * 100) <= 10) {
        return nums[(Math.floor(n / 100) * 100) / 100] + ' sataa ' + nums[n - (Math.floor(n / 100) * 100)];
    } else if (n - (Math.floor(n / 100) * 100) > 10 && (Math.floor(n / 100) * 100) < 20 ) {
        return nums[(Math.floor(n / 100) * 100) / 100] + ' sataa ' + nums[(n - (Math.floor(n / 100) * 100)) - 10] + 'toista';
    }else {
        return nums[(Math.floor(n / 100) * 100) / 100] + ' sataa ' +
            tens(n - (Math.floor(n / 100) * 100));
    };
}

let numGenerator = () => {
    randNum = Math.round(Math.random() * 100) * Math.round(Math.random() * 10);
    
    switch (true) { 
        case (randNum <= 10):
            finnTranslation = nums[randNum];
            break;
        case (randNum > 10 && randNum < 20):
            finnTranslation = nums[randNum - 10] + 'toista';
            break;
        case (randNum > 19 && randNum < 100):
            finnTranslation = tens(randNum);
            break;
            case (randNum == 100):
                finnTranslation = 'sata';
                break;
        case (randNum > 100 && randNum < 1000):
            finnTranslation = hundreds(randNum);
            break;
        case (randNum == 1000):
            finnTranslation = 'tuhat';
            break;
        
        default: 
            finnTranslation= "Don't know yet. Please debug me!"
    }

    

    document.getElementById('num').innerHTML = randNum;
    document.getElementById('translation').innerHTML = finnTranslation;
    randNum = 0;
    finnTranslation = '';
}
