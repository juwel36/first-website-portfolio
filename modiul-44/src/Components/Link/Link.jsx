

const Link = ({route}) => {
  return (
    <div>
       <li className="mr-10 text-white hover:text-emerald-300" >
    <a href={route.path}>{route.name} </a>
  </li> 
      
    </div>
  );
};

export default Link;