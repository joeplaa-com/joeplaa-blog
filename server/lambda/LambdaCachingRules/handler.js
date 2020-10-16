// Attached to: ORIGIN RESPONSE
exports.lambda_handler = (event, context, callback) => {
    // Extract the request and response from the Cloudfront Origin Response event
    let { request, response } = event.Records[0].cf;

    const headerCacheControl = 'Cache-Control';
    const defaultTimeToLive = 60 * 60 * 24 * 365; // 365 days
    const fileExts = [
        '.js',
        '.css',
        '.json',
        '.woff',
        '.woff2',
        '.ttf',
        '.otf',
        '.eot',
        '.jpg',
        '.jpeg',
        '.png',
        '.gif',
        '.svg',
        '.ico'
    ];

    if (response.status === '200') {
        if (!response.headers[headerCacheControl.toLowerCase()]) {
            // Only cache above-defined list of file types
            if (fileExts.findIndex((fileExt) => request.uri.endsWith(fileExt)) >= 0) {
                response.headers[headerCacheControl.toLowerCase()] = [{
                    key: headerCacheControl,
                    value: `public, max-age=${defaultTimeToLive}`,
                }];
            } else {
                response.headers[headerCacheControl.toLowerCase()] = [{
                    key: headerCacheControl,
                    value: `public, max-age=0`,
                }];
            }
        }
    }
    // Return to Cloudfront Origin Response event
    callback(null, response);
};