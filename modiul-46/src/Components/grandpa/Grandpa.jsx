import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import Father from "../father/Father";


export const AssetContaxt= createContext('Diamond');

const Grandpa = () => {
const asset = "gold";

  return (
    <div className='border-2 m-1 p-1'>
      <h1 >Grandpa</h1>

<AssetContaxt.Provider value='Diamond'>
<div className='border-2 p-2 m-2 grid grid-cols-3 '>
<Father asset={asset}></Father>
<Aunty></Aunty>
<Uncle></Uncle>
</div>
</AssetContaxt.Provider>

    </div>
  );
};

export default Grandpa;