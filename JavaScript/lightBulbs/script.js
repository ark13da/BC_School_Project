
let numOfBulbs = 40;
let delay = 500;
let trigBut=false;

let counter = 0;
let arrOfBulbs = [];

let create=()=>{//create bulbs
while (counter < numOfBulbs) { 
    const newEl = document.createElement('div');
    newEl.className = 'bulb';
    document.getElementById('bulbs').appendChild(newEl);
    arrOfBulbs[counter] = false;
    counter++;
    }
    document.getElementsByClassName('bulb')[0].classList.add('chosen');
//rest pointer
counter = 0;
arrOfBulbs[counter] = true;
};

create();

let inter;
let play =
    () =>
{
inter= setInterval(
    () => { 
        arrOfBulbs[counter] = false;
        document.getElementsByClassName('bulb')[counter].classList.remove('active');

        if (counter < numOfBulbs - 1) {
            counter++;
        } else { 
            counter = 0;
        }

        arrOfBulbs[counter] = true;
        document.getElementsByClassName('bulb')[counter].classList.add('active');

    },
    delay)

}

let trig = () => { 
    if (!trigBut) {
        document.getElementById("msg").textContent = ""
        document.getElementsByClassName('bulb')[counter].classList.remove('active');
        counter = 0;
        arrOfBulbs = [];
        play();
        trigBut = true;
        document.getElementById('press').textContent = "Stop"
    } else { 
        clearInterval(inter);
        trigBut = false;
        document.getElementById('press').textContent = "Start"
        if (counter == 0) {
            document.getElementById("msg").textContent = "Win"
        } else { 
            document.getElementById("msg").textContent = "No Win"
        }
    }
    
}

document.getElementById("press").addEventListener("click", trig);

//circle arrange
const arrangeItems = nodes => {
    const radius = '12em',
        start = -90,
        $els = [...nodes],
        numberOfEls = $els.length,
        slice = 360 / numberOfEls,
        index = 0;

    $els.forEach((el, i) => {
        const rotate = slice * i + start;
        const rotateReverse = rotate * -1;

        el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    })
}
arrangeItems(document.getElementsByClassName('bulb'));

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*
document.getElementById("numBulb").addEventListener("change", () => { 
    document.getElementsByClassName('bulb')[counter].classList.remove('active');
    document.getElementById("bulbs").removeAllChildNodes(document.getElementById("bulbs"));
    numOfBulbs = document.getElementById("numBulb").value;
    delay = document.getElementById("speed").value;
    create(); 
    arrangeItems(document.getElementsByClassName('bulb'));
});*/

document.getElementById("speed").addEventListener("change", () => {
   document.getElementsByClassName('bulb')[counter].classList.remove('active');
    delay = document.getElementById("speed").value;
    arrangeItems(document.getElementsByClassName('bulb'));
});