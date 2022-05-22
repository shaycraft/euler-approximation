const FunctionTerm = require("./function-term");
const VariableTerm = require("./variable-term");

describe("FunctionTerm", () => {
  test("should print the correct result for 42*x^2*t^3", () => {
    const functionTerm = new FunctionTerm(
      [new VariableTerm("x", 2), new VariableTerm("t", 3)],
      42
    );
    expect(functionTerm.print()).toEqual("42*x^2*t^3");
  });

  test("should print the correct result for 42*t^7", () => {
    const functionTerm = new FunctionTerm(
      [new VariableTerm("x", 0), new VariableTerm("t", 7)],
      42
    );
    expect(functionTerm.print()).toEqual("42*t^7");
  });

  test("should print the correct result for 42*x*t", () => {
    const functionTerm = new FunctionTerm(
      [new VariableTerm("x", 1), new VariableTerm("t", 1)],
      42
    );
    expect(functionTerm.print()).toEqual("42*x*t");
  });

  test("should print the correct result for 42", () => {
    const functionTerm = new FunctionTerm(
      [new VariableTerm("x", 0), new VariableTerm("t", 0)],
      42
    );
    expect(functionTerm.print()).toEqual("42");
  });

  test("should print the correct result for 42*x^2", () => {
    const functionTerm = new FunctionTerm(
      [new VariableTerm("x", 2), new VariableTerm("t", 0)],
      42
    );
    expect(functionTerm.print()).toEqual("42*x^2");
  });
});
