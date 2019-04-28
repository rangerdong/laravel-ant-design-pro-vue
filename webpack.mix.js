const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/src'),
            '@assets': path.resolve(__dirname, 'resources/src/assets'),
            '@comp': path.resolve(__dirname, 'resources/src/components'),
            '@views': path.resolve(__dirname, 'resources/src/views'),
            '@layout': path.resolve(__dirname, 'resources/src/layout'),
            '@static': path.resolve(__dirname, 'resources/src/static'),
        }
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: require.resolve('less-loader'), // compiles Less to CSS
                options: {
                    javascriptEnabled: true
                }
            }
        ],
    }
});

mix.babelConfig({
    presets: [
        '@vue/app',
        [
            '@babel/preset-env',
            {
                'useBuiltIns': 'entry'
            }
        ]
    ]
});

mix.js('resources/src/main.js', 'public/js').version();
