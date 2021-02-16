
let header = document.getElementById("nav");


window.onscroll = function () { scrollFunction() };

/*function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").style.padding = "30px 10px";
        document.getElementById("nav").style.backgroundColor = "rgba(86, 83, 107,0.5)";
        
    } else {
        document.getElementById("nav").style.padding = "40px 10px";
        document.getElementById("nav").style.backgroundColor = "#FFC582";
        
    }
}
*/
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav").classList.add("band-scroll");
        document.getElementById("btop").style.display = "block";
        
    } else {
        document.getElementById("nav").classList.remove("band-scroll");
        document.getElementById("btop").style.display = "none";
        
    }
}

