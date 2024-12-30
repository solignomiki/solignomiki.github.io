"use strict"

const myszelovka = document.querySelector("#myszelovka");
const malenkij_princ = document.querySelector("#malenkij_princ");

const myszelovkaAudio = new Audio("assets/myszelovka.mp3");
const malenkij_princAudio = new Audio("assets/malenkij_princ.mp3");	

myszelovka.addEventListener('click', function (e) {
	myszelovkaAudio.currentTime = 0;
	myszelovkaAudio.play();
});

malenkij_princ.addEventListener("click", function(e) {
	malenkij_princAudio.currentTime = 0;
	malenkij_princAudio.play();
});