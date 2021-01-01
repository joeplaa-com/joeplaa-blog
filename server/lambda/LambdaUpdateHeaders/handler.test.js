import redirect from './handler';

function callbackCreator(done, result) {
    return function callback(_, response) {
        try {
            expect(response).toMatchObject(result);
            done();
        } catch (error) {
            done(error);
        }
    };
}

// Add cache header to existing headers
const event1a = {
    "Records": [
        {
            "cf": {
                "request": {
                    "headers": {
                        "host": {
                            "value": 'www.joeplaa.com'
                        }
                    },
                    "uri": "/test/index.html"
                },
                "response": {
                    "status": "200",
                    "uri": "/test/index.html",
                    "headers": {
                        "host": [
                            {
                                "key": "Host",
                                "value": "www.joeplaa.com"
                            }
                        ]
                    }
                }
            }
        }
    ]
};
const result1a = {
    "uri": "/test/index.html",
    "headers": {
        "host": [
            {
                "key": "Host",
                "value": "www.joeplaa.com"
            }
        ],
        "cache-control": [
            {
                "key": "Cache-Control",
                "value": "public, max-age=0, must-revalidate"
            }
        ],
    }
}
const event1b = {
    "Records": [
        {
            "cf": {
                "request": {
                    "headers": {
                        "host": {
                            "value": 'www.joeplaa.com'
                        }
                    },
                    "uri": "/static/test.webp"
                },
                "response": {
                    "status": "200",
                    "uri": "/static/test.webp",
                    "headers": {
                        "host": [
                            {
                                "key": "Host",
                                "value": "www.joeplaa.com"
                            }
                        ]
                    }
                }
            }
        }
    ]
};
const result1b = {
    "uri": "/static/test.webp",
    "headers": {
        "host": [
            {
                "key": "Host",
                "value": "www.joeplaa.com"
            }
        ],
        "cache-control": [
            {
                "key": "Cache-Control",
                "value": "public, max-age=31536000, immutable"
            }
        ],
    }
}
test('Add cache header', (done) => {
    redirect.handler(event1a, null, callbackCreator(done, result1a));
    redirect.handler(event1b, null, callbackCreator(done, result1b));
});

