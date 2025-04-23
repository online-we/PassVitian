const header = document.querySelector("header")

window.addEventListener("scroll" , function() {
    header.classList.toggle("sticky" ,window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('open');
// };

// js code part for new try section for course , Add any interactivity here (e.g., dynamic course loading or navigation)
console.log('Page loaded successfully');

// js code for updated home section
document.querySelector('.find-btn').addEventListener('click', () => {
    alert('Navigating to find internships...');
  });
  
  document.querySelector('.post-btn').addEventListener('click', () => {
    alert('Navigating to post internships...');
  });
  



