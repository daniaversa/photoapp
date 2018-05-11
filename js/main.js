document.addEventListener("DOMContentLoaded", function(event) {
// Hamburguer toggle
function toggleNav(){
  document.getElementById("nav-list").classList.toggle("is-open");
}

document.querySelector("#hamburguer").addEventListener("click", toggleNav);

});
