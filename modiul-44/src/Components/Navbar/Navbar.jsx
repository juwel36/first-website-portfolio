import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';


const Navbar = () => {
   
  const [open,setOpen]=useState(false)

  const routes = [
    {
      id: 1,
      path: '/',
      name: 'Home'
    },
    {
      id: 2,
      path: '/about',
      name: 'About'
    },
    {
      id: 3,
      path: '/services',
      name: 'Services'
    },
    {
      id: 4,
      path: '/contact',
      name: 'Contact'
    },
    {
      id: 5,
      path: '/dashboard',
      name: 'Dashboard'
    }
  ];
 


  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
{
  open===true ? <AiOutlineClose></AiOutlineClose>
  :
  <AiOutlineMenu></AiOutlineMenu>
}
      </div>

   
<ul className={` md:flex absolute md:static duration-1000
${open ? 'top-7' : '-top-60' }
bg-slate-500 p-1`}>
{
  routes.map(route=>  <Link key={route.id} route={route}></Link>)
}

</ul>


      
    </nav>
  );
};

export default Navbar;