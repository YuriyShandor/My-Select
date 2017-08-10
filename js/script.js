var cities = document.getElementsByClassName('cities');

console.log(cities);

for (var i = 0; i < cities.length; i++) {
  var population = (cities[i].getAttribute('value') / 1000000).toFixed(1);
  cities[i].innerHTML = cities[i].textContent + ", населення " + population + " млн";

  console.log(cities[i]);
}
