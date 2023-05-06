import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.__range = range;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
