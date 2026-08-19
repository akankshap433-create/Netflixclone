// Search movies
const searchInput = document.getElementById("searchInput");
const movieCards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    movieCards.forEach(function (card) {
        const movieName = card.querySelector("h3").textContent.toLowerCase();

        if (movieName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// Watch Now function
function watchMovie(movieName) {
    alert("Now playing: " + movieName + " 🎬");
}