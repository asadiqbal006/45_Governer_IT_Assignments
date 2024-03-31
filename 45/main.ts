//Object Define
type carInfo ={
    manufacturer: string;
    modelName: string;
    [key: string]: unknown; // This allows for an arbitrary number of additional properties along with its value
  }
  
  function createCar(manufacturer: string, modelName: string, ...additionalProps: [string, unknown][]): carInfo{
    let car: carInfo = { manufacturer, modelName };
    for (let [key, value] of additionalProps) {
      car[key] = value;
    }
    return car;
  }
  
  // Example usage:
  let teslaInfo = createCar('Tesla', 'Model S', ['color', 'red'], ['feature', 'Autopilot']);
  console.log(teslaInfo);
  