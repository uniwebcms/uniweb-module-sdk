const path = require('path');

module.exports = (_, argv) => {
    return {
        entry: path.resolve(__dirname, 'src', 'index.js'),
        resolve: {
            extensions: ['.jsx', '.js', '.json']
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve('dist'),
            clean: true,
            publicPath: '/dist/',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        resolve: {
            alias: {
                react: path.resolve(__dirname, './node_modules/react'),
                'react-dom': path.resolve(__dirname, './node_modules/react-dom')
            }
        },
        externals: {
            react: 'react',
            'react-dom': 'react-dom'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                }
            ]
        },
        watchOptions: {
            ignored: ['**/node_modules']
        }
    };
};
