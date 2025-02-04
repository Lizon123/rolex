function toggleSearchInput() {
    let searchInput = document.querySelector(".search-input");

    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block"; // Показати поле введення
    } else {
        searchInput.style.display = "none"; // Приховати, якщо вже відкрите
    }
}
