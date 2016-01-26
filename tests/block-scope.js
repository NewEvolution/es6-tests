"use strict";
var expect = require("chai").expect;

describe("Let", function() {
  it("Is the new \"var\"", function() {
    let foo = "bar";
    expect(foo).to.equal("bar");
  });

  it("Can be redefined", function() {
    let foo = "bar";
    foo = "baz"
    expect(foo).to.equal("baz");
  });
});
