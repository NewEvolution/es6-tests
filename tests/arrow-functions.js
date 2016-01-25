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

  it("Binds \"this\" to the function", function() {
    this.foo = "Bar"
    var oldFn = function() {
      return this.foo;
    };
    var newFn = () => {
      return this.foo;
    }
    expect(oldFn()).to.equal(undefined);
    expect(newFn()).to.equal("Bar");
  });
});
