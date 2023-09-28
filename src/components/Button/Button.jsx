import { Link } from 'react-router-dom';
import './Button.scss'

function Button({ children, outlined, bold, rounded, to, fit, color }) {

  const styles = {
    color: outlined ? color || 'white' : 'white',
    borderColor: color || 'white',
    backgroundColor: outlined ? 'transparent' : color || 'white'
  }

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