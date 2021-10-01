/* eslint-disable @typescript-eslint/explicit-function-return-type */
// https://www.ximedes.com/2018-04-23/deploying-gatsby-on-s3-and-cloudfront/
// Attached to: ORIGIN RESPONSE

const cacheableFolders = [
    '/static/'
];
const cacheableExtensions = [
    '.css',
    '.js',
    'js.map'
];

const headerCacheControl = 'Cache-Control';
const defaultTimeToLive = 60 * 60 * 24 * 365; // 365 days in seconds
const noCacheResponseHeader = {
    key: headerCacheControl,
    value: 'public, max-age=0, must-revalidate'
};
const cacheResponseHeader = {
    key: headerCacheControl,
    value: `public, max-age=${defaultTimeToLive}, immutable`
};

exports.handler = (event, context, callback) => {
    // Extract the request and response from the Cloudfront Origin Response event
    const { request, response } = event.Records[0].cf;
    const { headers } = response;

    if (response.status === '200') {
        if (!headers[headerCacheControl.toLowerCase()] && (cacheableFolders.some(folder => request.uri.includes(folder)) || cacheableExtensions.some(extension => request.uri.endsWith(extension)))) {
            // Cache file if it is within one of 'cacheableFolders'
            // Or if filetype is one of 'cacheableExtensions' (use 'endsWith()' to exclude 'json'; using 'includes()' also includes 'json')
            headers[headerCacheControl.toLowerCase()] = [cacheResponseHeader];
        } else {
            // Otherwise do not cache requested file
            headers[headerCacheControl.toLowerCase()] = [noCacheResponseHeader];
        }
    }

    // Return to Cloudfront Origin Response event
    callback(null, response);
};
