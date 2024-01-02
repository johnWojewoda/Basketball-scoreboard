let scoreBox1 = document.getElementById("score-box1");
let scoreBox2 = document.getElementById("score-box2");
let resetBtn = document.getElementById("reset-btn")
let count = 0;
let count2 = 0;

function add1() {
    count = count + 1;
    scoreBox1.textContent = count
}

function add2() {
    count = count + 2;
    scoreBox1.textContent = count
}

function add3() {
    count = count + 3;
    scoreBox1.textContent = count
}

function add_1() {
    count2 = count2 + 1;
    scoreBox2.textContent = count2
}

function add_2() {
    count2 = count2 + 2;
    scoreBox2.textContent = count2
}

function add_3() {
    count2 = count2 + 3;
    scoreBox2.textContent = count2
}

function reset1() {
    count = 0
    count2 = 0
    scoreBox2.textContent = count
    scoreBox1.textContent = count2
}

