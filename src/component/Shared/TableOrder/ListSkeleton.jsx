import React from 'react'
import ContentLoader from 'react-content-loader'

const ListSkeleton = props => (
  <ContentLoader
    width={'100%'}
    height={575}
    viewBox="0 0 800 575"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="12" y="58" rx="4" ry="2" width="211" height="211" />
    <rect x="240" y="57" rx="4" ry="2" width="211" height="211" />
    <rect x="467" y="56" rx="4" ry="2" width="211" height="211" />
    <rect x="12" y="283" rx="4" ry="2" width="211" height="211" />
    <rect x="240" y="281" rx="4" ry="2" width="211" height="211" />
    <rect x="468" y="279" rx="4" ry="2" width="211" height="211" />

  </ContentLoader>
)

export default ListSkeleton