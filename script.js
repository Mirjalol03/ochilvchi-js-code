function menuToggle(){
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    const body = document.querySelector('body');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
    body.classList.toggle('active');
 }