const { RuleTester } = require("eslint");
const enforceBigIntLiteralRule = require("./eslint-enforce-bigint-literal");

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2020 }
});

ruleTester.run(
  "eslint-enforce-bigint-literal",
  enforceBigIntLiteralRule, 
  {
    valid: [
      { code: "const foo = 1n", },
      { code: "const foo = -1n" },
      { code: "const foo = 0n" },
      { code: "() => { const strOne = '1'; const bigintOne = BigInt(strOne); }" },
      { code: "const foo = 0x1n" },
    ],
    invalid: [
      { code: "const foo = BigInt(1)", output: "const foo = 1n", errors: 1 },
      { code: "const foo = BigInt(-1)", output: "const foo = -1n", errors: 1 },
      { code: "const foo = BigInt(0)", output: "const foo = 0n", errors: 1 },
      { code: "const foo = BigInt(0x1)", output: "const foo = 0x1n", errors: 1 },
    ],
  }
);

console.log("All tests passed!");
