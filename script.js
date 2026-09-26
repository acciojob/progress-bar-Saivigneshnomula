//your JS code here. If required.
let step = 1;

let next = document.getElementById("next");
let prev = document.getElementById("prev");

let circles = document.querySelectorAll(".circle");

next.onclick = function () {
    step++;

    circles[step - 1].classList.add("active");

    prev.disabled = false;

    if (step == 5) {
        next.disabled = true;
    }
};

prev.onclick = function () {
    circles[step - 1].classList.remove("active");

    step--;

    next.disabled = false;

    if (step == 1) {
        prev.disabled = true;
    }
};