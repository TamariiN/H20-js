// *Change the background color of an HTML element.

let c = document.querySelector("h1")

c.style.backgroundColor = "red"


//     *Hide an HTML element by changing its display property.

let h = document.querySelector("h2")

h.style.display = "none"


//     *Toggle a CSS class on an element when it is clicked.

let cl = document.querySelector("h3")

cl.addEventListener("click",  () => {
    cl.classList.toggle("act")
})


//     *Change the text content of an element when a button is clicked.

let cont = document.querySelector("button")

cont.addEventListener("click", () => {
    c.innerHTML= "Hi, my homework is getting ready :) "
})

//     *Increment or decrement a counter when respective buttons are clicked.

let inc = document.querySelector(".incr")
let dec = document.querySelector(".decr")
let h6 = document.querySelector("h6")

let counter = 0; 

inc.addEventListener("click", () => {
    h6.innerHTML = counter++
})
dec.addEventListener("click", () =>{
    h6.innerHTML = counter-- 
})

//     *change box color to click the button

let box = document.querySelector(".box") 
let bc = document.querySelector("#bb")

bc.addEventListener("click", ()=> {
    box.style.backgroundColor = "navy"
})

