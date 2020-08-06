import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DenseAppBar from 'components/DenseAppBar'
import Posts from 'pages/Posts'
import { useStyles } from './styles'

const Layout: React.FC = () => {
  const classes = useStyles()
  return (
    <Router>
      <DenseAppBar />
      <Container className={classes.root}>
        <Route path='/' component={Posts} />
      </Container>
    </Router>
  )
}

export default Layout
