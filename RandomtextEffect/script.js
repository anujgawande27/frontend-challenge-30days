let btn = document.querySelector('button')
let main = document.querySelector("#main")

let arr = ["Hey this is Anuj","Be positive","Take your approach Optimistic","love everyone","be simple","honest","work hard","consistency","disciplin"]

btn.addEventListener('click', function() {
    let n = Math.floor(Math.random()*arr.length)

    let h1 = document.createElement('h1')

    let x = Math.random()*100
    let y = Math.random()*100
    let rot = Math.random()*361

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    h1.innerHTML = arr[n]
    main.appendChild(h1)
    h1.style.position = 'absolute'
    h1.style.top = x+"%" 
    h1.style.left = y+"%"
    h1.style.color = `rgb(${c1},${c2},${c3})` 
    h1.style.rotate = rot+'deg'
    
})