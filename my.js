
// js for slideshow 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// js for menu//
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link');

    
 
     burger.addEventListener('click',()=>{
       nav.classList.toggle('nav-active');

       burger.classList.toggle('toggle');
     });

     
    
  }
  navSlide();


   //js for nav content change//
   function openPage(pageName, elmnt, color) {
   


    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
   
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    
    document.getElementById(pageName).style.display = "block";
  
    elmnt.style.backgroundColor = color;
  }
  
  
  document.getElementById("defaultOpen").click();

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