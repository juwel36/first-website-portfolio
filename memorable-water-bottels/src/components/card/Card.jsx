import './card.css'
import PropTypes from 'prop-types'; 

const Card = ({ cart,handleRemoveFromCart }) => {
  return (
    <div>
      <h3>Cart:{cart.length} </h3>
      <div className="card">
        {
cart.map(bottle=> <div  key={bottle.id}>
<img  src={bottle.img} alt="" />
<div> <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button> </div>
</div>  )
        }
      </div>
    </div>
  );
};

Card.PropTypes={
cart:PropTypes.array.isRequired

}

export default Card;