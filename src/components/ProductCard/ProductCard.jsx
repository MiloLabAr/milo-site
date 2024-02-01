import Button from '../Button/Button';
import './ProductCard.scss'
import { BsEyeFill } from "react-icons/bs";


function ProductCard({ children, title, description, badges=[], vertical, id}) {
  return (
    <div className={`product-card ${vertical ? 'vertical' : ''}`}>
          <h3>{title}</h3>
          <p>{description}</p>
          {children}
          <div className='badges'>
            {badges.map(badge => <span key={badge}>{badge}</span>)}
          </div>
        <div className='button-container'>
          <Button rounded color='#6537C7' to={'/product/'+id} hoverColor='#46278a'><p>Ver</p><BsEyeFill/></Button>
        </div>
    </div>
  )
}

export default ProductCard;