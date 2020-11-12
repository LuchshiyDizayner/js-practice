/*
let headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
let newHeadingText = prompt("Введите новый заголовок:");
headingElement.innerHTML = newHeadingText;
newHeadingText = document.getElementById("main-heading");
console.log(newHeadingText.innerHTML);


let newHeadingText = prompt("Введите новый заголовок:");
$("#main-heading").text(newHeadingText);

$("body").append("<p>Это новый параграф</p>");

for (let i = 0; i < 3; i++) {
    let hobby = prompt("Назови одно из своих любимых хобби!");
    $("body").append("<p>" + hobby + "</p>");
}


$("h1").text("Этот элемент скоро исчезнет")


$("h1").fadeOut(3000);
$("h1").fadeIn(3000);
$("h1").hide(3000).show(3000);


let friends = ["Маша", "Эльдар", "Настя", "Пися"];
for (let i = 0; i < friends.length; i++) {
    $("body").append("<p>" + friends[i] + "</p>");
}

$("h1").text("Мои друзья");

$("p").hide(3000).fadeIn(3000).append(" лучший!");

for (let i = 1000; i < 6000; i += 1000) {
    $("h1").fadeOut(i).fadeIn(i)
};

$("h1").fadeOut(1000).delay(5000).fadeIn(1000)

$("h1").fadeTo(2000, 0.8);

let doHomeworkAlarm = function () {
    alert("Эй, пора делать домашку!");
};
let timeOutId = setTimeout(doHomeworkAlarm, 3000);

clearTimeout(timeOutId);

let counter = 5;

let printMessage = function () {
    console.log("Ты смотришь в консоль уже " + counter + " сек");
    counter += 5;
};

let intervalId = setInterval(printMessage, 5000);

clearInterval(intervalId);

let leftOffset = -210;

let moveHeading = function () {
    $("#heading").offset({left: leftOffset});

    leftOffset ++;

    if (leftOffset > 1600) {
        leftOffset = -210;
    }
};

setInterval(moveHeading, 100);

let clickHandl er = function (event) {
    console.log("Клик! " + event.pageX + " " + event.pageY);
};

$("h1").click(clickHandler);

$("html").mousemove(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});*/



/*
dog.bark = function () {
    console.log("Гав-гав! Меня зовут " + this.name + "!");
};*/