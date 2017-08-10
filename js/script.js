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

for (var i = 0; i < cities.length; i++) {
  // if(cities[i].getAttribute('value') < 1000000) {
  //   this.hidden = true;
  // };

  var population = (cities[i].getAttribute('value') / 1000000).toFixed(1);
  cities[i].innerHTML = cities[i].textContent + ", населення " + population + " млн";

  console.log(cities[i]);
};
