// Attached to: ORIGIN RESPONSE

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
    '.ico',
    '.webp'
];

exports.handler = (event, context, callback) => {
    // Extract the request and response from the Cloudfront Origin Response event
    const { request, response } = event.Records[0].cf;
    const { headers } = response;

    if (response.status === '200') {
        if (!headers[headerCacheControl.toLowerCase()]) {
            // Only cache above-defined list of file types
            if (fileExts.findIndex((fileExt) => request.uri.endsWith(fileExt)) >= 0) {
                headers[headerCacheControl.toLowerCase()] = [{
                    key: headerCacheControl,
                    value: `public, max-age=${defaultTimeToLive}, immutable`,
                }];
            } else {
                headers[headerCacheControl.toLowerCase()] = [{
                    key: headerCacheControl,
                    value: `public, max-age=0, must-revalidate`,
                }];
            }
        }
    }

    // Return to Cloudfront Origin Response event
    callback(null, response);
};