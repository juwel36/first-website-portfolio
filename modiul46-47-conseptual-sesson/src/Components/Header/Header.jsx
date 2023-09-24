import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
<div>
<h1 className="text-2xl font-bold text-gray-700">Sir Juwel Co.</h1>
</div>

<div>
<NavLink
  to="/"
  className={({ isActive, isPending })  => 
    isPending ? "pending" : isActive ? "active" : "text-green-400 underline px-5"
  }
>
  Home
</NavLink>
<NavLink
  to="/fetures"
  className={({ isActive, isPending })  => 
    isPending ? "pending" : isActive ? "active" : "text-green-400 underline px-5"
  }
>
Features 
</NavLink>
<NavLink
  to="/logIn"
  className={({ isActive, isPending })  => 
    isPending ? "pending" : isActive ? "active" : "text-green-400 underline px-5"
  }
>
Log In
</NavLink>



</div>


      </div>


    </div>
  );
};

export default Header;