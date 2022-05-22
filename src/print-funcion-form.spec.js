const printFunctionForm = require("./print-function-form");

describe("printFunctionForm", () => {
  test("should print the correct result for 1 term", () => {
    const res1 = printFunctionForm(1);
    expect(res1).toEqual("C0*X0");
  });

  test("should print the correct result for 3 terms", () => {
    const res1 = printFunctionForm(3);
    expect(res1).toEqual("C0*X0 + C1*X1 + C2*X2");
  });
});
