//Transitions
window.sr = ScrollReveal();

sr.reveal('.card-transition1', {
  duration: 2000,
  origin: 'top',
  distance: '-100px',
  opacity: 0.2
});
sr.reveal('.card-transition2', {
  duration: 2000,
  origin: 'top',
  distance: '-150px',
  opacity: 0.2
});
sr.reveal('.card-transition3', {
  duration: 2000,
  origin: 'top',
  distance: '-200px',
  opacity: 0.2
});
sr.reveal('.card-transition4', {
  duration: 2000,
  origin: 'top',
  distance: '-250px',
  opacity: 0.2
});

sr.reveal('.tecnologias', {
  duration: 3000,
  origin: 'center',
  distance: '-100px',
  scale: 0.3
});

//Navegacion
document.getElementById("navbar").addEventListener("scroll", bajar);

window.onscroll = function(){bajar()}

function bajar () {
if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
    document.getElementById("navbar").className = "navegacion-activado";
    document.getElementById("link-nav").className = 'nav-link text-black'
    document.getElementById("link-nav2").className = 'nav-link text-black'
    document.getElementById("link-nav3").className = 'nav-link text-black'
  } else {
    document.getElementById("navbar").className = "navegacion";
    document.getElementById("link-nav").className = 'nav-link text-white'
    document.getElementById("link-nav2").className = 'nav-link text-white'
    document.getElementById("link-nav3").className = 'nav-link text-white'
  }
}
