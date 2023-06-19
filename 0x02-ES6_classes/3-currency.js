export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set string(name) {
    if (typeof name !== 'string') {
      throw new TypeError('String must be string');
    }
    this._name = name;
  }

  get string() {
    return this._string;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
