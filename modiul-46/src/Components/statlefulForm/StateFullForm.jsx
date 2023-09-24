import { useState } from "react";


const StateFullForm = () => {

  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)
  const [error, seterror] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      seterror('password must be 6 charecter Longer')
    }
    else {
      seterror('');
    }
    console.log(email, password);
  }

  const handleEmailChange = e => {
    console.log(e.target.value);
    setemail(e.target.value)
  }

  const hanleePasswordChang = e => {
    setpassword(e.target.value)
  }


  return (
    <div>


      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input onChange={hanleePasswordChang} type="password" name="password" />

        <br />
        <input type="submit" value="submit" />


        {
          error && <p>{error}</p>
        }
      </form>


    </div>
  );
};

export default StateFullForm;