import { RuleTester } from 'eslint';
import rule from '../../lib/rules/prefer-separate-exports';

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

const tester = new RuleTester();
tester.run('prefer-separate-exports', rule, {
  valid: [
    'export default () => {}',
    'export const foo = () => {}; export const bar = () => {};'
  ],
  invalid: [
    { 
      code: 'export default { foo: () => {}, bar: () => {} }', 
      errors: [{
        message: 'Prefer separate exports over exporting a default object',
        ruleId: 'ExportDefaultDeclaration'
      }], 
    },
  ]
})
