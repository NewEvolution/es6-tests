var expect = require("chai").expect;

describe("Test suite verification", function() {
  it("True should be true", function() {
    expect(true).to.be.true;
  });
});

describe("Template strings", function() {
  it("Should be a string", function() {
    var string = `abc`;
    expect(string).to.be.a("string");
  });

  it("Can evaluate variables", function() {
    var bar = "baz";
    var string = `foo${bar}`;
    expect(string).to.equal("foobaz");
  });

  it("Can execute functions", function() {
    var string = `The date is: ${new Date()}`;
    var date = new Date();
    expect(string).to.equal("The date is: " + date);
  });

  it("Can evaluate expressions", function() {
    var string = `${3*7}`;
    expect(string).to.equal("21");
  });

  it("Can be multi-line", function() {
    var string = `Line one,
Line two`;
    expect(string).to.equal("Line one,\nLine two");
  });
});
