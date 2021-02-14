const sortCSSmq = require('sort-css-media-queries');
const isDev = process.env.NODE_ENV === 'dev';

module.exports = {
    plugins: [
        require('postcss-preset-env')({browsers: 'last 2 versions',}),
        require('autoprefixer')({
            grid: true,
        }),

        require('postcss-sort-media-queries')({
            sort: sortCSSmq,
        }),
        isDev ? '' : require('cssnano')({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        }),

    ],
};


