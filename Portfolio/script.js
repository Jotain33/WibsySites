document.getElementById("navbar").addEventListener("scroll", bajar);

window.onscroll = function(){bajar()}

function bajar () {
    if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
        document.getElementById("navbar").className = "navegacion activado";
      } else {
        document.getElementById("navbar").className = "navegacion";
      }
    }
