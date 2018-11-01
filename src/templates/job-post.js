import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import googleJobsSchema from '../components/Layout'

export const JobPostTemplate = ({
  content,
  contentComponent,
  description,
  location,
  validThru,
  salary,
  company,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1 content">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div className="box">
            <p>{salary}</p>
            <p>{location}</p>
            <p>{company}</p>
            <p>{description}</p>
            {tags && tags.length ? (
              <div>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <span className="tag is-info"><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            </div>
           
            <PostContent content={content} />
           
          </div>
        </div>
      </div>
    </section>
  )
}

JobPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  validThru: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const JobPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <JobPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        validThru={post.frontmatter.validThru}
        location={post.frontmatter.location}
        company={post.frontmatter.company}
        helmet={<Helmet title={`${post.frontmatter.title} | Job`} />}
        tags={post.frontmatter.tags}
        salary={post.frontmatter.salary}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

JobPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default JobPost

export const pageQuery = graphql`
  query JobPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        validThru(formatString: "MMMM DD, YYYY")
        company
        location
        salary
        tags
      }
    }
  }
`
