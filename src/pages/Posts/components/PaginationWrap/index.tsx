import React from 'react'
import { useStyles } from './styles'

const PaginationWrap: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.paginationWrap}>{children}</div>
  )
}

export default PaginationWrap
