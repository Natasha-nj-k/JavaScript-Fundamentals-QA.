//Question25: Write a script to change the background color of a webpage when a button is clicked.

const button = document.getElementById("change-color");
button.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
});