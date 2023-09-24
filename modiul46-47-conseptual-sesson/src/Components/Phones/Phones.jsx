import { key } from "localforage";
import PhoneCard from "../PhoneCard/PhoneCard";


const Phones = ({ phone }) => {
// console.log(phone);

  return (
    <div>
<h1 className="my-4 text-2xl text-center">All Phones</h1>
<div className="grid grid-cols-3 gap-3">
  {
    phone?.map(phone=> <PhoneCard key={phone.id} phone={phone} ></PhoneCard> )
  }
</div>
     

    </div>
  );
};

export default Phones;