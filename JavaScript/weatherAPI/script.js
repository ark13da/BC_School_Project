
let apiKey = config.weatherKey;
let link = '';
let url = '';

let printPlace = document.getElementById('place');
let printWeather = document.getElementById('degree');
let trigButton = document.getElementById('trigButton');

trigButton.addEventListener('click', () => {
    let cityInput = document.getElementById('city').value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&&units=metric&appid=${apiKey}`;
    fetching(url);

});

let fetching = (ul) => {
    fetch(ul).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            printPlace.textContent="Did you type it right?"
            //throw new Error('Something went wrong');
        }
    }).then(data => {
        
        printPlace.textContent = `Temprature in ${data.name}:`
        printWeather.textContent = `It is ${data.main.temp} C with ${data.weather[0].description} `
    }).catch(error => {
        //console.log(error);
        printPlace.textContent = "Did you type it right? try again!"
    })
}