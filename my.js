



// nav 
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.link');

  

   burger.addEventListener('click',()=>{
     nav.classList.toggle('nav-active');

     burger.classList.toggle('toggle');
     document.body.classList.toggle('bod');
   });

   
  
}

navSlide();


             


  // script for image gallery 
  var fullImgBox =document.getElementById("fullImgBox");
  var fullImg =document.getElementById("fullImg");

  function openFullImg(img){
       fullImgBox.style.display="flex";
       fullImg.src = img;
  }
  function closeFullImg(){
      fullImgBox.style.display="none";
  }

  //small gallery

  function change(x) {
    var expandImg = document.getElementById("imgdisplay");
    
    expandImg.src = x.src;
   
  
  }

// fix nav when scroll

window.onscroll = function() {myFunction()};

var navbar = document.querySelector('.nav');

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

  