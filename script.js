let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Window onscroll event
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');  // Memperbaiki pengambilan ID

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Memperbaiki sintaks pemilih atribut
      });
    }
  });
};

// Toggle menu and navbar active classes on click
menuIcon.onclick = () => {  // Memperbaiki typo dari 'onelick' ke 'onclick'
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
