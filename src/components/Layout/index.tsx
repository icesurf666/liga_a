import React, { useContext } from 'react'
import { Container, ThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DenseAppBar from 'components/DenseAppBar'
import Posts from 'pages/Posts'
import { darkTheme, lightTheme } from 'utils/themes'
import ThemeContext from 'contexts/themeContext'
import { useStyles } from './styles'

const Layout: React.FC = () => {
  const classes = useStyles()
  const { darkMode } = useContext(ThemeContext)
  const theme = darkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <DenseAppBar />
        <CssBaseline />
        <Container className={classes.root}>
          <Route path='/' component={Posts} />
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default Layout
