import Button from '../../../components/Button/Button'
import ImageSliderAuto from '../../../components/ImageSliderAuto/ImageSliderAuto';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './Home.scss'

import { BsFillPeopleFill, BsCurrencyDollar, BsPencilSquare, BsDatabaseFill } from 'react-icons/bs';

function Home() {
  return (
    <>
      <section className='main'>
        <h1>Creamos experiencias digitales únicas</h1>
        <h3>Desarrollamos tu juego o aplicación a medida</h3>
        <Button to='/servicios' rounded outlined>Servicios y paquetes</Button>
        <div className='background-image'></div>
      </section>

      <section className='bestselling'>
        <div className='top-container'>
          <h2>Nuestros más vendidos  ★</h2>
          <div className='button-ver-todos-container'>
            <Button 
              to='/portfolio'
              color='#A187DA'
              rounded 
              outlined bold
              fit
            >
              {'Ver todos >'}
            </Button>
          </div>
        </div>
        <div className='products'>
          <ProductCard
            title='Word Connect'
            description='Quiz interactivo que consiste en unir letras para formar la palabra correcta'
            badges={['Touch', 'Quiz', 'Personalizable', 'Juego']}
            vertical
            id='wordconnect'
          >
            <img src='./assets/products/wordlink.png' alt='Wordconnect' />
          </ProductCard>
          <ProductCard
            title='Sopa de letras'
            description='Clasico juego de sopa de letras'
            badges={['Touch', 'Personalizable', 'Juego']}
            vertical
            id='sopadeletras'
          >
            <img src='./assets/products/wordsearch.png' alt='Wordsearch' />
          </ProductCard>
          <ProductCard
            title='Formulario'
            description='Formulario personalizado para la toma de datos de clientes'
            badges={['Aplicación', 'Personalizable', 'Base de datos']}
            id='formulario'
          >
            <img src='./assets/products/form.png' alt='Form' />
          </ProductCard>
        </div>
        <div className='button-ver-todos-container-mobile'>
            <Button 
              to='/portfolio'
              color='#A187DA'
              rounded 
              outlined bold
              fit
            >
              {'Ver todos >'}
            </Button>
          </div>
      </section>

      <section className='slider'>
        <h2>Tecnologias que usamos</h2>
        <ImageSliderAuto>
          <img src="./assets/home/technology/html.png" alt="" />
          <img src="./assets/home/technology/sass.png" alt="" />
          <img src="./assets/home/technology/js.png" alt="" />
          <img src="./assets/home/technology/ts.png" alt="" />
          <img src="./assets/home/technology/react.png" alt="" />
          <img src="./assets/home/technology/mongo.png" alt="" />
          <img src="./assets/home/technology/pwa.png" alt="" />
        </ImageSliderAuto>
      </section>

      <section className='info'>
        <div className='content'>
          <h2>Aplicaciones personalizadas</h2>
          <p>
          En MILO lab entendemos que cada empresa tiene necesidades únicas. Es por eso que ofrecemos soluciones de desarrollo de aplicaciones personalizadas diseñadas específicamente para satisfacer tus objetivos empresariales. Ya sea que busques mejorar la relación con tus clientes o crear publicidad única para tu marca, nuestro equipo de expertos está listo para llevar tu visión más allá de las expectativas.
          </p>
          <Button to='/cotizar' rounded color='#6537C7'>
            Cotizar ahora
          </Button>
        </div>
        <img src='./assets/home/info.png' alt='info' />
      </section>

      <section className='events'>
      <div className='events-header'>
          <span>
            <BsPencilSquare />
            100% personalizables
          </span>
          <span>
            <BsFillPeopleFill />
            Eventos corporativos
          </span>
          <span>
            <BsCurrencyDollar />
            Cotización en el momento
          </span>
          <span>
            <BsDatabaseFill />
            Base de datos
          </span>
        </div>
        <div className='events-card'>
          <img src='./assets/home/flappy.png' alt='Flappypig' />
          <div className='content'>
            <h2>Juegos para tu evento</h2>
            <p>
            ¿Qué mejor manera de atraer nuevos clientes que con juegos interactivos? Ya sea un evento corporativo, una feria comercial o una campaña de marketing, nuestros juegos están diseñados para cautivar a tu audiencia y dejar una marca única.
            </p>
            <Button to='/portfolio#juegos' rounded color='white' textColor='#6537C7'>
            Ver juegos
          </Button>
          </div>
        </div>
        
      </section>

      <section className='clients'>
        <h2>Confían en nosotros</h2>
        <hr />
        <div className='logos'>
          <img src='./assets/home/logo-sm.png' alt='Sample Marketing' />
          <img src='./assets/home/nacion.png' alt='bna' />
          <img src='./assets/home/logo-bc.png' alt='Banco Ciudad' />
          <img src='./assets/home/logo-mondelez.png' alt='Mondelez' />
        </div>
      </section>
    </>
  )
}

export default Home;
