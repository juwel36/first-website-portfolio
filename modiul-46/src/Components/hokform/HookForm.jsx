// import useInputState from "../../hooks/useInputState";

import useInputState from "../../hooks/useinputstat";


const HookForm = () => {
// const [name,handlenameChange] = useInputState('rajoni')
const emailState = useInputState('roj@onigo')
const passwordState=useInputState('4344444')

const handleSubmit = e =>{
  console.log('form data',emailState.value);
  console.log('form data',passwordState.value);
e.preventDefault();

}


  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handlenameChange} type="text" name="name" />
        <br /> */}
        <input {...emailState} type="email" name="email" />
        <br />
        <input {...passwordState} type="password" name="password" />
        
        <br />
        <input type="submit" value="submit" />



      </form>



    </div>
  );
};

export default HookForm;