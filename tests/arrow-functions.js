var expect = require("chai").expect;

describe("Arrow function", function() {
  it("Is shorter to write", function() {
    var fn = () => {
      return "Hello world";
    };
    expect(fn()).to.equal("Hello world");
  });

  it("With one parameter does not need parenthesis", function() {
    var fn = name => {
      return `Hello ${name}`
    }
    expect(fn("Ryan")).to.equal("Hello Ryan");
  });
});
