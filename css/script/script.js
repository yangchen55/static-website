
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

   var elememts=document.getElementsByClassName("column");
   var a;
   function one(){
       for(a=0; a<elememts.length; a++){
           elememts[a].style.msFlex="100%";
           elememts[a].style.msFlex="100%";
       }
   }
   function two(){
       for(a=0; a<elements.length; a++){
        elements[a].style.msFlex = "50%";  // IE10
         elements[a].style.flex = "50%";
       }
   }

function three(){
    for(a=0; a<elements.length; a++){
        elements[a].style.msFlex="25%";
        elements[a].style.flex="25%";
    }
    }
    var header=document.getElemenentsByClassName("button");
    var btns=header.getElementsByClassName("btn");
    for(var a=0; i< btns.length; i++){

        btns[a].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
    }
