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

        console.log("BUTTON WORKS");

        if (typeof show_11593326 !== "function") {
            alert("Monetag SDK pa chaje");
            return;
        }

        show_11593326()
            .then(() => {

                showScreen(homeScreen);

            })
            .catch((error) => {

                console.error("Monetag error:", error);
                alert("Reklam nan pa disponib");

            });

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

const MOVIES_API =
    "https://script.google.com/macros/s/AKfycbzZUUm_Km6l6tEXd7vpAFm2Vj8o7kdhBdWwwPp4b45nuVq8_GzIEso0dqEGTESlJZu0/exec";

let movies = [];

async function loadMovies() {

    try {

        const response = await fetch(MOVIES_API);

        movies = await response.json();

        renderMovies();

    } catch (error) {

        console.error("Erreur chargement films:", error);

    }

}
