function searchWeb() {
    let input = document.getElementById("search-input").value.trim();

    if (input !== "") {
        let searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(input);
        window.location.href = searchUrl; // Переходить на пошук Google за введеним запитом
    } else {
        document.getElementById("search-result").textContent = "❌ Введіть запит";
        document.getElementById("search-result").style.color = "red";
    }
}