import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.__range = range;
  }

  get range() {
    return this.__range;
  }

  set range(range) {
    this.__range = range;
  }
  // eslint-disable-next-line
  cloneCar() {
    return new Car[Symbol.species]();
  }
}
