var expect = require("chai").expect;

describe("Test suite verification", function() {
  it("True should be true", function() {
    expect(true).to.be.true;
  });
});

describe("Template strings", function() {
  it("Should be a string", function() {
    var string = `abc`;
    expect(string).to.be.a.("string");
  });
});
