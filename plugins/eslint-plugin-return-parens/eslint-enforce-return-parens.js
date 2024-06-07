
module.exports = {
  meta: {
      type: "problem",
      docs: {
        description: "Enforce return/throw statements to have parens",
      },
      fixable: "code",
      schema: []
  },
  create(context) {
      return {
        ThrowStatement(node) {
          
          if(!context.sourceCode) return;
          if(node.argument === null) return;
          
          const argument = context.sourceCode.getText(node.argument, 1, 1);

          if(argument.startsWith('(') && argument.endsWith(')')) return;

          context.report({
            node,
            message: 'Throw statements must have parens',
            data: {
              name: node.name
            },
            fix(fixer) {
              return fixer.replaceText(node, `throw(${context.sourceCode.getText(node.argument)});`);
            }
          })
	},
        ReturnStatement(node) {
          
          if(!context.sourceCode) return;
          if(node.argument === null) return;
          
          const argument = context.sourceCode.getText(node.argument, 1, 1);

          if(argument.startsWith('(') && argument.endsWith(')')) return;

          context.report({
            node,
            message: 'Return statements must have parens',
            data: {
              name: node.name
            },
            fix(fixer) {
              return fixer.replaceText(node, `return(${context.sourceCode.getText(node.argument)});`);
            }
          })
        }
      };
  }
};
