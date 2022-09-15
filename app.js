const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / navLinks.length + 0.1
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// const logo = document.querySelectorAll("#sprinkles-svg path");

// for (let i = 0; i < logo.length; i++) {
//   console.log(i);
//   console.log(logo[i].getTotalLength());
// }

// intersectionObserver stuff: ****************************************************************

// function callbackFunc(entries, observer)
// {
//   entries.forEach(entry => {
//     var txt = entry.target.id + " visibility: " + entry.isIntersecting;

//     document.getElementById('sprinkles-svg').appendChild(document.createTextNode(txt));
//     document.getElementById('sprinkles-svg').appendChild(document.createElement("br"));
//   });
// }

// let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.3
//   };

// let observer = new IntersectionObserver(callbackFunc, options);

// observer.observe(document.getElementById('firstBlock'));
// observer.observe(document.getElementById('secondBlock'));
