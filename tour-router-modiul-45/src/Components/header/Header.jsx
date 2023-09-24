import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      
      <Link className="mr-4" to="/">Home</Link>
      <Link className="mr-4" to="/about">About us</Link>
    <Link className="mr-4" to="/users">Users </Link>
      <Link  className="mr-4" to="/contact">Contact us</Link>

     
      
    </div>
  );
};

export default Header;