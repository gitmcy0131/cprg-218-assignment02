document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
});

/* addEventListener to change background color */
const changeBgBtn = document.getElementById("changeBgBtn");
const aboutSection = document.getElementById("about");

const originalColor = "#ffffff";
const newColor = "#3ae8f4ff";

aboutSection.style.backgroundColor = originalColor;

changeBgBtn.addEventListener("click", function () {
    const currentColor = window.getComputedStyle(aboutSection).backgroundColor;

    if (currentColor === "rgb(255, 255, 255)") {
        aboutSection.style.backgroundColor = newColor;
    } else {
        aboutSection.style.backgroundColor = originalColor;
    }

    console.log("Button clicked! Background color toggled.");
});