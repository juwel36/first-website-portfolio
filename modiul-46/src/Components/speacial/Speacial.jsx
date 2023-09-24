import { useContext } from "react";
import { AssetContaxt } from "../grandpa/Grandpa";


const Speacial = ({asset}) => {

const gift=useContext(AssetContaxt);

  return (
    <div>
      <p>Speacial: {asset} </p>
      <h1> also has : {gift} </h1>
    </div>
  );
};

export default Speacial;