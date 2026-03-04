let btn = document.querySelector('button')
let main = document.querySelector('#main')

btn.addEventListener('mousemove', function(){
    let div = document.createElement('div')

    let x = Math.random()*100
    let y = Math.random()*100
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    div.style.width = "50px"
    div.style.height = "50px"
    div.style.border = `2px solid rgb(${c1},${c2},${c3})`
    div.style.borderRadius = "50%"
    div.style.position = "absolute"
    div.style.top = x+"%"
    div.style.left = y+"%"
    div.style.boxShadow = `0 0 10px rgb(${c3},${c1},${c2})`

    main.appendChild(div)
})