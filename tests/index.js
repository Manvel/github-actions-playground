const {strictEqual, ok} = require("assert");

describe("Basic test", () => {
  it("1 is equal 1", () => {
    strictEqual(1, 1);
  });

  it("EXAMPLE_VAR env variable has value of 'Example value'", () => {
    strictEqual(process.env.EXAMPLE_VAR, "Example value");
  });
});
