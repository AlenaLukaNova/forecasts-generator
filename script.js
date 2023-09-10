/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

const button = document.querySelector('.forecast-btn'); //кнопка
const header = document.querySelector('h1'); //заголовок предсказания
const description = document.querySelector('p'); //содержание предсказания
const container = document.querySelector('.forecasts'); // карточка
const forecastItem = document.querySelector('.forecast-item'); //шаблон карточки

function getRandomCase(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//  кнопка

    function makeForecast(title, value) {
        const newForecast = forecastItem.content.cloneNode(true);
        newForecast.querySelector('h3').textContent = title;
        newForecast.querySelector('p').textContent = value;
        return newForecast;
};

// генерация  

button.addEventListener('click', function() {
const card = getRandomCase(1, 5);
// карточки с предсказаниями
let prediction = '';
switch(card) {
    case 1:
        prediction = "Тебя ожидает интересная поездка.";
        break;
    
    case 2:
        prediction = "Будешь много плакать, но только от радости.";
        break;
    
    case 3:
        prediction = "Успешным будет любое начатое дело.";
        break;

    case 4:
        prediction = "Посвяти больше времени себе.";
        break;

    case 5:
        prediction = "Ждет много интересных приключений.";
        break;

    default: 
        prediction = "Предсказаний больше нет";
        break;
};


header.textContent = prediction;
const value = Math.floor(Math.random() * 100) + 1 + "%";
description.textContent = "Вероятность:" + value;

const newCard = makeForecast (prediction, "Вероятность: " + value);
container.prepend(newCard);
});

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
