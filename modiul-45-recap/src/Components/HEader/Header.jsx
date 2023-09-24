import { Link, NavLink } from "react-router-dom";
// import './Heeader.css'
import './Heeader.css'

const Header = () => {
  return (
    <div className=" border-b-4 pb-4 mb-10">
<nav>
   
<NavLink className="mr-4" to="/">Home </NavLink>
<NavLink className="mr-4" to ="/about" > About Us</NavLink>
<NavLink className="mr-4" to ="/contact"  > Contacts us</NavLink>
<NavLink to="/users" > Users</NavLink>

  
  </nav>    



    </div>
  );
};

export default Header;