import './Product.scss'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

import data from '../../../assets/data.json'
import Button from '../../../components/Button/Button';

function Product() {

  const [imageDisplayed, setImageDisplayed] = useState(0);

  const navigate = useNavigate();
  
  const { id } = useParams();

  const imgRoute = '/assets/img/products/';

  const [ pageData ] = data.some(page => page.id === id) ? data.filter(page => page.id === id) : [{title:'', badges:[], description:'',changes:[],images:[],vertical:false}];

  const { title, badges, description, changes, images, vertical } = pageData;

  const handleImage = i => setImageDisplayed(i);
  useEffect(()=>{
    //REEMPLAZAR ESTO POR UN REDIRECT EN LOADER (index.js)
    if(title === '') navigate('/404');
    // eslint-disable-next-line
  }, [])

  return (
    <div className='product-page'>
      <section className='main-pdp'>
        <div className={`gallery ${vertical ? 'portrait' : 'landscape'}`}>
          {!vertical &&
          <div className='image'>
            <img src={imgRoute + images[imageDisplayed]} alt={images[imageDisplayed]?.split(".")[0]} />
          </div>
          }
          <div className='column'>
            {images.map((route, i) => (
              <div 
                key={route+i}
                className={i === imageDisplayed ? 'selected' : ''}
                onMouseOver={()=>handleImage(i)}
                onClick={()=>handleImage(i)}
              >
                <img src={imgRoute + route} alt={route.split(".")[0]} />
              </div>
            ))}
          </div>
          {vertical &&
          <div className='image'>
            <img src={imgRoute + images[imageDisplayed]} alt={images[imageDisplayed].split(".")[0]} />
          </div>
          }
        </div>
        <div className='info-card'>
          <div className='content'>
            <h1>{title}</h1>
            <div className='badges'>
              {badges.map((badge, i) => (
                <span key={badge+i}>
                  {badge}
                </span>
              ))}
            </div>
            <p>
              {
                description.split("\n").map(paragraph => 
                  <>
                    {paragraph}<br/><br/>
                  </>
                )
              }
            </p>
          </div>
          <div className='buttons'>
            <Button to='/cotizar' color='#6537C7'>Pedir cotización</Button>
            <Button to='/' color='#464646'>Contactar</Button>
          </div>
        </div>
      </section>
      <section className='changes'>
        <hr />
        <h2>¿Qué se puede modificar?</h2>
        <ul>
          {changes.map((change, i)=>(
            <li key={change+i}>
              {change}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Product;