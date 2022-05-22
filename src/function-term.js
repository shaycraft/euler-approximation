class FunctionTerm {
  /**
   *
   * @param variables {VariableTerm[]}
   * @param coefficient {number}
   */
  constructor(variables, coefficient) {
    this.coefficient = coefficient;
    this.variables = variables;
  }

  print() {
    if (this.coefficient === 0) {
      return "";
    }

    const sb = [];
    if (this.coefficient !== 1) {
      sb.push(this.coefficient);
    }

    this.variables.forEach((variable) => {
      if (sb.length && variable.exponent) {
        sb.push("*");
      }

      switch (variable.exponent) {
        case 0:
          break;
        case 1:
          sb.push(variable.name);
          break;
        default:
          sb.push(`${variable.name}^${variable.exponent}`);
      }
    });

    return sb.join("");
  }

  /**
   *
   * @param values
   * @returns {number}
   */
  evaluate(values) {
    // constant case
    if (!this.variables) {
      return this.coefficient;
    }

    let result = 0;
    this.variables.forEach((term) => {
      if (!values[term.name]) {
        throw "invalid term sent";
      }

      switch (term.exponent) {
        case 0:
          result += 1;
          break;
        case 1:
          result += values[term.name];
          break;
        default:
          result += values[term.name] ** term.exponent;
      }

      result += result * term.exponent;
    });

    return result;
  }
}

module.exports = FunctionTerm;
