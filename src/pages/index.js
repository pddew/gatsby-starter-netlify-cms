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
                  className="content box"
                  key={post.id}
                >
                <div className="columns">
                  <div className="column">
                    <div>
                          <Link className="has-text-primary" to={post.fields.slug}>
                          <h4>{post.frontmatter.title}</h4>
                          </Link>
                          <p>{post.frontmatter.company}</p>
                          <div className="content">
                          <p>{post.frontmatter.description}</p>
                          </div>
                          <span className="tag is-light">{post.frontmatter.salary} </span>&nbsp;
                          <span className="tag is-light">{post.frontmatter.location}</span>&nbsp;
                          <span className="tag is-light">Expires: {post.frontmatter.validThru}</span>
                    </div>
                  </div>
                  <div className="column is-one-fifth is-inline-block">
                      <p className="is-pulled-right"><small>&nbsp;posted: {post.frontmatter.date}</small></p>
                      <Link className="button is-primary is-pulled-right" to={post.fields.slug}>
                        Apply 
                      </Link>
                  </div>
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
            validThru(formatString: "MMMM DD, YYYY")
            description
            salary
            company
            location
          }
        }
      }
    }
  }
`
