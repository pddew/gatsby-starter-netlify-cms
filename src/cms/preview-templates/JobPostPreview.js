import React from 'react'
import PropTypes from 'prop-types'
import { JobPostTemplate } from '../../templates/job-post'

const JobPostPreview = ({ entry, widgetFor }) => (
  <JobPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    location={entry.getIn(['data', 'location'])}
    tags={entry.getIn(['data', 'tags'])}
    salary={entry.getIn(['data', 'salary'])}
    title={entry.getIn(['data', 'title'])}
  />
)

JobPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default JobPostPreview
