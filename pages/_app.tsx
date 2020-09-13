import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../src/lib/next-seo.config'
import configureStore from '../src/store/configureStore'
import '../styles/site.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={configureStore().store}>
            <PersistGate persistor={configureStore().persistor} loading={null}>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}

export default MyApp