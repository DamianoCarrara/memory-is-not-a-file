import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  item: {
    position: 'relative',
    marginLeft: '.5rem',
    paddingLeft: '.5rem',
    whiteSpace: 'nowrap',

    '&:before': {
      content: '"|"',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
})
