"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDB.count = numberOfFilms;

const userLastMovie = prompt("Один из последних просмотренных фильмов?", "Mind Hunter");
personalMovieDB.movies[userLastMovie] = prompt(`На сколько оцениваете фильм '${userLastMovie} по 10 балльной шкале?'`);

const userLastMovie1 = prompt("Один из последних просмотренных фильмов?", "Mind Hunter");
personalMovieDB.movies[userLastMovie1] = prompt(`На сколько оцениваете фильм '${userLastMovie1} по 10 балльной шкале?'`);

console.log(personalMovieDB);