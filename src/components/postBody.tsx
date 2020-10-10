import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { PostBodyProps } from '../types'

export default function PostBody({ content }: PostBodyProps) {
    return (
        <MDXRenderer>{content}</MDXRenderer>
    );
}