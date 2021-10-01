/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Attached to ORIGIN REQUEST

/* For event object example: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html
 * Or see the copy below
 */

exports.handler = (event, context, callback) => {
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
    callback(null, request);
};
