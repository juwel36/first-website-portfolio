import Myself from "../MySelf/Myself";
import Sister from "../sister/Sister";

const Father = ({asset}) => {
  return (
    <div>
      <h1>Father</h1>
      <div className='border-2 p-2 m-2 flex'>
      <Myself asset={asset}></Myself>
      <Sister></Sister>
      </div>
    </div>
  );
};

export default Father;