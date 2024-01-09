import { Link } from 'react-router-dom';
import './Footer.scss';

import { BsEnvelopeFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

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
                            <BsEnvelopeFill /> {contactInfo.email}
                        </a>
                    </li>
                    <li>
                        <a 
                            href={`https://wa.me/${phone}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <IoLogoWhatsapp/> {contactInfo.phone}
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.instagram.com/${contactInfo.instagram}`} target='_blank'>
                            <RiInstagramFill /> @{contactInfo.instagram}
                        </a>
                    </li>
                    <li>
                        <a href='/cotizar' className='cotizar'>
                            Cotizar online
                        </a>
                    </li>
                </ul>
            </div>
            <div className='copyright'>
                <p>© 2024 Milolab</p>
            </div>
        </footer>
    )
}

export default Footer;