
module.exports = {
  meta: {
      type: "problem",
      docs: {
        description: "Prefer BigInt literals over BigInt() constructor",
      },
      fixable: "code",
      schema: []
  },
  create(context) {
    return {
			CallExpression(node) {
				if (
					node.callee.type === "Identifier" &&
					node.callee.name === "BigInt" &&
					node.arguments.length === 1
				) {
					let arg = node.arguments[0];
					let raw = null;
					let negative = false;
					if (arg.type === "Literal" && typeof arg.value === "number") {
						raw = arg.raw;
					} else if (
						arg.type === "UnaryExpression" &&
						arg.operator === "-" &&
						arg.argument.type === "Literal" &&
						typeof arg.argument.value === "number"
					) {
						negative = true;
						raw = arg.argument.raw;
						arg = arg.argument; // for accurate replacement
					} else {
						return; // unsupported
					}
          context.report({
            node,
            message: `Use BigInt literal syntax (e.g. ${negative ? '-' : ''}${raw}n) instead of BigInt(${negative ? '-' : ''}${raw}).`,
            fix(fixer) {
              return(fixer.replaceText(node, `${negative ? '-' : ''}${raw}n`));
            }
          });
				}
			}
		};
  }
};
