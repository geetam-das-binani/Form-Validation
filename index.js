
let over = false;
let button = document.getElementsByClassName("btn")[0];
button.addEventListener("click", (e) => {
    e.preventDefault();
    if (!over) {
        let green = document.querySelector(".green");
        green.classList.remove("green_d-none");
    }
    else {
        let red = document.querySelector(".red");
        red.classList.remove("red_d-none")
    }

})

let btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", () => {
    let green = document.querySelector(".green");
    green.classList.add("green_d-none")

})
let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {
    let green = document.querySelector(".red");
    green.classList.add("red_d-none")

})

