"use strict";



let numberOfFilms;
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

rememberMyFilms();

detectPersonalLevel();

function start() {
    numberOfFilms = checkAnswer("Сколько фильмов вы уже посмотрели?");
}

function rememberMyFilms() {
    let userLastMovie, userLastMovieRating;
    for (let i = 0; i < 2; i++) {
        userLastMovie = checkAnswer("Один из последних просмотренных фильмов?");
        userLastMovieRating = checkAnswer(`На сколько оцениваете фильм '${userLastMovie}' по 10 балльной шкале`, userLastMovie)
        personalMovieDB[userLastMovie] = userLastMovieRating;
    }
}

function detectPersonalLevel() {
    if (+personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (+personalMovieDB.count >= 10 && +personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (+personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showDB(hidden) {
    if (!hidden) { console.log(personalMovieDB) };
}

function writeYourGenres() {
    let favoriteGenres;
    for (let i = 1; i < 4; i++) {
        favoriteGenres = checkAnswer(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = favoriteGenres;
    }
}

function checkAnswer(question, lastMovie = '') {
    let answer = prompt(question, "").trim();
    if (question == `На сколько оцениваете фильм '${lastMovie}' по 10 балльной шкале`) {
        while (!(+answer && +answer > -1 && +answer < 11)) {
            answer = prompt(question, "").trim();
        }
    } else {
        while (!(answer && answer.length <= 50)) {
            answer = prompt(question, "").trim();
        };
    }
    return answer;
}