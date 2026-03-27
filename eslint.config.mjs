import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import jsdoc from "eslint-plugin-jsdoc";

const eslintConfig = [
  ...nextCoreWebVitals,

  // JSDoc enforcement for all TypeScript/TSX files
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["node_modules/**"],
    plugins: {
      jsdoc,
    },
    rules: {
      "jsdoc/require-jsdoc": [
        "error",
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: false,
            ClassDeclaration: true,
            ArrowFunctionExpression: false,
            FunctionExpression: false,
          },
          publicOnly: true,
          checkConstructors: false,
          contexts: [
            "TSInterfaceDeclaration",
            "TSTypeAliasDeclaration",
            "ExportNamedDeclaration > VariableDeclaration",
          ],
        },
      ],
      "jsdoc/require-description": [
        "error",
        {
          contexts: [
            "FunctionDeclaration",
            "TSInterfaceDeclaration",
            "TSTypeAliasDeclaration",
          ],
        },
      ],
      "jsdoc/require-param": "off",
      "jsdoc/require-param-description": "warn",
      "jsdoc/require-returns": "off",
      "jsdoc/require-returns-description": "warn",
      "jsdoc/check-param-names": "warn",
      "jsdoc/check-tag-names": "warn",
    },
  },

  // Relaxed rules for shadcn/ui auto-generated components
  {
    files: ["components/ui/**/*.ts", "components/ui/**/*.tsx"],
    plugins: {
      jsdoc,
    },
    rules: {
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-description": "off",
    },
  },
];

export default eslintConfig;
