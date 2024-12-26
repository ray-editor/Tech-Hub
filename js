let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Change 'section' to 'section'
let navLinks = document.querySelectorAll('header nav a'); // Change 'navLnks' to 'navLinks'

const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phonenuber = document.getElementById("phonenuber");
const subject = document.getElementById("subject");
const yourmassage = document.getElementById("yourmassage");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Change 'getAttribut' to 'getAttribute'

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Change 'links' to 'link'
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Change 'herf' to 'href'
            });
        }
    });
}

menuIcon.onclick = () => { // Change 'onlick' to 'onclick'
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#00ffb3"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.5;
    y += (nextCircle.y - y) * 0.5;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

