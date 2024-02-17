import { Link } from 'react-router-dom';
import './Button.scss';
//import Loader from './assets/Loader';
import { ReactComponent as Loader} from './assets/loader.svg'
import { useState } from 'react';

function Button({ children, outlined, bold, rounded, to, fit, color, hoverColor, textColor, loading=false, onClick }) {

  const [hover, setHover] = useState(false);

  const styles = {
    color: outlined ? (hover && hoverColor ? hoverColor : color || 'white') : loading ? color : textColor || 'white',
    borderColor: hover && hoverColor ? hoverColor : color || 'white',
    backgroundColor: outlined ? 'transparent' : hoverColor && hover ? hoverColor : color || 'white',
  }

  const classes = `button ${outlined ? 'outlined' : ''} ${rounded ? 'rounded' : ''} ${fit ? 'fit' : ''} ${bold ? 'bold' : ''} ${loading ? 'loading' : ''}`

  return to ? (
    <Link to={to} style={styles} className={classes} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        {loading ? <Loader /> : children}
    </Link>
  ) : (
    <button style={styles} className={classes} onClick={onClick}>
        {loading ? <Loader /> : children}
    </button>
  )
}

export default Button;