const utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`The total is: ${utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
}

module.exports = sendPaymentRequestToApi;
