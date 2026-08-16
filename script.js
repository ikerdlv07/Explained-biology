const dropdownButton = document.querySelector(".dropdown-button");
const dropdown = document.querySelector(".dropdown");

dropdownButton.addEventListener("click", function() {
    dropdown.classList.toggle("open");
});