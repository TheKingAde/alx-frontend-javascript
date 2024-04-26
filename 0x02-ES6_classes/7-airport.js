// 7-airport.js
class Airport {
  constructor(name, code) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
  }

  // Getter for name
  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  // Getter for code
  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  // Default string description
  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return `Airport [${this._code}]`;
  }

  valueOf() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }
}

export default Airport;
