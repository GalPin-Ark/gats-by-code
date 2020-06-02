import React from "react"
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
function renderImageFixed(file) {
  return <Img fixed={file.node.childImageSharp.fixed} />
}
const ImageFixed = function (props) {
  return <StaticQuery
    query={graphql`
      query {
      images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fixed(width: 60) {
                ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    }
    `}
    render={({ images }) => renderImageFixed(images.edges.find(image => image.node.relativePath === props.src))}
  />
}
export default ImageFixed; 