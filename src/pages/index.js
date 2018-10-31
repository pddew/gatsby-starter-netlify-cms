import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Jobs</h1>
            </div>


            {posts
              .map(({ node: post }) => (
                <div
                  className="content level"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                <div className="level-left">
                  <div>
                      <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                      </Link> <br/>
                      <p>{post.frontmatter.description}</p>
                      <span className="tag is-light">{post.frontmatter.salary} </span>&nbsp;
                      <span className="tag is-light">{post.frontmatter.location}</span>
                      </div>
                </div>
                <div className="level-right">
                <small>{post.frontmatter.date}</small> &nbsp;

                      <Link className="button is-primary" to={post.fields.slug}>
                        Apply 
                      </Link>
                      
                </div>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "job-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            salary
            location
          }
        }
      }
    }
  }
`
