const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/(navLinks.length) + 0.1}s`
            }
        });
        // burger animation
        burger.classList.toggle('toggle')
    })
}


navSlide();



// const logo = document.querySelectorAll("#logo path");

// for (let i=0; i<logo.length; i++) {
//     console.log(i);
//     console.log(logo[i].getTotalLength());
// }