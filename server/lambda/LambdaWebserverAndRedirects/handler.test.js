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

const event1a = {
    "Records": [
        {
            cf: {
                request: {
                    headers: {
                        host: {
                            value: 'blog.joeplaa.com'
                        }
                    },
                    uri: "/home"
                }
            }
        }
    ]
};
const result1a = {
    headers: {
        host: {
            value: 'blog.joeplaa.com'
        }
    },
    uri: "/home/index.html"
}
const event1b = {
    "Records": [
        {
            cf: {
                request: {
                    headers: {
                        host: {
                            value: 'blog.joeplaa.com'
                        }
                    },
                    uri: "/"
                }
            }
        }
    ]
};
const result1b = {
    headers: {
        host: {
            value: 'blog.joeplaa.com'
        }
    },
    uri: "/index.html"
}
test('non-matching redirect', (done) => {
    redirect.handler(event1a, null, callbackCreator(done, result1a));
    redirect.handler(event1b, null, callbackCreator(done, result1b));
});

