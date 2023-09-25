import Navbar from '../components/Navbar/Navbar'
import './template.scss'

export default function Template({ children }) {

  const routes = [
    { title: 'Logo', path: '/', logo: true, start: true},
    { title: 'Inicio', path: '/' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Servicios', path: '/services' },
    { title: 'Nosotros', path: '/about' },
    { title: 'Cotizar', path: '/quote', end: true },
  ]

  return (
    <>
        <Navbar 
          routes={routes}
        />
        <main>
          {children}
        </main>
    </>
  )
}
