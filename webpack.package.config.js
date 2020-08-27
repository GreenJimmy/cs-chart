const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/App.js',
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to files ending in .js
        exclude: /node_modules/, // Don't apply to files residing in node_modules
        use: {
          // Use the following loader and options
          loader: 'babel-loader',
          // We can pass options to both babel-loader and Babel. This option object
          // will replace babel.config.js
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  debug: true, // Output the targets/plugins used when compiling

                  // Configure how @babel/preset-env handles polyfills from core-js.
                  // https://babeljs.io/docs/en/babel-preset-env
                  useBuiltIns: 'usage',

                  // Specify the core-js version. Must match the version in package.json
                  corejs: 3,

                  // Specify which environments we support/target for our project.
                  // (We have chosen to specify targets in .browserslistrc, so there
                  // is no need to do it here.)
                  // targets: "",
                },
              ],

              // The react preset includes several plugins that are required to write
              // a React app. For example, it transforms JSX:
              // <div> -> React.createElement('div')
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
};
