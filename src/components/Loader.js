import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  loader: {
    '&,&::after, &::before': {
      'background': '#ffffff',
      '-webkit-animation': 'load1 1s infinite ease-in-out',
      'animation': 'load1 1s infinite ease-in-out',
      'width': '1em',
      'height': '4em',
    },
    '&': {
      'color': '#ffffff',
      'text-indent': '-9999em',
      'margin': '88px auto',
      'position': 'relative',
      'font-size': '11px',
      '-webkit-transform': 'translateZ(0)',
      '-ms-transform': 'translateZ(0)',
      'transform': 'translateZ(0)',
      '-webkit-animation-delay': '-0.16s',
      'animation-delay': '-0.16s'
    },
    '&::before, &::after': {
      'position': 'absolute',
      'top': 0,
      'content': "'yellow'"
    },
    '&::before': {
      'left': '-1.5em',
      '-webkit-animation-delay': '-0.32s',
      'animation-delay': '-0.32s'
    },
    '&::after': {
      'left': '1.5em'
    },
  },
  '@keyframes load1': {
    '0%, 80%, 100%': {
      'box-shadow': '0 0',
      'height': '4em',
    },
    '40%': {
      'box-shadow': '0 -2em',
      'height': '5em'
    }
  },
  'load1': {
    'min-height': '5em'
  }
}
const Loader = ({ classes, children }) => {
  return (
    <div className={classes.load1}>
      <div className={classes.loader}> Loading... </div>
    </div>
  );
}
export default injectSheet(styles)(Loader);