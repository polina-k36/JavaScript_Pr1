"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        const numberOfFilms = personalMovieDB.checkAnswer("Сколько фильмов вы уже посмотрели?");
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function () {
        let userLastMovie, userLastMovieRating;
        for (let i = 0; i < 2; i++) {
            userLastMovie = personalMovieDB.checkAnswer("Один из последних просмотренных фильмов?");
            userLastMovieRating = personalMovieDB.checkAnswer(`На сколько оцениваете фильм '${userLastMovie}' по 10 балльной шкале`, userLastMovie)
            personalMovieDB.movies[userLastMovie] = userLastMovieRating;
        }
    },
    detectPersonalLevel: function () {
        if (+personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (+personalMovieDB.count >= 10 && +personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (+personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showDB: function () {
        if (!personalMovieDB.private) {
            console.log("Доступ к данным пользователя открыт");
            console.log(personalMovieDB);
        } else {
            console.log("Доступ к данным закрыт");
        }
    },

    writeYourGenres: function () {
        let favoriteGenres;
        for (let i = 1; i < 4; i++) {
            favoriteGenres = personalMovieDB.checkAnswer(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres.push(favoriteGenres);
        }
    },
    checkAnswer: function (question, lastMovie = '') {
        let answer = prompt(question, "")
        if (question == `На сколько оцениваете фильм '${lastMovie}' по 10 балльной шкале`) {
            while (!(+answer.trim() && +answer > -1 && +answer < 11 && answer.trim())) {
                answer = prompt(question, "")
            }
        } else {
            while (!(answer && answer.length <= 50 && answer.trim())) {
                answer = prompt(question, "")
            };
        }
        return answer;
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.private = !personalMovieDB.private
    },
    outputUsersGenres: function () {
        personalMovieDB.genres.forEach(function (val, ind) {
            console.log(`Любимый жанр №${ind + 1} - это ${val}`);
        });

    }
};










