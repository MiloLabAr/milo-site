import Button from '../../../components/Button/Button'
import ProductCard from '../../../components/ProductCard/ProductCard';
import './Home.scss'

import { AiFillDatabase } from 'react-icons/ai';
import { BsFillPencilFill, BsFillPeopleFill, BsCurrencyDollar } from 'react-icons/bs';

function Home() {
  return (
    <>
      <section className='main'>
        <h1>Creamos experiencias digitales únicas</h1>
        <h2>Desarrollamos tu juego o aplicación a medida</h2>
        <Button to='/about' rounded outlined>Saber más</Button>
      </section>
      <section className='clients'>
        <h1>Confían en nosotros</h1>
        <hr />
        <div className='logos'>
          <img src='./assets/img/nacion.png' alt='bna' />
          <img src='./assets/img/nacion.png' alt='bna' />
          <img src='./assets/img/nacion.png' alt='bna' />
          <img src='./assets/img/nacion.png' alt='bna' />
        </div>
      </section>
      <section className='bestselling'>
        <div className='top-container'>
          <h1>Nuestros más vendidos  ★</h1>
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
        <div className='products'>
          <ProductCard
            title='Word Connect'
            description='Quiz interactivo que consiste en unir letras para formar la palabra correcta'
            badges={['Touch', 'Quiz', 'Personalizable', 'Juego']}
            vertical
          >
            <img src='./assets/img/wordlink.png' alt='Wordconnect' />
          </ProductCard>
          <ProductCard
            title='Sopa de letras'
            description='Clasico juego de sopa de letras'
            badges={['Touch', 'Personalizable', 'Juego']}
            vertical
          >
            <img src='./assets/img/wordsearch.png' alt='Wordsearch' />
          </ProductCard>
          <ProductCard
            title='Formulario'
            description='Formulario personalizado para la toma de datos de clientes'
            badges={['Aplicación', 'Personalizable', 'Base de datos']}
          >
            <img src='./assets/img/form.png' alt='Form' />
          </ProductCard>
        </div>
      </section>
      <section className='info'>
        <div className='content'>
          <h1>Aplicaciones personalizadas</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam a suscipit distinctio officiis autem molestiae asperiores velit earum! Placeat consequatur facere consectetur voluptatem architecto enim quia eveniet quasi quisquam.
          </p>
          <Button to='/services' rounded color='#6537C7'>
            Cotizar ahora
          </Button>
        </div>
        <img src='./assets/img/info.png' alt='info' />
      </section>
      <section className='events'>
        <div className='events-header'>
          <span>
            <BsFillPencilFill />
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
            <AiFillDatabase />
            Base de datos
          </span>
        </div>
        <div className='events-card'>
          <img src='./assets/img/flappy.png' alt='Flappypig' />
          <div className='content'>
            <h1>Juegos para tu evento</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae praesentium ad nulla, laudantium aperiam cupiditate molestiae iste quo doloremque optio illum similique quam debitis suscipit dolore libero quod tenetur dolor?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;