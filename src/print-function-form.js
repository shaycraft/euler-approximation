function printFunctionForm(n) {
  const sb = [];

  for (let i of Array(n).keys()) {
    if (i !== 0) {
      sb.push(" + ");
    }
    sb.push(`C${i}*X${i}`);
  }

  return sb.join("");
}

module.exports = printFunctionForm;
