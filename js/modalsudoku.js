var modal = document.getElementById("sudokumodal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("sudokuimg1");
var modalImg = document.getElementById("simg01");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("sclose1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

var modal = document.getElementById("sudokumodal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("sudokuimg2");
var modalImg = document.getElementById("simg02");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("sclose2")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

var modal = document.getElementById("sudokumodal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("sudokuimg3");
var modalImg = document.getElementById("simg03");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("sclose3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}