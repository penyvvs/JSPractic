/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(), //trim убирает пробелы
        b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
        personalMovieDB.movies[a] = b;
    }
}
// rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
// detectPersonalLevel();


function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

// console.log(personalMovieDB);


//add Task
let SCoub, VCoub;
function calculateVolumeAndArea(gran) {
    if ( typeof(gran) !== 'number' || gran <= 0 || isNaN(gran)) {
        return "Вы ввели неправильные данные";
    }
    
    SCoub = (gran * gran) * 6;
    VCoub = gran * gran * gran;

    return `Объем куба: ${VCoub}, площадь всей поверхности: ${SCoub}`;
}
calculateVolumeAndArea('3');

function getCoupeNumber(number) {
    if (typeof(number) !== 'number' || number < 0 || !Number.isInteger(number)){
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (number === 0 || number > 36){
        return `Таких мест в вагоне не существует`;
    }

    return Math.ceil(number/4);
}
getCoupeNumber(30);


let time;
function getTimeFromMinutes(time) {
    if (typeof(time) !== 'number' || time < 0 || !Number.isInteger(time) || time > 600){
        console.log("Ошибка, проверьте данные");
    }
    const hours = Math.floor(time / 60);
    const minuts = time % 60;
    let hoursStr = '';
    if ( time == 0 || time <= 5){
        hoursStr = "часов";
    } else if ( time == 1 ){
        hoursStr = "час";
    } else {
        hoursStr = "часа";
    }
    console.log(`Это ${hours} ${hoursStr} и ${minuts} минут`);
}
getTimeFromMinutes(125);

function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number'){
        return 0;
    }
    return Math.max(a, b, c, d);
}
findMaxNumber(1,4,'6',233);