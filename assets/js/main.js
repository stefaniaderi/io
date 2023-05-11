let mybutton = document.getElementById("scroll_top");
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
const mediaQuery = window.matchMedia('(max-width: 700px)');
let submenu = document.querySelectorAll('.submenu li a');
let posts = document.querySelectorAll('.content');


//is in viewport function 
var isInViewport = function (elem) {
    const { top, bottom } = elem.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
    (top > 0 || bottom > 0) &&
    top < vHeight
  );
};




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

//SCROLLING HIGLIGHT TABLE OF CONTENTS
  let j = 0;
  //loops for all posts
  while (j < posts.length) {
    let post = posts[j];
    let postCategory = post.id;
    if (isInViewport(post)) {
      //loops for all menu voices
      for (let y = 0; y < submenu.length; y++) {
        let category = submenu[y].getAttribute('data-cat');
        if (postCategory == category){
          submenu[y].classList.add("active");
        } else {
          submenu[y].classList.remove("active");
        }
      }

    }
    j++;
  }

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



