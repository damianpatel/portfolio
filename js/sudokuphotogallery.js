var slideIndex = 1;
sshowSlides(slideIndex);

function splusSlides(n) {
    sshowSlides(slideIndex += n);
}

function scurrentSlide(n) {
    sshowSlides(slideIndex = n);
}

function sshowSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesSudoku");
    var dots = document.getElementsByClassName("dot-sudoku");
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