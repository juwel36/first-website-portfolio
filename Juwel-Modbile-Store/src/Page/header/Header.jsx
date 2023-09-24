import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
      
      <div className="">
      <nav className="flex justify-between items-center py-4 shadow-md px-5">

          <h1 className="text-3xl font-bold" > <span className="text-[#186dee]">J</span> <span className="text-[#db4733]">u</span> <span className="text-[#ffc118]">w</span> <span className="text-[#186dee]">e</span> <span className="text-[#009955]">L</span>
          <span className="text-xs font-thin pl-3">store</span>
          </h1>

          
        <div>
        </div>

        <ul className="flex gap-5 font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-700 underline" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-700 underline" : ""
              }
            >
              Cart
            </NavLink>

            
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-700 underline" : ""
              }
            >
              Login
            </NavLink>

            
          </li>
        </ul>

      </nav>
    </div>

    </div>
  );
};

export default Header;