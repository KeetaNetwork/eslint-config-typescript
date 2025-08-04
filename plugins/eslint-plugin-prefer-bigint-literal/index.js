const enforceBigIntLiteralRule = require("./eslint-enforce-bigint-literal");

const plugin = { 
  rules: { "prefer-bigint-literal": enforceBigIntLiteralRule }
};

module.exports = plugin;
