

// nav 
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.link');

  

   burger.addEventListener('click',()=>{
     nav.classList.toggle('nav-active');

     burger.classList.toggle('toggle');
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
  