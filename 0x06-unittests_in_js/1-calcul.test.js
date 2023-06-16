const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`testing`, function() {
      const reponse = calculateNumber("SUM", 1, 2);
      assert.strictEqual(reponse, 3);
    });
    it(`testing`, function() {
      const reponse = calculateNumber("SUBTRACT", 1.4, 2.2);
      assert.strictEqual(reponse, -1);
    });
    it(`testing`, function() {
      const reponse = calculateNumber("SUBTRACT", 4.9, 2.7);
      assert.strictEqual(reponse, 2);
    });
    it(`testing`, function() {
      const reponse = calculateNumber("DIVIDE", 4, 2);
      assert.strictEqual(reponse, 2);
    });
    it(`testing`, function() {
      const reponse = calculateNumber("DIVIDE", 1.7, 0);
      assert.strictEqual(reponse, "Error");
    });
    it(`testing`, function() {
      const reponse = calculateNumber("DIVIDE", 1.4, 4.6);
      assert.strictEqual(reponse, 0.2);
    });
});
