"use strict";

let personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let numberOfFilms;
let rightFormatAnswer = true;
do {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    if (numberOfFilms && numberOfFilms.length <= 50) {
        personalMovieDB.count = numberOfFilms;
        rightFormatAnswer = false;
    }
} while (rightFormatAnswer);

let userLastMovie;
let userLastMovieRating;
for (let i = 0; i < 2; i++) {
    userLastMovie = prompt("Один из последних просмотренных фильмов?", "");
    if (userLastMovie && userLastMovie.length <= 50) {
        userLastMovieRating = +prompt(`На сколько оцениваете фильм '${userLastMovie}' по 10 балльной шкале`);
        while (!(userLastMovieRating && userLastMovieRating > -1 && userLastMovieRating < 11)) {
            userLastMovieRating = +prompt(`На сколько оцениваете фильм '${userLastMovie}' по 10 балльной шкале`);
        }
        personalMovieDB[userLastMovie] = userLastMovieRating;
    }
    else {
        i--;
    }
}

if (+personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (+personalMovieDB.count >= 10 && +personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (+personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}