let btn = document.querySelector("#details button")
let loader = document.querySelector("#loader")
let h1 = document.querySelector('h1')

let a = 0;
btn.addEventListener('click', function(){
    btn.style.pointerEvents = 'none'
    
    let n = 30 + Math.floor(Math.random()*50)
    console.log("It will be downloaded in ",n/10,"Secounds")
    let num = setInterval(function() {
        a++
        h1.innerHTML = a+"%"
        loader.style.width = a+"%"
    },n)
    setTimeout(function(){
        clearInterval(num)
        btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.5
    },n*100)
    
})