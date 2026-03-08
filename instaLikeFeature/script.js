let btn = document.querySelector('img')
let love = document.querySelector("#love")

btn.addEventListener('dblclick', function(){
    love.style.opacity = 1
    love.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1)"

    setTimeout(function(){
        love.style.transform = "translate(-50%, -310%) rotate(-60deg) scale(1)"
    },800)

    setTimeout(function(){
        love.style.opacity = 0
    },900)

    setTimeout(function(){
        love.style.opacity = 0
        love.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1)"
    },1200)
})