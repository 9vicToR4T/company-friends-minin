module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: "module",
        allowKeywords: false
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        "space-before-function-paren": ["error", "never"],
        "dot-notation": 0,
        quotes: [
            0,
            "duble",
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ]
    },
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"]
            }
        }
    }
};
