import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AuthorProps, AvatarImageProps } from '../types';

export default function Avatar({ name }: AuthorProps): ReactElement {
    const data = useStaticQuery(graphql`{
        images: allFile(
            filter: {internal: {mediaType: {regex: "/image/"}}, absolutePath: {regex: "/authors/"}}
        ) {
            edges {
                node {
                    relativePath
                    extension
                    publicURL
                    childImageSharp {
                        gatsbyImageData(width: 40, layout: FIXED)
                    }
                }
            }
        }
    }`
    );

    const slug = name.toLowerCase().replace(/ /g, '-'); // replaceAll doesn't work in IE; use replace with regex /<char-to-replace>/g. https://stackoverflow.com/questions/13340131/string-prototype-replaceall-not-working
    const regex = new RegExp(slug);
    const image = data.images.edges.find((image: AvatarImageProps) => (regex.test(image.node.relativePath)));
    return (
        <div className='d-flex flex-row align-items-center'>
            <GatsbyImage
                image={image.node.childImageSharp.gatsbyImageData}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={name}
                className='img-fluid mr-2 rounded-circle' />
            <div>{name}</div>
        </div>
    );
}
