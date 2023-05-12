let mybutton = document.getElementById("scroll_top");
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
const mediaQuery = window.matchMedia('(max-width: 700px)');
const menu_button = document.querySelector('.menu');
const menu = document.querySelector('.menu_dropdown');
let submenu = document.querySelectorAll('.submenu li a');
let posts = document.querySelectorAll('.content');

//MENU RESPONSIVE
menu_button.addEventListener("click", dropdownMenu);

function dropdownMenu(){
  menu_button.classList.toggle('menu_open');
  menu.classList.toggle('showmenu');

}

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

//MENU VOICES ACT LIKE FILTERS
let tagsList = [];
let btns = document.querySelectorAll('.bigmenu li');;
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", filterSelection);
  }

//SINGLE FILTER
function filterSelection(evt) {
  if (evt.target !== this) return;
  console.log('click');
  for (var i = 0; i < posts.length; i++) {
          posts[i].classList.add('show');
        } 
    //se non clicco su un tag già attivo visualizza tutti i post -> annulla filtro
  if (this.classList.contains('bigActive')) {
      this.classList.remove("bigActive");
      console.log('error');
        for (var i = 0; i < posts.length; i++) {
          posts[i].classList.add('show');
        } 
    } else {

      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("bigActive");
      }
      //prendi i tag del filtro selezionato
      let tags = this.dataset.tags;
      //toggle per renderlo attivo o no
      this.classList.add("bigActive");
    
      //rimuovi dai post tutti gli attivi per poi aggiungerli dopo
      for (var i = 0; i < posts.length; i++) {
        posts[i].classList.remove('show');
      }
      //aggiungi show solo se il post contiene tutti gli elementi in tagslist
      for (var i = 0; i < posts.length; i++) {
        //console.log(post[i].classList);

        //console.log(tagsList[j]);
        if (posts[i].classList.contains(tags)){
          posts[i].classList.add('show');
        }
        
      }

    }

}

//if click submenu delete filters
let subtns = document.querySelectorAll('.submenu li');;
for (var i = 0; i < subtns.length; i++) {
    subtns[i].addEventListener("click", filterDelete);
  }

function filterDelete() {
  for (var i = 0; i < posts.length; i++) {
    posts[i].classList.add('show');
  } 
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("bigActive");
  }
}


/*MULTIFILTER
function filterSelection(evt) {
  if (evt.target !== this) return;
  console.log('click');
  //prendi i tag del filtro selezionato
  let tags = this.dataset.tags;
  //toggle per renderlo attivo o no
  this.classList.toggle("active");
  //aggiungi quello appena cliccato alla lista degli attivi
  tagsList.push(tags);
  //console.log(tagsList);

  //se è già attivo toglilo dalla lista
    if (!this.classList.contains('active')){
      tagsList = tagsList.filter(e => e !== tags);
      //console.log(tagsList);
    }
    //rimuovi dai post tutti gli attivi per poi aggiungerli dopo
    post = document.querySelectorAll(".content");
    for (var i = 0; i < post.length; i++) {
      post[i].classList.remove('show');
    }
    //aggiungi show solo se il post contiene tutti gli elementi in tagslist
    for (var i = 0; i < post.length; i++) {
      //console.log(post[i].classList);
    for (var j = 0; j < tagsList.length; j++) {
      //console.log(tagsList[j]);
      if (post[i].classList.contains(tagsList[j])){
        post[i].classList.add('show');
      }
    }
  }
  //se non ci sono tags visualizza tutto
    if (tagsList.length === 0) {
        for (var i = 0; i < post.length; i++) {
          post[i].classList.add('show');
        }
    }
    

}*/

