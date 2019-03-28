module.exports={
    env:{
        es6:true,
        browser:true,
        node:true,
    },
    extends:['airbnb','plugin:jest/recommended','jest-enzyme'],
    plugins:['babel',
             'import',
             'jsx-a11y',
             'react',
            'prettier'
          ],
    parser:'babel-eslint',
    parserOptions:{
        ecmaVersion: 6,
        sourceType:'module',
        ecmaFeatures: {
            jsx: true
        },
    },
    rules:{
        'linebreak-style': 'off', 
		'arrow-parens': 'off', 
		'object-curly-newline': 'off', 
		'no-mixed-operators': 'off', 
		'arrow-body-style': 'off', 
		'function-paren-newline': 'off', 
		'no-plusplus': 'off',
		'space-before-function-paren': 0, 

		'max-len': ['error', 100, 2, { ignoreUrls: true, }], 
		'no-console': 'off', 
		'no-alert': 'error', 
		'no-param-reassign': 'off', 
		"radix": "off", 
        'prettier/prettier': ['error'],
    }
}