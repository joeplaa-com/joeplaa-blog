/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const updateHeaders = require('./handler');

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

const headerCacheControl = 'Cache-Control';
const defaultTimeToLive = 60 * 60 * 24 * 365; // 365 days in seconds
const noCacheHeader = 'public, max-age=0, must-revalidate';
const cacheHeader = `public, max-age=${defaultTimeToLive}, immutable`;
const noCacheResponseHeader = {
    key: headerCacheControl,
    value: noCacheHeader
};
const cacheResponseHeader = {
    key: headerCacheControl,
    value: cacheHeader
};

// non cacheable resources
test(`Cache-Control: ${noCacheHeader}`, (done) => {
    // never cache *.html
    const event1 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/index.html'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'www.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result1 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'www.jodibooks.com'
                }
            ],
            'cache-control': [noCacheResponseHeader]
        }
    };
    const event2 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/test/index.html'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'www.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result2 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'www.jodibooks.com'
                }
            ],
            'cache-control': [noCacheResponseHeader]
        }
    };
    // never cache sitemap.xml, sitemap.xsl and robots.txt
    const event3 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/sitemap.xml'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'www.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result3 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'www.jodibooks.com'
                }
            ],
            'cache-control': [noCacheResponseHeader]
        }
    };
    const event4 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/sitemap.xsl'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'www.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result4 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'www.jodibooks.com'
                }
            ],
            'cache-control': [noCacheResponseHeader]
        }
    };
    const event5 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/robots.txt'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'www.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result5 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'www.jodibooks.com'
                }
            ],
            'cache-control': [noCacheResponseHeader]
        }
    };
    // never cache non-serialized images
    const event6 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/og_logo.png'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'www.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result6 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'www.jodibooks.com'
                }
            ],
            'cache-control': [noCacheResponseHeader]
        }
    };
    const event7 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/img/og_logo.png'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'docs.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result7 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'docs.jodibooks.com'
                }
            ],
            'cache-control': [noCacheResponseHeader]
        }
    };
    // Gatsby: never cache page-data.json
    const event8 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/page-data/attributing/page-data.json'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'blog.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result8 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'blog.jodibooks.com'
                }
            ],
            'cache-control': [noCacheResponseHeader]
        }
    };

    updateHeaders.handler(event1, null, callbackCreator(done, result1));
    updateHeaders.handler(event2, null, callbackCreator(done, result2));
    updateHeaders.handler(event3, null, callbackCreator(done, result3));
    updateHeaders.handler(event4, null, callbackCreator(done, result4));
    updateHeaders.handler(event5, null, callbackCreator(done, result5));
    updateHeaders.handler(event6, null, callbackCreator(done, result6));
    updateHeaders.handler(event7, null, callbackCreator(done, result7));
    updateHeaders.handler(event8, null, callbackCreator(done, result8));
});

// cacheable resources
test(`Cache-Control: ${cacheHeader}`, (done) => {
    // Gatsby static location
    const event3 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/static/ea1fc827e3b0b1eb44d030fc3ed7a910/61c0d/test.jpg'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'blog.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result3 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'blog.jodibooks.com'
                }
            ],
            'cache-control': [cacheResponseHeader]
        }
    };
    const event4 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/static/ea1fc827e3b0b1eb44d030fc3ed7a910/61c0d/test.webp'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'blog.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result4 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'blog.jodibooks.com'
                }
            ],
            'cache-control': [cacheResponseHeader]
        }
    };
    // Gatsby main folder *.js, *.js.map, *.css
    const event5 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/webpack-runtime-173efd7f9cb7d3fd1f9a.js'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'blog.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result5 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'blog.jodibooks.com'
                }
            ],
            'cache-control': [cacheResponseHeader]
        }
    };
    const event6 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/webpack-runtime-173efd7f9cb7d3fd1f9a.js.map'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'blog.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result6 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'blog.jodibooks.com'
                }
            ],
            'cache-control': [cacheResponseHeader]
        }
    };
    const event7 = {
        Records: [
            {
                cf: {
                    request: {
                        uri: '/styles.2260223821864b3bbd65.css'
                    },
                    response: {
                        status: '200',
                        headers: {
                            host: [
                                {
                                    key: 'Host',
                                    value: 'blog.jodibooks.com'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
    const result7 = {
        headers: {
            host: [
                {
                    key: 'Host',
                    value: 'blog.jodibooks.com'
                }
            ],
            'cache-control': [cacheResponseHeader]
        }
    };

    updateHeaders.handler(event3, null, callbackCreator(done, result3));
    updateHeaders.handler(event4, null, callbackCreator(done, result4));
    updateHeaders.handler(event5, null, callbackCreator(done, result5));
    updateHeaders.handler(event6, null, callbackCreator(done, result6));
    updateHeaders.handler(event7, null, callbackCreator(done, result7));
});
