"use strict";
function describe_city(cityName, countryName = "Pakistan") {
    console.log(cityName, "is in ", countryName);
}
//For Karachi
describe_city("Karachi");
//For Makkah
describe_city("Makkah", "Saudi Arabia");
//For Paris
describe_city("Paris", "France");
