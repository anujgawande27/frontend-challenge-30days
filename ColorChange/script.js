let btn = document.querySelector('button')
let box = document.querySelector('#box')
let main = document.querySelector('main')

btn.addEventListener('click', function() {
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    main.style.background = `linear-gradient(to left, rgb(${c3},${c1},${c2}), rgb(${c1},${c3},${c2}), rgb(${c2},${c2},${c3}))` 
})