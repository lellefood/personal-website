import React from 'react'
import CMS from 'netlify-cms-app'

import PostTemplate from '../templates/post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <PostTemplate
    data={{
      markdownRemark: {
        html: '<h1>Hello!</h1>',
        frontmatter: {
          date: entry.getIn(['data', 'date']),
          path: entry.getIn(['data', 'path']),
          title: entry.getIn(['data', 'title'])
        }
      }
    }}
  />
)


CMS.registerPreviewTemplate('blog', BlogPostPreview)