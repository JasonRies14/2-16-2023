var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " white";
}


window.addEventListener('load', () => {
 
    const notes = document.querySelector('#id_notes'); // Get textarea element
    
    const headerDiv = document.createElement("div"); // Create a <div> element
    headerDiv.innerHTML = "SHOULD BE ON TOP"; // Insert instructions
    
    // add header on top 
    notes.parentNode.insertBefore(headerDiv, notes)
  })