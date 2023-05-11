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

//SCROLLING HIGLIGHT TABLE OF CONTENTS
function isElementInViewport (el) {
    
    //special bonus for those using jQuery
    if (typeof $ === "function" && el instanceof $) {
        el = el[0];
    }
    
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || doc.documentElement.clientWidth,
        vHeight  = window.innerHeight || doc.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
}


var handler = function(){
  var visible = 0;
  [1,2,3,4].forEach(function(id){
    if(isElementInViewport($('#'+id))) visible = id;
  })
  
  if(visible){
    $('#index div').removeClass('active');
    $('#index-'+visible).addClass('active');
  }
};



//jQuery
$(window).on('DOMContentLoaded load resize scroll', handler);