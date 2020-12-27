import React from "react"
import {graphql} from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout";
import Post from "../components/Post";

export default ({data}) => {
  console.log(data);
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allWordpressPost.nodes.map((node) => (
        <Post 
        image
        title={node.title} 
        excerpt={node.excerpt}
        readMore={node.slug}>
        </Post>
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql `
{
  allWordpressPost {
    nodes {
      slug
      excerpt
      title
    }
  }
}
`