import { useEffect, useRef } from "react";

const RefFrom = () => {

  const nameRaf = useRef(null);
  const passwordRaf =useRef(null)

useEffect (()=>{
nameRaf.current.focus()
},[])

  const handleSubmit = e => {
    e.preventDefault();
    console.log(nameRaf.current.value);
    console.log(passwordRaf.current.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRaf} type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input ref={passwordRaf} type="password" name="passeord" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RefFrom;



