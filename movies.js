// =============================
// MOVIE DATA
// =============================

const movieData = {

    "The Vampire Diaries": {
        poster: "assets/movie1.jpg",
        rating: "8.0",
        year: "2009",
        genre: "Drama • Fantasy • Romance",
        description:
            "The story follows Elena Gilbert and the mysterious Salvatore brothers as supernatural events unfold in Mystic Falls."
    },

    "The Witcher": {
        poster: "assets/movie2.jpg",
        rating: "8.0",
        year: "2019",
        genre: "Fantasy • Action • Drama",
        description:
            "Geralt of Rivia, a mutated monster hunter, struggles to find his place in a dangerous world filled with monsters and magic."
    },

    "Stranger Things": {
        poster: "assets/movie3.jpg",
        rating: "8.7",
        year: "2016",
        genre: "Sci-Fi • Mystery • Drama",
        description:
            "A group of friends uncover supernatural mysteries and secret experiments in the town of Hawkins."
    },

    "Squid Game": {
        poster: "assets/movie4.jpg",
        rating: "8.0",
        year: "2021",
        genre: "Thriller • Drama • Mystery",
        description:
            "Hundreds of desperate contestants enter a mysterious competition where winning means taking home a life-changing prize."
    },

    "Alchemy of Souls": {
        poster: "assets/movie5.jpg",
        rating: "8.7",
        year: "2022",
        genre: "Fantasy • Romance • Drama",
        description:
            "A powerful sorceress and a young man become connected through magic, destiny and a mysterious exchange of souls."
    }

};


// =============================
// SEARCH
// =============================

const searchInput =
    document.getElementById("searchInput");

const movieCards =
    document.querySelectorAll(".movie-card");


if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText =
            searchInput.value.toLowerCase().trim();

        movieCards.forEach(function (card) {

            const title =
                card.querySelector("h3")
                    .textContent
                    .toLowerCase();

            if (title.includes(searchText)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// =============================
// WATCH TRAILER
// =============================

function watchMovie(movieName) {

    window.location.href =
        "watch.html?movie=" +
        encodeURIComponent(movieName);

}


// =============================
// OPEN MOVIE POPUP
// =============================

function openMovieDetails(movieName) {

    console.log("Opening:", movieName);

    const movie =
        movieData[movieName];

    if (!movie) {

        console.error(
            "Movie not found:",
            movieName
        );

        return;

    }


    const modal =
        document.getElementById("movieModal");

    const modalPoster =
        document.getElementById("modalPoster");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalRating =
        document.getElementById("modalRating");

    const modalYear =
        document.getElementById("modalYear");

    const modalGenre =
        document.getElementById("modalGenre");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalWatchButton =
        document.getElementById("modalWatchButton");

    const modalListButton =
        document.getElementById("modalListButton");


    // Check that popup elements exist

    if (!modal) {

        console.error(
            "movieModal not found!"
        );

        return;

    }


    // Fill popup

    modalPoster.src =
        movie.poster;

    modalPoster.alt =
        movieName;

    modalTitle.textContent =
        movieName;

    modalRating.textContent =
        "⭐ " + movie.rating;

    modalYear.textContent =
        movie.year;

    modalGenre.textContent =
        movie.genre;

    modalDescription.textContent =
        movie.description;


    // Watch Trailer

    modalWatchButton.onclick =
        function () {

            watchMovie(movieName);

        };


    // My List

    updateListButton(
        modalListButton,
        movieName
    );


    modalListButton.onclick =
        function () {

            toggleMyList(movieName);

            updateListButton(
                modalListButton,
                movieName
            );

        };


    // SHOW POPUP

    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


// =============================
// CLOSE POPUP
// =============================

function closeMovieDetails() {

    const modal =
        document.getElementById("movieModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


// =============================
// CLICK OUTSIDE POPUP
// =============================

const movieModal =
    document.getElementById("movieModal");


if (movieModal) {

    movieModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === movieModal
            ) {

                closeMovieDetails();

            }

        }
    );

}


// =============================
// ESC KEY
// =============================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMovieDetails();

        }

    }
);


// =============================
// MY LIST
// =============================

function getMyList() {

    const saved =
        localStorage.getItem("myList");

    if (!saved) {

        return [];

    }

    try {

        return JSON.parse(saved);

    } catch (error) {

        return [];

    }

}


// =============================
// ADD / REMOVE MY LIST
// =============================

function toggleMyList(movieName) {

    let list =
        getMyList();


    if (list.includes(movieName)) {

        list =
            list.filter(
                function (movie) {

                    return movie !== movieName;

                }
            );

    } else {

        list.push(movieName);

    }


    localStorage.setItem(
        "myList",
        JSON.stringify(list)
    );

}


// =============================
// UPDATE MY LIST BUTTON
// =============================

function updateListButton(
    button,
    movieName
) {

    if (!button) {
        return;
    }


    const list =
        getMyList();


    if (list.includes(movieName)) {

        button.textContent =
            "✓ Added to My List";

    } else {

        button.textContent =
            "+ My List";

    }

}