import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    width: 'auto',
    marginRight: '-0.25rem',
    marginLeft: '-0.25rem',
  },

  column: {
    paddingRight: '.25rem',
    paddingLeft: '.25rem',
    backgroundClip: 'padding-box',
  },
})
