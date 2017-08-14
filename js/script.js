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
