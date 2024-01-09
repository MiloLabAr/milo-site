import { Link } from 'react-router-dom';
import './Button.scss'

function Button({ children, outlined, bold, rounded, to, fit, color, hoverColor, textColor}) {

  const styles = {
    color: outlined ? color || 'white' : textColor || 'white',
    borderColor: color || 'white',
    backgroundColor: outlined ? 'transparent' : color || 'white',
  }

    styles['&:hover'] = {
      backgroundColor: hoverColor,
    };

  const classes = `button ${outlined ? 'outlined' : ''} ${rounded ? 'rounded' : ''} ${fit ? 'fit' : ''} ${bold ? 'bold' : ''}`

  return to ? (
    <Link to={to} style={styles} className={classes}>
        {children}
    </Link>
  ) : (
    <button style={styles} className={classes}>
        {children}
    </button>
  )
}

export default Button;