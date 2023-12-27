import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Logo from '../assets/Logo blanco.png'
import './template.scss'


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
    email : 'contacto@milolab.com',
    phone : '+54 11 2177-0155',
  }


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
