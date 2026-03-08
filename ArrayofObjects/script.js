let persons = [
  {
    image: "https://images.unsplash.com/photo-1772090049995-6116febe0d60?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Arjun Mehta",
    profession: "Software Developer",
    details: "Builds scalable web applications using JavaScript React Node modern technologies"
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Priya Sharma",
    profession: "Graphic Designer",
    details: "Creates visually appealing designs logos branding posters using creative ideas"
  },
  {
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rohit Verma",
    profession: "Data Analyst",
    details: "Analyzes datasets finds insights builds dashboards using Python SQL tools"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neha Kapoor",
    profession: "Photographer",
    details: "Captures stunning portraits landscapes moments using professional camera"
  },
  {
    image: "https://images.unsplash.com/photo-1599972680486-1acb1358755a?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Karan Malhotra",
    profession: "Entrepreneur",
    details: "Builds startups leads teams innovates solutions creates value in markets"
  },
  {
    image: "https://images.unsplash.com/photo-1620842235018-0f62155c0991?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anjali Singh",
    profession: "Teacher",
    details: "Educates students inspires learning builds strong foundations for bright futures"
  },
  {
    image: "https://images.unsplash.com/photo-1574174671391-55e5db0d1739?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rahul Nair",
    profession: "Doctor",
    details: "Treats patients diagnoses illnesses improves health using modern medical knowledge"
  },
  {
    image: "https://images.unsplash.com/photo-1562208512-ec508326186b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Meera Joshi",
    profession: "Artist",
    details: "Creates beautiful paintings expressing emotions culture imagination through vibrant colors"
  },
  {
    image: "https://images.unsplash.com/photo-1612989430225-afe25cfaacf2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vikram Patel",
    profession: "Mechanical Engineer",
    details: "Designs machines improves systems solves industrial problems using engineering principles"
  },
  {
    image: "https://images.unsplash.com/photo-1598302082214-b5b016737dfb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sneha Kulkarni",
    profession: "Computer Science Student",
    details: "Learns programming algorithms builds projects explores technology for future innovations"
  }
];

let main = document.querySelector('main');

let clutter = ""

persons.forEach(function(info) {
    clutter = clutter + `<div id="box">
            <img src="${info.image}" alt="">
            <h1>${info.name}</h1>
            <h3>${info.profession}</h3>
            <p>${info.details}</p>
        </div>`
})

main.innerHTML = clutter
