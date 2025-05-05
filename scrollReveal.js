// scrollReveal.js  – vanilla IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
    const nav     = document.querySelector(".sticky-nav");
  
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.5 }
    );
    reveals.forEach(el => io.observe(el));
  
    // add drop‑shadow once user scrolls a bit
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    });
  });
  