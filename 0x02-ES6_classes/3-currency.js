export default class Currency {
  constructor(code, string) {
    this.code = code;
    this.string = string;
  }

  set string(string) {
    if (typeof string !== 'string') {
      throw new TypeError('String must be string');
    }
    this._string = string;
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
    return (`${this._string} (${this._code})`);
  }
}
