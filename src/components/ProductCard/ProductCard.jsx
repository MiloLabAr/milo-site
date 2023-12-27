import Button from '../Button/Button';
import './ProductCard.scss'

function ProductCard({ children, title, description, badges=[], vertical, id}) {
  return (
    <div className={`product-card ${vertical ? 'vertical' : ''}`}>
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
          <div className='badges'>
            {badges.map(badge => <span key={badge}>{badge}</span>)}
          </div>
        <div className='button-container'>
          <Button rounded color='#6537C7' to={'/producto/'+id} hoverColor='#46278a'>Ver</Button>
        </div>
    </div>
  )
}

export default ProductCard;