// Attached to ORIGIN REQUEST

/* For event object example: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html
 * Or see the copy below
 */

exports.handler = function handler (event, context, callback) {
    const { request } = event.Records[0].cf;

    // If no "." in URI, assume document request and append index.html to request.uri
    if (request.uri.match(/^[^.]*$/)) {
        if (request.uri[request.uri.length - 1] === '/') {
            request.uri += 'index.html';
        } else {
            request.uri += '/index.html';
        }
    }

    // Return to CloudFront Origin Request
    return callback(null, request);
};
