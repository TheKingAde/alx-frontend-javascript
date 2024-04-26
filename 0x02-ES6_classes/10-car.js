// 10-car.js
// eslint-disable-next-line no-underscore-dangle
const _carInstance = Symbol('carInstance');

class Car {
  constructor(brand, motor, color) {
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
    // eslint-disable-next-line no-underscore-dangle
    this._motor = motor;
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;

    // eslint-disable-next-line no-underscore-dangle
    this[_carInstance] = this.constructor;
  }

  cloneCar() {
    // eslint-disable-next-line no-underscore-dangle
    return new this[_carInstance](this._brand, this._motor, this._color);
  }
}

export default Car;
