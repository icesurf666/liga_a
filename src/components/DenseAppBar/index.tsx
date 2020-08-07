import React, { useContext, useCallback } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Switch } from '@material-ui/core'
import ThemeContext from 'contexts/themeContext'
import { useStyles } from './styles'

const DenseAppBar: React.FC = () => {
  const classes = useStyles()
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const handleChange = useCallback(() => {
    setDarkMode(!darkMode)
  }, [darkMode, setDarkMode])

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense' className={classes.toolbar}>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Switch
            checked={darkMode}
            color='default'
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            onChange={handleChange}
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default DenseAppBar
