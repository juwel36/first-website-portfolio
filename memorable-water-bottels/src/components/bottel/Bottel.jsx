import './bottel.css'


const Bottel = ({bottel,handleAddtoCart}) => {
const {name,price,img,seller}=bottel;

  return (
    <div className="bottel">
      <img src={img} alt="" />
      <h3>Bottel Name: {name} </h3>
      <h3>Price:{price} </h3>
      <p>Seller Name:{seller} </p>
      <button onClick={()=>handleAddtoCart(bottel)}>Purchecs</button>
    </div>
  );
};

export default Bottel;