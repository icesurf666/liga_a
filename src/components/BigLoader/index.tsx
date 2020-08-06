import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useStyles } from './styles'

const BigLoader: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <Backdrop className={classes.backdrop} open>
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  )
}

export default BigLoader