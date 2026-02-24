const btn = document.getElementById("startBtn");
const scene = document.getElementById("scene");
const music = document.getElementById("music");
const moon = document.querySelector(".moonw");

btn.onclick = () => {
  btn.style.display = "none";       
  scene.classList.remove("hidden"); 
  moon.classList.add("moon-move");  

  music.currentTime = 0;
  music.play().catch(() => {
    console.log("Browser blocked music");
  });
};