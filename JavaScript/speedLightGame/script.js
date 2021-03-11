
(function () {

    let speed = 800;
    let score = 0;
    let randCount = 0;
    let prevRand = 1;
    let gameOver= false;
    let startSound = new sound("start.mp3");
    let endSound = new sound("end.mp3");

    function run() {
        flasher();
        document.getElementById("stop").style.display = 'inline';
        document.getElementById("start").style.display = 'none';
        startSound.play();

    }


    function flasher() {
        if (randCount < score + 4 && gameOver==false) {
            setTimeout(() => {
                randomizer();
                flasher();
            }, speed);
            
        } else {
            endIt()
        }
    }

    function randomizer() {
        let rand = Math.floor(Math.random() * 4) + 1;
        if (rand !== 0 && rand !== prevRand) {
            randCount +=1;
            document.getElementById(`bulb${rand}`).value = '1';
            document.getElementById(`bulb${prevRand}`).value = '0';
            document.getElementById(`bulb${rand}`).style.backgroundColor = 'rgb(255, 251, 2)';
            document.getElementById(`bulb${prevRand}`).style.backgroundColor = 'rgb(233, 194, 177)';
            prevRand = rand;
        } else {
            randomizer();
        }
    }

    function endIt() {
        startSound.stop();
        endSound.play();
        gameOver = true;
        document.getElementById("blurLay").style.display = 'block';
        document.getElementById("pScore").textContent = scoreText();
        document.getElementById(`bulb${prevRand}`).style.backgroundColor = 'rgb(233, 194, 177)';
        document.getElementById(`bulb${prevRand}`).value = '0';
        
    }

    function tryAgain() {
        gameOver=false;
        speed = 800;
        score = 0;
        randCount = 0;
        prevRand = 1;
        document.getElementById("blurLay").style.display = 'none';
        document.getElementById("pScore").textContent = '';
        document.getElementById("stop").style.display = 'none';
        document.getElementById("start").style.display = 'inline';
        document.getElementById("hScore").textContent = 'Score: 0';
    }

    let bulb = document.getElementsByClassName("bulb");
    Array.from(bulb).forEach(i => {
        i.addEventListener('click', (e) => {
            if(randCount>0){
                let attr = e.target.value;
                if (attr === "1") {
                    score += 1;
                    speed -= 50;
                    document.getElementById("hScore").textContent = 'Score: ' + score;
                } else {
                    endIt();
                }
            }
        })
    })

    let scoreText = () => {
        return (score > 15 ? `Your score is ${score} and you rock` : score > 10 ? `Your score is ${score} but you don't suck` : score > 5 ? `Your score is ${score} and you suck a little` : `Your score is ${score} and you suck`);
    }

    document.getElementById("again").addEventListener('click', tryAgain);
    document.getElementById("stop").addEventListener('click', endIt);
    document.getElementById("start").addEventListener('click', run);


    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        }
        this.stop = function () {
            this.sound.pause();
        }
    }

}
)();