// 3-currency.js

class Currency {
  constructor(code, name) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = value;
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._code = value;
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
