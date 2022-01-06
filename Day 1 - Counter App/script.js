const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        //console.log("Add");
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("subtract")) {
        //console.log("Subtract");
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("reset")) {
        //console.log("Reset");
        count.innerHTML = 0;
        setColor();
    }
});

function setColor(){
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
        count.style.color = "orangered";
    } else {
        count.style.color = "white";
    }
}


/*
bad way to do the same thing

const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");

add.addEventListener("click", () => {
    count.innerHTML++;
})

sub.addEventListener("click", () => {
    count.innerHTML--;
})

resetCount.addEventListener("click", () => {
    count.innerHTML = 0;
})*/