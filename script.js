document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".item-button");
    if (button) {
        button.addEventListener("click", function() {
            let searchQuery = prompt("Введіть модель або тип годинника Rolex, який шукаєте:");

            if (searchQuery) {
                // Додаємо слово "Rolex" до запиту, щоб пошук був точнішим
                let searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery + " Rolex watch");
                window.open(searchUrl, "_blank"); // Відкриває пошук у новій вкладці
            } else {
                alert("Будь ласка, введіть запит для пошуку.");
            }
        });
    } else {
        console.error('Кнопка з класом ".item-button" не знайдена.');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".item-button");

    if (button) {
        button.addEventListener("click", function() {
            let searchQuery = prompt("Введіть модель або тип годинника Rolex, який шукаєте:");

            if (searchQuery) {
                // Додаємо слово "Rolex" до запиту для точнішого пошуку годинників
                let searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery + " Rolex watch");
                window.open(searchUrl, "_blank"); // Відкриває пошук годинників у новій вкладці
            } else {
                alert("Будь ласка, введіть запит для пошуку.");
            }

            // Додатково: відкриваємо Google Maps для пошуку магазинів Rolex
            let locationQuery = "Rolex store near me";
            let mapUrl = "https://www.google.com/maps/search/" + encodeURIComponent(locationQuery);
            window.open(mapUrl, "_blank"); // Відкриває карту з магазинами Rolex
        });
    } else {
        console.error('Кнопка з класом ".item-button" не знайдена.');
    }
});