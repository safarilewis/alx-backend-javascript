const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const answer = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${answer}`);
}

module.exports = sendPaymentRequestToApi;
