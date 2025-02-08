document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const menuOverlay = document.querySelector(".menu-overlay");
  
    // Відкриття/закриття меню
    const toggleMenu = () => {
      burgerMenu.classList.toggle("active");
      menuOverlay.classList.toggle("active");
    };
  
    // Подія кліку на бургер-меню
    burgerMenu.addEventListener("click", toggleMenu);
  
    // Закриття меню при кліку на посилання
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", toggleMenu);
    });
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.onload = () => {
                    img.classList.add("loaded");
                    img.closest(".watch-item").classList.add("loaded");
                };
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });
});