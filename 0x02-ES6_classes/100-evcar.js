// 100-evcar.js
import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    // eslint-disable-next-line no-underscore-dangle
    this._range = range;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    // eslint-disable-next-line no-underscore-dangle
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
