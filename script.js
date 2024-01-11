function toggleDropdown() {
  var dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".fa-bars")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function redirectToDailyPass() {
  window.location.href = "dailyPass.html";
}
function redirectToBookTicket() {
  window.location.href = "bookTicketnew.html";
}
function booknow() {
  window.location.href = "confirm_booking.html";
}
function about() {
  window.location.href = "about.html";
}
