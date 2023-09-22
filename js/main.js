/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 2000,
        reset: true
    });
    
sr.reveal(`.txt ,.photo ,.about-img  , .text , .section-title ,.box1 , .box , .text-con , .botton-con , .text-foot , .social-icons `, {
        interval: 200
    })


/* DARK LIGHT THEME */ 
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
//const p = document.querySelector('p');
const h2 = document.querySelector('h2');
const h1 = document.querySelector('.prag');
const h11 = document.querySelector('.prag1');
const h111 = document.querySelector('.prag3');
const nav = document.querySelector('.navbar');
const nav1 = document.querySelector('.navbar-brand');
const navtoggle = document.querySelector('.navbar-toggler');
const links = document.querySelector('.links');
const links2 = document.querySelector('.links2');
const links3 = document.querySelector('.links3');
const links4 = document.querySelector('.links4');
const links5 = document.querySelector('.links5');

toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon');

  if(this.classList.toggle('bi-brightness-high-fill')){
      body.style.background = 'white';
      body.style.color = 'black';
      body.style.transition = '2s';
      //p.style.color = 'gray';
      h2.style.color = '#393939';
      h1.style.color = '#393939';
      h11.style.color = 'black';
      h111.style.color = 'black';
      nav.style.background = '#f1eeee';
      nav1.style.color = '#393939';
      nav1.style.color = '#393939';
      navtoggle.style.color = '#393939';
      links.style.color = '#393939';
      links2.style.color = '#393939';
      links3.style.color = '#393939';
      links4.style.color = '#393939';
      links5.style.color = '#393939';
  }else{
      body.style.background = 'black';
      body.style.color = 'white';
      body.style.transition = '2s';
    
      h2.style.color = 'white';
      h1.style.color = 'white';
      h11.style.color = 'white';
      h111.style.color = 'white';
      nav.style.background = 'black';
      nav1.style.color = 'white';
      navtoggle.style.color = 'white';
      links.style.color = 'white';
      links2.style.color = 'white';
      links3.style.color = 'white';
      links4.style.color = 'white';
      links5.style.color = 'white';
  } 
});