/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
    withOptimizedImages({
        webpack(config) {
            config.node = { fs: 'empty' }
            return config
        },
        // these are the default values so you don't have to provide them if they are good enough for your use-case.
        // but you can overwrite them here with any valid value you want.
        handleImages: ['ico', 'jpg', 'jpeg', 'png', 'svg', 'webp'],
        outputPath: 'static/assets',
        mozjpeg: {
            quality: 80
        },
        oxipng: {
            level: 3
        },
        svgo: {
            // enable/disable svgo plugins here
        },
        webp: {
            preset: 'default',
            quality: 75
        }
    })
);
