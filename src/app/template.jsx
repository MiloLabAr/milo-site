import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './template.scss'

export default function Template({ children }) {

  const headerRoutes = [
    { title: 'Logo', path: '/', logo: true, start: true},
    { title: 'Inicio', path: '/' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Servicios', path: '/services' },
    { title: 'Nosotros', path: '/about' },
    { title: 'Cotizar', path: '/quote', end: true },
  ]

  const footerRoutes = [
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Servicios', path: '/services' },
    { title: 'Nosotros', path: '/about' },
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
