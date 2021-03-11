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
        document.getElementById("stop").style.display = 'inline';
        document.getElementById("start").style.display = 'none';
    }




    function randomizer() {
        let rand = Math.floor(Math.random() * 4) + 1;
        if (rand !== 0 && rand !== prevRand) {
            randArray.push(rand);
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
        clearInterval(runner);
        gameOver = true;
        document.getElementById("blurLay").style.display = 'block';
        document.getElementById("pScore").textContent = 'Your score was ' + score;
        document.getElementById(`bulb${prevRand}`).style.backgroundColor = 'rgb(233, 194, 177)';
        document.getElementById(`bulb${prevRand}`).value = '0';
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
        document.getElementById("stop").style.display = 'none';
        document.getElementById("start").style.display = 'inline';
        document.getElementById("hScore").textContent = '';
    }

    let bulb = document.getElementsByClassName("bulb");
    Array.from(bulb).forEach(i => {
        i.addEventListener('click', (e) => {
            let attr = e.target.value;
            if (attr === "1") {
                score += 1;
                speed -= 100;
                document.getElementById("hScore").textContent = 'Score: ' + score;
            } else {
                endIt();
            }

        })
    })

    document.getElementById("again").addEventListener('click', tryAgain);
    document.getElementById("stop").addEventListener('click', endIt);
    document.getElementById("start").addEventListener('click', run);

}
)();