import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill';
import { AuthorProps, AvatarImageProps } from '../types'

export default function Avatar({ name }: AuthorProps) {
    const data = useStaticQuery(graphql`
        query {
            images: allFile(
                filter: { internal: { mediaType: { regex: "/image/" } }, absolutePath: { regex: "/authors/" } }
            ) {
                edges {
                    node {
                        relativePath
                        extension
                        publicURL
                        childImageSharp {
                            fixed(width: 40) {
                                ...GatsbyImageSharpFixed_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    const slug = name.toLowerCase().replace(/ /g, '-'); // replaceAll doesn't work in IE; use replace with regex /<char-to-replace>/g. https://stackoverflow.com/questions/13340131/string-prototype-replaceall-not-working
    const regex = new RegExp(slug);
    const image = data.images.edges.find((image: AvatarImageProps) => (regex.test(image.node.relativePath)));
    return (
        <div className='d-flex flex-row align-items-center'>
            <Img fixed={image.node.childImageSharp.fixed} alt={name} objectFit="cover" objectPosition="50% 50%" className='img-fluid mr-2 rounded-circle' />
            <div>{name}</div>
        </div>
    );
}