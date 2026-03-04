let btn = document.querySelector('button')
let main = document.querySelector('#main')

btn.addEventListener('click', function() {
    let div = document.createElement('div')
    
    let x = Math.random()*100
    let y = Math.random()*100
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let rot = Math.floor(Math.random()*361)

    div.style.height = "100px"
    div.style.width = "100px"
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.position = "absolute"
    div.style.top = x+'%'
    div.style.left = y+'%'
    div.style.rotate = rot+'deg'

    main.appendChild(div)

    console.log(div)
})