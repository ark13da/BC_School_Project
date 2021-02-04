

let fadeOut = () => { 
    //nav.style.backgroundColor ='rgba(86, 83, 107,0.2)'
    //document.documentElement.scrollTop
    if (document.documentElement.scrollTop > 1) {
        document.getElementById("nav").style.backgroundColor = "rgba(86, 83, 107,0.5)";
        document.getElementById("nav").style.padding = "1%"}
   
    //document.getElementById("nav").style.backgroundColor = "rgba(86, 83, 107,0.5)";
    //document.getElementById("nav").style.padding = "1%"
}
window.addEventListener("scroll", fadeOut);