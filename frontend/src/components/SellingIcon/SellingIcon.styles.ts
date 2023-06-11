import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  icon: {
    '& > span': {
      display: 'block !important',
    },
  },
})
