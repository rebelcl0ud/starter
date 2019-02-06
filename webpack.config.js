const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		comp: './src/js/comp/index.js',
		vendor: ['react']
	},

	output: {
		// w.e name ie: app above will be output filename
		filename: '[name].js',
		path: path.resolve(__dirname, 'public/js/components')
	},

	optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      }
    }
  },

	module: {
	  rules: [
	    { 
	    	test: /\.js$/, 
	    	exclude: /node_modules/, 
	    	loader: 'babel-loader',
	    	options: {
	    		presets: [ '@babel/preset-env', ],
	    		plugins: [],
	    	}
	    }
	  ]
	},
}