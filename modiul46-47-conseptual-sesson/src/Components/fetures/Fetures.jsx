import React, { useEffect, useState } from 'react';
import SinglePhone from '../Singlephone/SinglePhone';

const Fetures = () => {

  const [fabourites, setFabourites] = useState([])
  const [notfound, setnofound] = useState(false)
  const [isshoow,setisshow]=useState(false)
  const [totalPrice,setTotalPrice]=useState(0)

  useEffect(() => {

    const fabouriteItems = JSON.parse(localStorage.getItem('fabourites'))
    if (fabouriteItems) {
      setFabourites(fabouriteItems)


const total = fabouriteItems.reduce((prevalue,currentValue)=> prevalue+currentValue.price,0 )
setTotalPrice(total)

    } else {
      setnofound('no found data')

    }

  }, [])

  console.log(fabourites);
// for delete all button
  const handleDeleteall = ()=>{
localStorage.clear()
setFabourites([])
setnofound('no found data')
  }

  return (
    <div>

      {notfound ? <p className='text-6xl font-bold  flex justify-center items-center h-[80vh]'> {notfound} </p> : <div>
<div className='text-center'> total price {totalPrice} </div>

{
  fabourites.length > 0 && <button className='text-3xl  mt-9 ml-28 bg-slate-300 p-3 rounded-lg'  onClick={handleDeleteall} >Delete all</button>
}

<div className='grid grid-cols-3 gap-4'>
{
isshoow ? fabourites.map(phone=> <SinglePhone key={phone.id} phone={phone} ></SinglePhone> ) : 
fabourites.slice(0,2).map(phone=> <SinglePhone key={phone.id} phone={phone} ></SinglePhone> )

}
</div>

{
  fabourites.length > 2 && <button className='text-3xl  mt-9 ml-28 bg-slate-300 p-3 rounded-lg'  onClick={()=> setisshow(!isshoow) } >{isshoow?"see less" : "see more" }</button> 
}


      </div>}


    </div>
  );
};

export default Fetures;