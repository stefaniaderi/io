let mybutton = document.getElementById("scroll_top");
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
const mediaQuery = window.matchMedia('(max-width: 700px)');
const menu_button = document.querySelector('.menu');
const menu = document.querySelector('.menu_dropdown');
let submenu = document.querySelectorAll('.submenu li a');
let posts = document.querySelectorAll('.content');
let toggleMoreBtn = document.querySelectorAll('.text-toggle');
let divDesc = document.querySelectorAll('.item');
let btns = document.querySelectorAll('.bigmenu li');
let title = document.getElementById('mytitle');

  title.addEventListener("click", (e) => {
  console.log(title);
  title.parentNode.classList.toggle('open');
  title.parentNode.classList.toggle('close');
  for (var y = 0; y < title.parentNode.children.length; y++){
    //console.log(childrenx[y]);
    if (title.parentNode.children[y].classList.contains('bio')){
      title.parentNode.children[y].classList.toggle("open");

      //childrenx[y].classList.toggle("close");
      //console.log(childrenx[y]);    
    }
  }
  });

//SHOW MORE TEXT
for (var i = 0; i < divDesc.length; i++) {
    divDesc[i].addEventListener("click", toggleMore);
  }

function toggleMore(){
  
  
  
  const childrenx = this.children;
  console.log(childrenx);
  for (var j = 0; j < childrenx.length; j++){
    //console.log(childrenx[j]);
    if (childrenx[j].classList.contains('info')){
      childrenx[j].classList.toggle("show");
      childrenx[j].classList.toggle("hide");
      //console.log(childrenx[j]);    
    }
    if (childrenx[j].classList.contains("text-toggle")){
      childrenx[j].classList.toggle("text-toggle_open");
    }
  }
  //this.nextElementSibling.classList.toggle("show");
  //this.nextElementSibling.classList.toggle("hide");
   //console.log(this.nextElementSibling);
  
  
  //console.log(this.classList);
  

}


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
    let postId = post.id;
    if (isInViewport(post)) {
      //loops for all submenu voices
      for (let y = 0; y < submenu.length; y++) {
        let id = submenu[y].getAttribute('data-id');
        if (postId == id){
          submenu[y].classList.add("active");
        } else {
          submenu[y].classList.remove("active");
        }
      }
      //highlight menu voice (category: project/writings)
      for (let y = 0; y < btns.length; y++) {
        let category = btns[y].getAttribute('data-tags');
        if (post.classList.contains(category)){
          console.log('working');
          btns[y].classList.add("bigActive");
        } else {
          btns[y].classList.remove("bigActive");
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
  if (this.classList.contains('filtering')) {
      this.classList.remove("filtering");
      console.log('error');
        for (var i = 0; i < posts.length; i++) {
          posts[i].classList.add('show');
        } 
    } else {

      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("filtering");
      }
      //prendi i tag del filtro selezionato
      let tags = this.dataset.tags;
      //toggle per renderlo attivo o no
      this.classList.add("filtering");
    
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
    btns[i].classList.remove("filtering");
  }
}
function clickLeft() {
      let container = document.querySelector('#flex-container');
      container.scrollTo({
        left:container.scrollLeft - 200,
        top: 0,
        behavior: "smooth"
      });
    }

    function clickRight() {
      let container = document.querySelector('#flex-container');
      container.scrollTo({
        left:container.scrollLeft + 200,
        top: 0,
        behavior: "smooth"
      });
    }

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (width< 800) {
  console.log('smol');

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

