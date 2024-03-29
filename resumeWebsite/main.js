const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        document.getElementById("dropDown").style.display = 'block';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.getElementById("dropDown").style.display = 'none';
    }
});

function togglePopup() {
    document.getElementById("popup-1").style.display = "none";
}
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        document.getElementById("popup-1").style.display = "none";
    }
});
