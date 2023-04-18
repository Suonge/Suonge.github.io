

var images = document.querySelector("#Bimages");

var videos = document.querySelector("#Bvideos");

var musiques = document.querySelector("#Bmusiques");

var memes = document.querySelector("#Bmemes");

var Dimages = document.querySelector("#Dimages");

var Dvideos = document.querySelector("#Dvideos");

var Dmusiques = document.querySelector("#Dmusiques");

var Dmemes = document.querySelector("#Dmemes");

// var hasard = Math.floor(Math.random() * 2);

images.addEventListener("click",changementI);

function changementI(){
    Dimages.style.display = "flex";
    Dvideos.style.display = "none";
    Dmusiques.style.display = "none";
    Dmemes.style.display = "none";
}

videos.addEventListener("click",changementV);

function changementV(){
    Dimages.style.display = "none";
    Dvideos.style.display = "flex";
    Dmusiques.style.display = "none";
    Dmemes.style.display = "none";
}

musiques.addEventListener("click",changementM);

function changementM(){
    Dimages.style.display = "none";
    Dvideos.style.display = "none";
    Dmusiques.style.display = "flex";
    Dmemes.style.display = "none";
}

memes.addEventListener("click",changementMe);

function changementMe(){
    Dimages.style.display = "none";
    Dvideos.style.display = "none";
    Dmusiques.style.display = "none";
    Dmemes.style.display = "flex";
}