module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "@typescript-eslint/eslint-plugin"
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:import/typescript"
  ],
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "rules": {
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array-simple"
      }
    ],
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
    "import/prefer-default-export": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-filename-extension": ["error", {"extensions": [".jsx", ".tsx"]}],
    "react/prop-types": 0,
    "react/static-property-placement": ["error", "static public field"],
    "camelcase": 0,
    "quotes": ["error", "double"]
  },
  "overrides": [
    {
      "files": [
        "**/__tests__/**"
      ],
      "env": {
        "jest": true
      }
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"]
      }
    }
  }
}
