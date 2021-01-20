

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
        10: 'kummenen'
}
//toista
//kymmenttä
//sataa
let numGenerator = () => {
    randNum = Math.round(Math.random() * 100) * Math.round(Math.random() * 10);
    
    switch (randNum) { 
        case (randNum <= 10):
            finnTranslation = nums[randNum];
            break;
        case (randNum > 10 && randNum < 20):
            finnTranslation = nums[randNum - 10] + 'toista';
            break;
        default: 
            finnTranslation= "don't know yet"
    }

    document.getElementById('num').innerHTML = randNum;
    document.getElementById('translation').innerHTML = finnTranslation;
    randNum = 0;
    finnTranslation = '';
    console.log(nums[8]);
}
