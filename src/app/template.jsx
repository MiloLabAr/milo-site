import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Logo from '../assets/Logo blanco.png'
import './template.scss'
import { useEffect } from 'react'


export default function Template({ children }) {

  const headerRoutes = [
    { src: Logo, path: '/', logo: true, start: true},
    { title: 'Inicio', path: '/' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Servicios', path: '/servicios' },
    { title: 'Nosotros', path: '/nosotros' },
    { title: 'Cotizar', path: '/cotizar', end: true },
  ]

  const footerRoutes = [
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Servicios', path: '/servicios' },
    { title: 'Nosotros', path: '/nosotros' },
    { title: 'FAQ', path: '/faq' },
  ]

  const contactInfo = {
    email : 'contacto@milolab.tech',
    phone : '+54 11 2177-0155',
    instagram: 'milolab_software'
  }

  useEffect(()=>{
    //Line to prevent keeping the scroll across diferent routes
    window.scrollTo(0,0);
  }, [children])

  return (
    <>
        <Navbar 
          routes={headerRoutes}
        />
        <main>
          {children}
        </main>
        <Footer
          routes={footerRoutes}
          contactInfo={contactInfo}
        />
    </>
  )
}
