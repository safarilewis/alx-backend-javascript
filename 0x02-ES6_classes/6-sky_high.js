import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.__floors = floors;
  }

  get floors() {
    return this.__floors;
  }

  get sqft() {
    return this.__sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.__floors} floors`;
  }
}
