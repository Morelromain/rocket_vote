const btnShow = document.getElementById("show_detail");
const btnHide = document.getElementById("hide_detail");
const targetDetails = document.getElementById("details");
btnShow.onclick = displayShow;
btnHide.onclick = displayHide;

function displayShow () {
    targetDetails.style.display = "block";
    btnHide.style.display = "block";
    btnShow.style.display = "none";
};

function displayHide () {
    targetDetails.style.display = "none";
    btnHide.style.display = "none";
    btnShow.style.display = "block";
};