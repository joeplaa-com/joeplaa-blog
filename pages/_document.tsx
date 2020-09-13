import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <noscript>
                        <div style={{ height: '100vw', width: '100%' }}>
                            <div style={{ padding: '20px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                                <h1>Oops!!!!</h1>
                                <p>This website only works with JavaScript enabled.</p>
                                <p>This website explains <a href="https://www.enable-javascript.com/nl/">how to enable JavaScript in your browser.</a></p>
                            </div>
                        </div>
                    </noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
