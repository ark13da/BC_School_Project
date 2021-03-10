(function () {

    let speed = 800;
    let score = 0;
    let gameOver = false;
    let randArray = [];
    let pressArray = [];
    let prevRand = 1;
    let runner

     function run() {  
           runner = 
        setInterval(() => {
            randomizer()
        }, speed);
    }

   
    
        
    function randomizer() {
        let rand = Math.floor(Math.random() * 4) + 1;
        if (rand !== 0 && rand !== prevRand) {
            randArray.push(rand);
            document.getElementById(`bulb${rand}`).style.backgroundColor = 'rgb(255, 251, 2)';
            document.getElementById(`bulb${prevRand}`).style.backgroundColor = 'rgb(233, 194, 177)';
            prevRand = rand;
        } else {
            randomizer();
        }
    }
    
    function compare() {
        for (let i = 0; i < randArray.length - 1;i++) {
            if (randArray[i] === pressArray[i]) {
                continueIt();
            } else {
                endIt()
            }
            console.log(randArray[i])
            console.log(pressArray[i])
        }
    }

 

    function continueIt (){
        score +=1;
        speed -= 20;
    }

    function endIt() {
        clearInterval(runner);
        gameOver = true;
        document.getElementById("blurLay").style.display = 'block';
        document.getElementById("pScore").textContent = 'Your score was ' + score;
        document.getElementById(`bulb${prevRand}`).style.backgroundColor = 'rgb(233, 194, 177)';
    }

    function tryAgain() {
        speed = 800;
        score = 0;
        gameOver = false;
        randArray = [];
        pressArray = [];
        prevRand = 1;
        document.getElementById("blurLay").style.display = 'none';
        document.getElementById("pScore").textContent = '';
    }
    
    let bulb = document.getElementsByClassName("bulb");
    Array.from(bulb).forEach(i => {
        i.addEventListener('click', () => {
            let attr = Number(i.getAttribute("data-value"));
            pressArray.push(attr);
            compare();
            console.log(randArray)
            console.log(pressArray)
            console.log(score)

        })
    })
       
    document.getElementById("again").addEventListener('click', tryAgain);
    document.getElementById("stop").addEventListener('click', endIt);
    document.getElementById("start").addEventListener('click', run);

}
)();