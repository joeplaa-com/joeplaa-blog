import React, { useMemo } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { ImageProps, ImageFluidNodeProps } from '../types'

const Image = ({ src, to, alt, ...rest }: ImageProps) => {
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
              fluid(maxWidth: 1920, srcSetBreakpoints: [320, 640, 960, 1280, 1600, 1920])
              {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

    const match = useMemo(
        () => data.images.edges.find(({ node }: ImageFluidNodeProps) => src === node.relativePath),
        [data, src]
    );

    if (!match) return null;

    const { node: { childImageSharp, publicURL, extension } = {} } = match as ImageFluidNodeProps;

    if (extension === 'svg' || !childImageSharp) {
        const svgImage = <img src={publicURL} alt={alt} {...rest} />
        return to ? <Link to={to}>{svgImage}</Link> : svgImage;
    }

    const renderedImage = <Img fluid={childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt={alt} {...rest} />;
    return to ? <Link to={to}>{renderedImage}</Link> : renderedImage;
};

export default Image;