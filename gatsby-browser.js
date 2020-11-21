// https://stackoverflow.com/questions/61967988/how-to-create-page-with-parameters-in-gatsbyjs-dynamically
import React from 'react'
import { wrapRootElement as wrap } from './root-wrapper'
import Layout from './src/components/layout'

export const wrapRootElement = wrap;

export const wrapPageElement = ({ element, ...restProps }) => {
    return (
        <Layout
            props={restProps}
        >
            {element}
        </Layout>
    );
};