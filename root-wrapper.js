import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Provider } from 'react-redux';
import NewTabLink from './src/components/newTabLink'
import Quote from './src/components/quote'
import configureStore from './src/store/configureStore'
import "./src/styles/site.scss"

const components = {
    // eslint-disable-next-line react/display-name
    'p.inlineCode': props => (
        <code style={{ backgroundColor: 'lightgray', borderRadius: '3px', marginLeft: '-4px', marginRight: '-2px', paddingLeft: '4px', paddingRight: '4px' }} {...props} />
    ),
    NewTabLink,
    Quote
};

export const wrapRootElement = ({ element }) => (
    <Provider store={configureStore()}>
        <MDXProvider components={components}>
            {element}
        </MDXProvider>
    </Provider>
);