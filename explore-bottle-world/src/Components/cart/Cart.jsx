import PropTypes from 'prop-types';
import './cart.css'


const Cart = ({cart,handleRemoveFromCart}) => {
  return (
    <div>
      <h3>Cart: {cart.length} </h3>
      <div className="cart">
        {
          cart.map(bottle=> 
            <div key={bottle.id}> <img  src={bottle.img} alt="" />
            <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
             </div>
            )
        }
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,

};

export default Cart;