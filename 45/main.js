"use strict";
function createCar(manufacturer, modelName, ...additionalProps) {
    let car = { manufacturer, modelName };
    for (let [key, value] of additionalProps) {
        car[key] = value;
    }
    return car;
}
// Example usage:
let teslaInfo = createCar('Tesla', 'Model S', ['color', 'red'], ['feature', 'Autopilot']);
console.log(teslaInfo);
