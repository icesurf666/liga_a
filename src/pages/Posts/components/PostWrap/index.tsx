import React from 'react'
import { useStyles } from './styles'

const PostWrap: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrap}>{children}</div>
  )
}

export default PostWrap
