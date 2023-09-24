import Photo from '../../src/assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 mx-4 border-b-2'>
      
      <h1 className='text-4xl '>Knowledge Cafe</h1>
<img src={Photo} alt="" />

    </div>
  );
};

export default Header;