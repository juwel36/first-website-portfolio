import { Link } from "react-router-dom";


const PhoneCard = ({phone}) => {

  const { id, phone_name, brand_name, rating, price, image } = phone || {};

  return (
    <div>
     
     <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {brand_name}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
           {rating}
          </p>
        </div>
        <div className="p-6 pt-0">
          {/* 1st */}
<Link to={`/phones/${id}`}><button className=" bg-gray-200 p-2 rounded-lg w-full">See Details</button></Link>
        </div>
      </div>

    </div>
  );
};

export default PhoneCard;