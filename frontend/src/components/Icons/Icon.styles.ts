import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  icon: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },

  spin: {
    animation: '$spinAnimation 1200ms linear infinite',
    transformOrigin: 'center',
  },

  '@keyframes spinAnimation': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
})

export default useStyles
