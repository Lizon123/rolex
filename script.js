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
window.addEventListener('scroll', function() {
    const text = document.querySelector('.animated-text');
    const rect = text.getBoundingClientRect();
    
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        text.classList.add('visible');
    }
});