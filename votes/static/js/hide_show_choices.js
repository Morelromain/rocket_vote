// 2
const targetDiv2 = document.getElementById("choicefield2");
const btn2 = document.getElementById("toggle2");
const btn2b = document.getElementById("toggle2b");
const targetDiv3 = document.getElementById("choicefield3");
const btn3 = document.getElementById("toggle3");
const btn3b = document.getElementById("toggle3b");
const targetDiv4 = document.getElementById("choicefield4");
const btn4 = document.getElementById("toggle4");
const btn4b = document.getElementById("toggle4b");

btn2.onclick = displayDiv2();


function displayDiv2 () {
    targetDiv2.style.display = "block";
    btn2b.style.display = "block";
    btn2.style.display = "none";
    btn3.style.display = "block";
};

function displayDiv2b () {
    targetDiv2.style.display = "none";
    btn2b.style.display = "none";
    btn2.style.display = "block";
    btn3.style.display = "none";
};

// 3

btn3.onclick = displayDiv3;
btn3b.onclick = displayDiv3b;

function displayDiv3 () {
    targetDiv3.style.display = "block";
    btn3b.style.display = "block";
    btn3.style.display = "none";
    btn2b.style.display = "none";
    btn4.style.display = "block";
};

function displayDiv3b () {
    targetDiv3.style.display = "none";
    btn3b.style.display = "none";
    btn3.style.display = "block";
    btn2b.style.display = "block";
    btn4.style.display = "none";
};

// 4

btn4.onclick = displayDiv4;
btn4b.onclick = displayDiv4b;

function displayDiv4 () {
    targetDiv4.style.display = "block";
    btn4b.style.display = "block";
    btn4.style.display = "none";
    btn3b.style.display = "none";
    btn5.style.display = "block";
};

function displayDiv4b () {
    targetDiv4.style.display = "none";
    btn4b.style.display = "none";
    btn4.style.display = "block";
    btn3b.style.display = "block";
    btn5.style.display = "none";
};

// 5
const targetDiv5 = document.getElementById("choicefield5");
const btn5 = document.getElementById("toggle5");
const btn5b = document.getElementById("toggle5b");
btn5.onclick = displayDiv5;
btn5b.onclick = displayDiv5b;

function displayDiv5 () {
    targetDiv5.style.display = "block";
    btn5b.style.display = "block";
    btn5.style.display = "none";
    btn4b.style.display = "none";
    btn6.style.display = "block";
};

function displayDiv5b () {
    targetDiv5.style.display = "none";
    btn5b.style.display = "none";
    btn5.style.display = "block";
    btn4b.style.display = "block";
    btn6.style.display = "none";
};

// 6
const targetDiv6 = document.getElementById("choicefield6");
const btn6 = document.getElementById("toggle6");
const btn6b = document.getElementById("toggle6b");
btn6.onclick = displayDiv6;
btn6b.onclick = displayDiv6b;

function displayDiv6 () {
    targetDiv6.style.display = "block";
    btn6b.style.display = "block";
    btn6.style.display = "none";
    btn5b.style.display = "none";
    btn7.style.display = "block";
};

function displayDiv6b () {
    targetDiv6.style.display = "none";
    btn6b.style.display = "none";
    btn6.style.display = "block";
    btn5b.style.display = "block";
    btn7.style.display = "none";
};

// 7
const targetDiv7 = document.getElementById("choicefield7");
const btn7 = document.getElementById("toggle7");
const btn7b = document.getElementById("toggle7b");
btn7.onclick = displayDiv7;
btn7b.onclick = displayDiv7b;

function displayDiv7 () {
    targetDiv7.style.display = "block";
    btn7b.style.display = "block";
    btn7.style.display = "none";
    btn6b.style.display = "none";
    btn8.style.display = "block";
};

function displayDiv7b () {
    targetDiv7.style.display = "none";
    btn7b.style.display = "none";
    btn7.style.display = "block";
    btn6b.style.display = "block";
    btn8.style.display = "none";
};

// 8
const targetDiv8 = document.getElementById("choicefield8");
const btn8 = document.getElementById("toggle8");
const btn8b = document.getElementById("toggle8b");
btn8.onclick = displayDiv8;
btn8b.onclick = displayDiv8b;

function displayDiv8 () {
    targetDiv8.style.display = "block";
    btn8b.style.display = "block";
    btn8.style.display = "none";
    btn7b.style.display = "none";
    btn9.style.display = "block";
};

function displayDiv8b () {
    targetDiv8.style.display = "none";
    btn8b.style.display = "none";
    btn8.style.display = "block";
    btn7b.style.display = "block";
    btn9.style.display = "none";
};

// 9
const targetDiv9 = document.getElementById("choicefield9");
const btn9 = document.getElementById("toggle9");
const btn9b = document.getElementById("toggle9b");
btn9.onclick = displayDiv9;
btn9b.onclick = displayDiv9b;

function displayDiv9 () {
    targetDiv9.style.display = "block";
    btn9b.style.display = "block";
    btn9.style.display = "none";
    btn8b.style.display = "none";
};

function displayDiv9b () {
    targetDiv9.style.display = "none";
    btn9b.style.display = "none";
    btn9.style.display = "block";
    btn8b.style.display = "block";
};