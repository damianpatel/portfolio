var modal = document.getElementById("flappymodal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("flappyimg1");
var modalImg = document.getElementById("fimg01");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("fclose1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

var modal = document.getElementById("flappymodal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("flappyimg2");
var modalImg = document.getElementById("fimg02");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("fclose2")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

var modal = document.getElementById("flappymodal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("flappyimg3");
var modalImg = document.getElementById("fimg03");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("fclose3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}