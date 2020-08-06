import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './styles'

const DenseAppBar: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default DenseAppBar
