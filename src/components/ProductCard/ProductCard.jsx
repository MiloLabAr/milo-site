import './ProductCard.scss'

function ProductCard({ children, title, description, badges=[], vertical }) {
  return (
    <div className={`product-card ${vertical ? 'vertical' : ''}`}>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
        <div className='badges'>
          {badges.map(badge => <span key={badge}>{badge}</span>)}
        </div>
    </div>
  )
}

export default ProductCard;