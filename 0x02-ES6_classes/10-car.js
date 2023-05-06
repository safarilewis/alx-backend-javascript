export default class Car {
  constructor(brand, motor, color) {
    this.__brand = brand;
    this.__motor = motor;
    this.__color = color;
  }

  get brand() {
    return this.__brand;
  }

  get motor() {
    return this.__motor;
  }

  get color() {
    return this.__color;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
