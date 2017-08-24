/*Реалізувати випадаючий список, що виводить інформацію про міста та їх населення,
дозволяє обирати певний пункт зі списку, та має можливість пошуку по пунктах списку.

Умови:
------
1. Використовувати лише чистий javascript, без jQuery чи інших додаткових інструментів.
2. Тег <select> не використовувати
3. Дані для заповнення списку знаходяться у файлі dropdown.js, що додається
4. Дані у файлі або їх структуру НЕ ЗМІНЮВАТИ
------

Функціонал:
-----------
Як приклад вигляду такого меню можна використати https://eu-dropdown.herokuapp.com

У закритому стані показується лише плашка із заміщаючим текстом, на ваш розсуд.
При кліку на плашку відкривається сам випадаючий список, який включає в себе:
	а) Поле пошуку
	б) Безпосередньо пункти списку

При повторному кліку на плашку, меню закривається

Елементи списку:
----------------
	1. Показувати у випадайці лише міста з населенням вище 1 млн осіб
	2. Населення показувати у мільйонах осіб (2.9 млн), з округленням до одного знаку після коми

Кожен елемент випадаючого списку має виглядати як "Kyiv, населення 2.9 млн" і т.д

По кліку на пункт списку він показується у верхній плашці, а також підсвічується у випадаючому списку
(виділення на ваш розсуд)
Обраним може бути лише один пункт меню одночасно

Поле пошуку:
------------
Поле пошуку здійснює живий пошук по назві міста, показуючи результати по яким є
співпадіння, пункти по яким співпадіння немає, користувачу не відображаються.*/


var cities = document.getElementsByClassName('cities');

console.log(cities);

var searchItems = document.getElementById('search-items');

searchItems.style.display = 'none';

function change() {
  if(searchItems.style.display=='none') {
    searchItems.style.display = '';
  } else {
    searchItems.style.display = 'none';
  }
  return false;
}

plashka.onclick = change;

var searchText = document.getElementById('search__input');


searchText.oninput = function() {
  for (var i = 0; i < cities.length; i++) {
    if (!cities[i].textContent.toLowerCase().includes(searchText.value.toLowerCase())) {
      cities[i].style.display = 'none';
    } else {
      cities[i].style.display = '';

      if (cities[i].getAttribute('value') < 1000000) {
        cities[i].style.display = 'none';
      };
    };
  };
}


for (var i = 0; i < cities.length; i++) {

  cities[i].setAttribute("tabindex", "1");

  var population = (cities[i].getAttribute('value') / 1000000).toFixed(1);
  cities[i].innerHTML = cities[i].textContent + ", населення " + population + " млн";

  if(population < 1) {
    cities[i].style.display = 'none';
  };

  cities[i].onclick = function() {
    plashka.innerHTML = this.textContent;
  }
};
