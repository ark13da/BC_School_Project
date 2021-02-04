let color1 = document.querySelector("#start");
let color2 = document.querySelector("#end");
let text = document.querySelector("#ccode");
let direction = document.querySelectorAll('input[name="direction"]');
let form = document.querySelector("form");

    

const setGradient = (event) => {
    event.preventDefault();
    let selectedDir;

    for (let x of direction) { 
        if (x.checked) {
            selectedDir = x.value;
        } 
    };
    document.body.style.backgroundImage = `linear-gradient(${selectedDir},${color1.value},${color2.value})`;
    text.textContent = `linear-gradient(${selectedDir},${color1.value},${color2.value})`;
};

form.addEventListener("change", setGradient);
