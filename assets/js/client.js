const body = document.querySelector('body')
const toggle = document.getElementById('darkToggle')
const sunMoon = document.getElementById('sunmoon')
let darkMode = false;

toggle.addEventListener('click', function(){
  body.classList.toggle('darktheme')
  if(!darkMode){  
  sunMoon.innerHTML = `<i class="fas fa-moon"></i>`
  darkMode = true;
}
  else {
    sunMoon.innerHTML = `<i class="fas fa-sun"></i>`
    darkMode = false;
  }
})