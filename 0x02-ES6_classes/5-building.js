// 5-building.js
class Building {
  constructor(sqft) {
    // eslint-disable-next-line no-underscore-dangle
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }

  // Abstract method evacuationWarningMessage
  evacuationWarningMessage() {
    this.toString();
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
