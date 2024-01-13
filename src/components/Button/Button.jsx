import { Link } from 'react-router-dom';
import './Button.scss';
//import Loader from './assets/Loader';
import { ReactComponent as Loader} from './assets/loader.svg'

function Button({ children, outlined, bold, rounded, to, fit, color, hoverColor, textColor, loading=false, onClick }) {

  const styles = {
    color: outlined ? color || 'white' : loading ? color : textColor || 'white',
    borderColor: color || 'white',
    backgroundColor: outlined ? 'transparent' : color || 'white',
  }

    styles['&:hover'] = {
      backgroundColor: hoverColor,
    };

  const classes = `button ${outlined ? 'outlined' : ''} ${rounded ? 'rounded' : ''} ${fit ? 'fit' : ''} ${bold ? 'bold' : ''} ${loading ? 'loading' : ''}`

  return to ? (
    <Link to={to} style={styles} className={classes}>
        {children}
        {loading && <Loader />}
    </Link>
  ) : (
    <button style={styles} className={classes} onClick={onClick}>
        {children}
        {loading && <Loader />}
    </button>
  )
}

export default Button;