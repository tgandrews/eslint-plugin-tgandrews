export default (context) => ({
  ExportDefaultDeclaration(node) {
    const declaration = node.declaration;
    if (declaration.type === 'ObjectExpression') {
      if (declaration.properties.length > 1) {
        context.report(node, 'Prefer separate exports over exporting a default object');
      }
    }
  }
});