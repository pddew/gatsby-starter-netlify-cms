import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'

export default ({data}) => {
console.log(data)
return (
    <Layout>
        <section className="section">
            <div className="container">
                <div className="content">
                <h1>My Site's Files</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Section</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.allMarkdownRemark.edges.map(({ node }, index) => (
                      <tr key={index}>
                        <td>{node.frontmatter.templateKey}</td>
                        <td><Link to={node.fields.slug}>{node.frontmatter.title}</Link></td>
                        <td>{node.frontmatter.description}</td>
                        <td>{node.frontmatter.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
                </div>
        </section>
    </Layout>
)
}

export const query = graphql`
    query {
        allMarkdownRemark (filter: {frontmatter: {templateKey: {eq:"blog-post"}}}) {
          edges {
            node {
                fields{
                    slug
                  }
              frontmatter {
                templateKey
                title
                description
                date
              }
            }
          }
        }
      }
      
`