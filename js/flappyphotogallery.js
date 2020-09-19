var slideIndex = 1;
fshowSlides(slideIndex);

function fplusSlides(n) {
    fshowSlides(slideIndex += n);
}

function fcurrentSlide(n) {
    fshowSlides(slideIndex = n);
}

function fshowSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesFlappy");
    var dots = document.getElementsByClassName("dot-flappy");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}