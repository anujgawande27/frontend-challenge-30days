let arr = [
    {
        image: "CSK.png",
        team: "CSK",
        fullname: "Chennai Super Kings",
        color: "yellow",
        secColor: "gold",
        trophies: 5
    },
    {
        image: "mi.png",
        team: "MI",
        fullname: "Mumbai Indians",
        color: "blue",
        secColor: "gold",
        trophies: 5
    },
    {
        image: "DC.jpg",
        team: "DC",
        fullname: "Delhi Capitals",
        color: "blue",
        secColor: "red",
        trophies: 0
    },
    {
        image: "rcb.png",
        team: "RCB",
        fullname: "Royal Challengers Bangalore",
        color: "red",
        secColor: "gold",
        trophies: 1
    },
    {
        image: "srh.png",
        team: "SRH",
        fullname: "Sunrisers Hyderabad",
        color: "orange",
        secColor: "black",
        trophies: 1
    },
    {
        image: "kkr.png",
        team: "KKR",
        fullname: "Kokalkata Knight Riders",
        color: "purple",
        secColor: "gold",
        trophies: 3
    },
    {
        image: "gt.png",
        team: "GT",
        fullname: "Gujrat Titins",
        color: "skyblue",
        secColor: "black",
        trophies: 1
    },
    {
        image: "lsg.png",
        team: "LSG",
        fullname: "Lunknau super giants",
        color: "blue",
        secColor: "red",
        trophies: 0
    },
    {
        image: "rr.png",
        team: "RR",
        fullname: "Rajisthan Royals",
        color: "pink",
        secColor: "gold",
        trophies: 1
    },
    {
        image: "pk.png",
        team: "PK",
        fullname: "Punjab kings",
        color: "red",
        secColor: "black",
        trophies: 0
    },
];

let btn = document.querySelector('button');
let box = document.querySelector('#box')
let image = document.querySelector('#box img')
let nickName = document.querySelector('#box h3')
let teamName = document.querySelector('#box h1')
let trophy = document.querySelector('#box h2')


btn.addEventListener('click', function() {
    let n = arr[Math.floor(Math.random()*arr.length)]
    box.style.backgroundColor = n.color
    image.setAttribute("src", n.image)    
    nickName.innerHTML = n.team
    teamName.innerHTML = n.fullname
    trophy.innerHTML = `Trophies = ${n.trophies}`
    trophy.style.fontSize = "18px"
});