import  { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SinglePhone from "../Singlephone/SinglePhone";

const Phone = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  const Phones = useLoaderData();

  useEffect(() => {
    const findPhone = Phones?.find((phoneItem) => phoneItem.id === id);

    setPhone(findPhone);
  }, [id,phone]);

  return (
    <div>
      <SinglePhone phone={phone} />
    </div>
  );
};

export default Phone;
