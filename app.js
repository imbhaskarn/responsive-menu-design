window.onload = document.getElementById("menu-btn").addEventListener("click", () => {
    let toggle = document.getElementById('toggle').style.display;
    if (toggle == "none") {
        document.getElementById('toggle').style.display = "block"
    }
    else {
        document.getElementById('toggle').style.display = "none"
    }
});


