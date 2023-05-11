let mybutton = document.getElementById("scroll_top");
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
const mediaQuery = window.matchMedia('(max-width: 700px)');

window.onscroll = function() {

  //TOP BUTTON APPEARS
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    mybutton.style.display = "block";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.display = "none";
    mybutton.style.opacity = "0";
  }
  var currentScrollPos = window.pageYOffset;

  prevScrollpos = currentScrollPos;
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//ACTIVE LINK IN MENU
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
      document.links[i].className = 'active';
    }
}
