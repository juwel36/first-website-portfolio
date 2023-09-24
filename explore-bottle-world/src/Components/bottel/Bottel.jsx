import PropTypes from 'prop-types';
import './bottel.css'

const Bottel = ({bottle,handleAddToCart}) => {

const{name,price,img} =bottle;
// console.log(bottle);
  return (
    <div className='bottel'>
      <h4>Products Name:{name} </h4>
<img src={img} alt="" />
<p>Price : {price} </p>
<button onClick={()=>handleAddToCart(bottle)}>Purchecs</button>
    </div>
  );
};

Bottel.propTypes = {
  bottle: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired
};

export default Bottel;