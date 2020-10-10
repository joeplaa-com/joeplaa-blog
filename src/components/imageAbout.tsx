import React, { useMemo } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { ImageProps, ImageFixedNodeProps } from '../types'

const ImageAbout = ({ src, to, alt, ...rest }: ImageProps) => {
    const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } }, absolutePath: { regex: "/src/images/" } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fixed(width: 240)
              {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `);

    const match = useMemo(
        () => data.images.edges.find(({ node }: ImageFixedNodeProps) => src === node.relativePath),
        [data, src]
    );

    if (!match) return null;

    const { node: { childImageSharp, publicURL, extension } = {} } = match as ImageFixedNodeProps;

    if (extension === 'svg' || !childImageSharp) {
        const svgImage = <img src={publicURL} alt={alt} {...rest} />
        return to ? <Link to={to}>{svgImage}</Link> : svgImage;
    }

    const renderedImage = <Img fixed={childImageSharp.fixed} objectFit="cover" objectPosition="50% 50%" alt={alt} {...rest} />;
    return to ? <Link to={to}>{renderedImage}</Link> : renderedImage;
};

export default ImageAbout;