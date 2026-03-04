let h1 = document.querySelector("h1")
let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")
let save = document.querySelector("#save")
let reset = document.querySelector("#reset")
let load = document.querySelector("#load")
let a = 0

inc.addEventListener('click', function(){
    a++
    h1.innerHTML = a
})
dec.addEventListener('click', function(){
    a--
    h1.innerHTML = a
})
let savecopy = 0;
save.addEventListener('click', function(){
    savecopy = a
    h1.innerHTML = savecopy
})
load.addEventListener('click', function() {
    h1.innerHTML = savecopy
})
reset.addEventListener('click', function() {
    a = 0
    savecopy = 0    
    h1.innerHTML = a
})