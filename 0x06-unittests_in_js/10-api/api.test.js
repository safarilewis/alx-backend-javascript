const request = require("request");
const { describe, it } = require("mocha");
const expect = require("chai").expect;


const opt = {
  url: "http://localhost:7865/login",
  json: true,
  body: {
    userName: 'JOE'
  }
};
describe("Index page", function () {
  const options = {
    url: "http://localhost:7865/",
    method: "GET"
  }
  it("check ", function (done) {
    request(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("check ", function (done) {
    request(options, function (err, res, body) {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("Cart page", function () {
  it("check ", function (done) {
    request.get("http://localhost:7865/cart/12", function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("check", function (done) {
    request.get("http://localhost:7865/cart/12", function (err, res, body) {
      expect(body).to.equal("Payment methods for cart 12");
      done();
    });
  });
  it("check ", function (done) {
    request.get("http://localhost:7865/cart/kim", function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe("Available_payments page", function () {
  it("check ", function () {
    request.get("http://localhost:7865/available_payments", (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.equal(200);
      }
    });
  });
  it("check ", function () {
    const option = { json: true };
    const payLoad = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
    request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.deep.equal(payLoad);
      }
    });
  });
});
describe("Login", function () {
  it("check ", function (done) {

    request.post(opt, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("check", function (done) {
    request.post(opt, function (err, res, body) {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.contain('Welcome JOE');
      }
      done();
    });
  });
  it("check", function (done) {
    request.post(opt, function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
