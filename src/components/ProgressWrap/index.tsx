import React from 'react'
import { useStyles } from './styles'

const ProgressWrap: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrap}>{children}</div>
  )
}

export default ProgressWrap
