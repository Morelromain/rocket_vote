const target = [];
const btn_add = [];
const btn_del = [];

for (let step = 2; step < 10; step++) {
    const count = target.push(document.getElementById("choicefield" + step));
    const count2 = btn_add.push(document.getElementById("toggle" + step));
    const count3 = btn_del.push(document.getElementById("toggle" + step + "b"));
};

//1
btn_add[0].onclick = function displayDiv2 () {
    target[0].style.display = "block";
    btn_del[0].style.display = "block";
    btn_add[0].style.display = "none";
    btn_add[1].style.display = "block";
};

btn_del[0].onclick = function displayDiv2b () {
    target[0].style.display = "none";
    btn_del[0].style.display = "none";
    btn_add[0].style.display = "block";
    btn_add[1].style.display = "none";
};

// 2 - 8
for (let step = 1; step < 7; step++) {

    btn_add[step].onclick = function displayDiv3 () {
        target[step].style.display = "block";
        btn_del[step].style.display = "block";
        btn_add[step].style.display = "none";
        btn_del[step-1].style.display = "none";
        btn_add[step+1].style.display = "block";
    };

    btn_del[step].onclick = function displayDiv3b () {
        target[step].style.display = "none";
        btn_del[step].style.display = "none";
        btn_add[step].style.display = "block";
        btn_del[step-1].style.display = "block";
        btn_add[step+1].style.display = "none";
    };
};

// 9
btn_add[7].onclick = function displayDiv9 () {
    target[7].style.display = "block";
    btn_del[7].style.display = "block";
    btn_add[7].style.display = "none";
    btn_del[6].style.display = "none";
};

btn_del[7].onclick = function displayDiv9b () {
    target[7].style.display = "none";
    btn_del[7].style.display = "none";
    btn_add[7].style.display = "block";
    btn_del[6].style.display = "block";
};
