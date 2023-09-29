import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer({ routes, contactInfo }) {
    const phone = contactInfo.phone.replace(/ /g, '').replace(/-/g, '')

    return (
        <footer>
            <div className='lists'>
                <ul>
                    <li><h1>Links</h1></li>
                    {routes.map((route, i) => (
                        <li key={route.title+i}>
                            <Link to={route.path}>{route.title}</Link>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li><h1>Contacto</h1></li>
                    <li>
                        <a href={`mailto:${contactInfo.email}`}>
                            {contactInfo.email}
                        </a>
                    </li>
                    <li>
                        <a 
                            href={`https://wa.me/${phone}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {contactInfo.phone}
                        </a>
                    </li>
                </ul>
            </div>
            <div className='copyright'>
                <p>© 2023 Milolab</p>
            </div>
        </footer>
    )
}

export default Footer;