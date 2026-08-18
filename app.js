/* ================================= */
/* TELEGRAM MINI APP */
/* ================================= */

const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}


/* ================================= */
/* SCREENS */
/* ================================= */

const welcomeScreen = document.getElementById("welcomeScreen");
const homeScreen = document.getElementById("homeScreen");
const catalogueScreen = document.getElementById("catalogueScreen");
const detailsScreen = document.getElementById("detailsScreen");


function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(item => {
        item.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================= */
/* CONTINUER */
/* ================================= */

document
    .getElementById("continueBtn")
    .addEventListener("click", () => {

// Rewarded interstitial

show_11593326().then(() => {
    // You need to add your user reward function here, which will be executed after the user watches the ad.
    // For more details, please refer to the detailed instructions.
    );
})

        
        showScreen(homeScreen);

    });


/* ================================= */
/* MOVIE BUTTON */
/* ================================= */

document
    .getElementById("movieBtn")
    .addEventListener("click", () => {

        showScreen(catalogueScreen);

        renderMovies();

    });


/* ================================= */
/* MOVIE DATA */
/* ================================= */

/*
 * Ranplase egzanp sa yo ak kontni
 * ou gen dwa distribye.
 */

const movies = [

    {
        id: 1,
        title: "Movie One",
        year: "2026",
        genre: "Action",
        poster: "https://placehold.co/400x600/111111/ffffff?text=Movie+1",
        description:
            "Description du film à ajouter ici.",
        link:
            "https://example.com"
    },

    {
        id: 2,
        title: "Movie Two",
        year: "2026",
        genre: "Drama",
        poster: "https://placehold.co/400x600/111111/ffffff?text=Movie+2",
        description:
            "Description du film à ajouter ici.",
        link:
            "https://example.com"
    },

    {
        id: 3,
        title: "Movie Three",
        year: "2025",
        genre: "Comedy",
        poster: "https://placehold.co/400x600/111111/ffffff?text=Movie+3",
        description:
            "Description du film à ajouter ici.",
        link:
            "https://example.com"
    },

    {
        id: 4,
        title: "Movie Four",
        year: "2025",
        genre: "Adventure",
        poster: "https://placehold.co/400x600/111111/ffffff?text=Movie+4",
        description:
            "Description du film à ajouter ici.",
        link:
            "https://example.com"
    }

];


/* ================================= */
/* RENDER MOVIES */
/* ================================= */

function renderMovies(list = movies) {

    const movieList = document.getElementById("movieList");

    movieList.innerHTML = "";

    if (list.length === 0) {

        movieList.innerHTML = `
            <p style="
                grid-column: 1 / -1;
                text-align: center;
                color: #777;
                padding: 40px 0;
            ">
                Aucun film trouvé.
            </p>
        `;

        return;
    }


    list.forEach(movie => {

        const card = document.createElement("div");

        card.className = "movie-card";

        card.innerHTML = `

            <img
                class="movie-poster"
                src="${movie.poster}"
                alt="${movie.title}"
            >

            <div class="movie-info">

                <div class="movie-title">
                    ${movie.title}
                </div>

                <div class="movie-meta">
                    ${movie.year} • ${movie.genre}
                </div>

            </div>

        `;


        card.addEventListener("click", () => {

            showMovieDetails(movie);

        });


        movieList.appendChild(card);

    });

}


/* ================================= */
/* MOVIE DETAILS */
/* ================================= */

function showMovieDetails(movie) {

    const details = document.getElementById("movieDetails");

    details.innerHTML = `

        <img
            class="details-poster"
            src="${movie.poster}"
            alt="${movie.title}"
        >

        <h1 class="details-title">
            ${movie.title}
        </h1>

        <p class="details-meta">
            ${movie.year} • ${movie.genre}
        </p>

        <p class="details-description">
            ${movie.description}
        </p>

        <a
            class="watch-btn"
            href="${movie.link}"
            target="_blank"
            rel="noopener noreferrer"
        >
            CONTINUER →
        </a>

    `;

    showScreen(detailsScreen);
}


/* ================================= */
/* BACK BUTTONS */
/* ================================= */

document
    .getElementById("backBtn")
    .addEventListener("click", () => {

        showScreen(homeScreen);

    });


document
    .getElementById("detailsBackBtn")
    .addEventListener("click", () => {

        showScreen(catalogueScreen);

    });


/* ================================= */
/* SEARCH */
/* ================================= */

document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        const search = this.value
            .toLowerCase()
            .trim();


        const filteredMovies = movies.filter(movie => {

            return (
                movie.title.toLowerCase().includes(search) ||
                movie.genre.toLowerCase().includes(search) ||
                movie.year.includes(search)
            );

        });


        renderMovies(filteredMovies);

    });
