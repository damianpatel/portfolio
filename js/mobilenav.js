function mobileNavBar() {
    var x = document.getElementById("navbar");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}