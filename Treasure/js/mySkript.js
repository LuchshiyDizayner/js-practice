/*
1. Создать страницу игры с картинкой
(картой сокровищ) и местом, куда будут
 выводиться сообщения для игрока.
2. Выбрать на карте случайную точку, где спрятан клад.
3. Создать обработчик кликов. Каждый раз, когда игрок кликает
по карте, обработчик кликов должен:
• Увеличить счетчик кликов на 1.
• Вычислить, насколько далеко место клика от места, где
спрятан клад.
• Отобразить на странице сообщение для игрока — «горячо»
или «холодно».
• Поздравить игрока, если он кликнул по кладу или вблизи
него, и сообщить, сколько кликов ушло на поиски.
*/

// Получить случайное число от 0 до size-1
var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
    };

    // Вычислить расстояние от клика (event) до клада (target)
    var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
    };

    // Получить для расстояния строку подсказки
    var getDistanceHint = function (distance) {
    if (distance < 10) {
    return "Обожжешься!";
    } else if (distance < 20) {
    return "Очень горячо";
    } else if (distance < 40) {
    return "Горячо";
    } else if (distance < 80) {
    return "Тепло";
    } else if (distance < 160) {
    return "Холодно";
    } else if (distance < 320) {
    return "Очень холодно";
    } else {
    return "Замерзнешь!";
    }
    };

    // Создаем переменные
   var width = 400;
    var height = 400;
    var clicks = 0;

    // Случайная позиция клада
   var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
    };

    // Добавляем элементу img обработчик клика
   $("#map").click(function (event) {
    clicks++;

    // Получаем расстояние от места клика до клада
   var distance = getDistance(event, target);

    // Преобразуем расстояние в подсказку
   var distanceHint = getDistanceHint(distance);

    // Записываем в элемент #distance новую подсказку
   $("#distance").text(distanceHint);
   
    // Если клик был достаточно близко, поздравляем с победой
   if (distance < 8) {
    alert("Клад найден! Сделано кликов: " + clicks);
    }
    });

