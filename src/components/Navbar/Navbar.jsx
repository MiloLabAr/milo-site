import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import './Navbar.scss'
import { useState } from 'react';

function Navbar({ className='', style, routes=[] }) {

  const [open, setOpen] = useState(false);
  const toggleOpen = () => {setOpen(!open); console.log(open)}

  const currentPath = window.location.pathname;

  const logo = routes.find(route => route.logo);

  return (
    <header className={`Navbar ${className}`} style={style}>
      <nav>
        <div className='logo'>
          {logo ? <Link to={logo.path}>{logo.title}</Link> : null}
          <button className='menu' onClick={toggleOpen}>
            <AiOutlineMenu />
          </button>
        </div>
        <ul className={open ? 'open' : ''}>
          {
            routes.map((route, i) => {
              if(route.logo) return null;
              return (
                <li 
                  key={route.path+i} 
                  className={`${currentPath === route.path && !route.start ? 'active' : ''} ${route.logo ? 'logo' : ''} ${route.start ? 'start' : ''} ${route.end ? 'end' : ''}`}
                >
                  <Link to={route.path}>{route.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar