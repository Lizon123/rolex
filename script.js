function toggleSearchInput() {
    let searchInput = document.querySelector(".search-input");

    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block"; // Показати поле введення
    } else {
        searchInput.style.display = "none"; // Приховати, якщо вже відкрите
    }
}
function searchRolex() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let result = document.getElementById("search-result");

    // Список годинників Rolex
    let rolexModels = ["rolex submariner", "rolex daytona", "rolex datejust", "rolex gmt-master"];

    // Перевірка, чи введений запит містить Rolex
    if (rolexModels.some(model => input.includes(model))) {
        result.textContent = "🔎 Знайдено годинник Rolex!";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Немає результату";
        result.style.color = "red";
    }
}