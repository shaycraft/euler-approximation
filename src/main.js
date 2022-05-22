const prompt = require("prompt-sync")({ sigInt: true });
const FunctionTerm = require("./function-term");
const VariableTerm = require("./variable-term");

function init() {
  /**
   *
   * @type {string[]}
   */
  const variableAliases = [];

  /**
   *
   * @type {FunctionTerm[]}
   */
  const functionTermList = [];

  for (let i of Array(+prompt("Enter number of variables: ")).keys()) {
    variableAliases[i] = prompt(`Alias for variable #${i + 1}: `);
  }

  const n = +prompt("Enter number of terms: ");

  for (let i of Array(n).keys()) {
    console.log(`-------- Term #${i}-------`);
    const coefficient = +prompt(`Coefficient C${i}: `);
    /**
     *
     * @type {VariableTerm[]}
     */
    const variableTermList = [];
    for (let j of variableAliases.keys()) {
      const exponent = +prompt(`Enter exponent for ${variableAliases[j]}: `);
      variableTermList.push(new VariableTerm(variableAliases[j], exponent));
    }

    functionTermList.push(new FunctionTerm(variableTermList, coefficient));
    console.debug(functionTermList[i].print());
  }
}

init();
