var expect = require("chai").expect;

describe("Destructuring", function() {
  it("Can assign variables via arrays", function() {
    var [first, , last] = [1, 2, 3];
    expect(first).to.equal(1);
    expect(last).to.equal(3);
  });

  it("Can assign via arrays deeply", function() {
    var [first, second, [third, [fourth]]] = [1,2,[3,[4]]];
    expect([first,second,third,fourth]).to.eql([1,2,3,4]);
  });

  it("Can assign variables via objects", function() {
    var {first, second, third} = {first:1, second:2, third:3};
    expect(first).to.equal(1);
    expect(second).to.equal(2);
    expect(third).to.equal(3);
  });

  it("Can assign variables via objects, deeply", function() {
    var foo = {first:1, second:{deep:2}, third:3};
    var {first:a, second: {deep:b}, third:c} = foo;
    expect(a).to.equal(1);
    expect(b).to.equal(2);
    expect(c).to.equal(3);
  });
});
