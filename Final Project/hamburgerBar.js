/* Hamberger menu */
/* Toggle between showing and hiding the navigation menu links */
function menuBar() {
    var x = document.getElementById("hiddenLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
}
