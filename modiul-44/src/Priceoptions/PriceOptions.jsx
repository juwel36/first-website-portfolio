import { useState } from "react";
import PriceOption from "./priceoption/PriceOption";
import { BallTriangle} from  'react-loader-spinner'

const PriceOptions = () => {
  // const [loading,setLoading]=useState(true)

  const priceoptions=  [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": "$30 ",
      "features": [
        "Access to gym facilities",
        "Cardio and strength training equipment",
        "Locker room access",
        "Group fitness classes (limited)"
      ]
    },
    {
      "id": 2,
      "name": "Silver Membership",
      "price": "$50 ",
      "features": [
        "Full access to gym facilities",
        "Cardio and strength training equipment",
        "Locker room access with towel service",
        "Unlimited group fitness classes",
        "Personalized fitness assessment"
      ]
    },
    {
      "id": 3,
      "name": "Gold Membership",
      "price": "$80",
      "features": [
        "All Silver Membership features",
        "Access to sauna and spa facilities",
        "Nutritional consultation",
        "Discounts on personal training sessions"
      ]
    },
    {
      "id": 4,
      "name": "Family Membership",
      "price": "$120 ",
      "features": [
        "Access for the whole family",
        "Cardio and strength training equipment",
        "Locker room access with towel service",
        "Unlimited group fitness classes",
        "Personalized fitness assessment for each family member"
      ]
    }
  ]
  

  return (
    <div>
<div>
<h2 className="text-3xl py-4 text-center">Best Prices in the Town </h2>
<div className="grid  md:grid-cols-3 gap-4  ">
{/* <div>
  {
    loading && <div>
      <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
    </div>
  }
</div> */}
{
  priceoptions.map(option=> <PriceOption key={option.id} option={option} ></PriceOption> )
}
</div>
</div>




      
    </div>
  );
};

export default PriceOptions;