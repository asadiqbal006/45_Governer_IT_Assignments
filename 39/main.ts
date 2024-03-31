function city_country(cityName: string, countryName: string) {
  let cityCountry = cityName + "," + countryName;
  return cityCountry;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Makkah", "Saudi Arabia"));
console.log(city_country("Paris", "France"));

