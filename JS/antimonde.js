

var lien = document.querySelector("#boutonA")
var video = document.querySelector("#videoBT");

video.addEventListener("pause",coucou);

function coucou(){
    if (video.currentTime > 207 && video.currentTime < 344){
        lien.href = "/pages/AntiMonde.html";
    } else {
        lien.href = "/pages/accueil.html";
    }
}
