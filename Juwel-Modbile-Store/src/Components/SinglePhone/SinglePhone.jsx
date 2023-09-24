import swal from 'sweetalert';
const SinglePhone = ({phone}) => {

  const { id, phone_name, brand_name, price, image } = phone || {};

const backHOme =()=>{
  window.history.back();
}

const handleAddToFabourite =()=>{
 
  const addedFabourites = [];

  const fabouriteItems = JSON.parse(localStorage.getItem('fabourite'))

if(!fabouriteItems){
addedFabourites.push(phone);
localStorage.setItem('fabourite',JSON.stringify(addedFabourites))
swal("Congress", "Boss Successfully add in cart", "success");
}else{

const isExist = fabouriteItems.find(phone=> phone.id === id )

if(!isExist){

addedFabourites.push(...fabouriteItems,phone)
localStorage.setItem("fabourite",JSON.stringify(addedFabourites))
}else{
  swal("Oops!", "Already added in Cart", "error");
}

}



}







  return (
    <div>
      
      <div className="flex justify-center items-center h-[60vh]">
      
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
    {brand_name}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {phone_name}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      {price}
    </p>
    <a className="inline-block" href="#">
    <button onClick={handleAddToFabourite}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add to Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
    <div>
    <button onClick={backHOme}
  className="middle none center mt-3 mr-4 rounded-lg bg-transparent py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 shadow-md shadow-pink-500/30 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true"
>
  back to home
</button>
    </div>
  </div>
</div>

    </div>

    </div>
  );
};

export default SinglePhone;