import { createMuiTheme } from '@material-ui/core'

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ff1553',
    },
  },
})

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
})
