let step = 1;

let next = document.getElementById("next");
let prev = document.getElementById("prev");

let circles = document.querySelectorAll(".circle");
let progress = document.getElementById("progress");

next.onclick = function () {
    step++;

    circles[step - 1].classList.add("active");

    progress.style.width = ((step - 1) * 25) + "%";

    prev.disabled = false;

    if (step == 5) {
        next.disabled = true;
    }
};

prev.onclick = function () {

    // Find the current active circle
    let activeCircle = document.querySelector(".circle.active");

    // Remove active from it
    activeCircle.classList.remove("active");

    step--;

    // Keep the progress line correct
    progress.style.width = ((step - 1) * 25) + "%";

    next.disabled = false;

    if (step == 1) {
        prev.disabled = true;
    }
};