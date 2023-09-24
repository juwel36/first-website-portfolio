// AiOutlineRight
import { AiOutlineRight} from 'react-icons/ai';

const Feature = ({feature}) => {
  return (
   <div>
     <div className="text-left flex items-center gap-2">
      <p className='text-green-500'><AiOutlineRight></AiOutlineRight> </p>
      <p>{feature}</p>
      
    </div>
    
   </div>
   
  );
};

export default Feature;