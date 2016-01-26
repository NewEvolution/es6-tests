var expect = require("chai").expect;

describe("Let", function() {
  "use strict";
  it("Is the new \"var\"", function() {
    let foo = "bar";
    expect(foo).to.equal("bar");
  });

  it("Can be redefined", function() {
    let foo = "bar";
    foo = "baz"
    expect(foo).to.equal("baz");
  });

  it("Restricts scope to the block", function() {
    let foo = "bar";
    if(true) {
      let foo = "baz";
    }
    expect(foo).to.equal("bar");
  });
});
