export default class Car {
  constructor(brand, motor, color) {
    this.__brand = brand;
    this.__motor = motor;
    this.__color = color;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
