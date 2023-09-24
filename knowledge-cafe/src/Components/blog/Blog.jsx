import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog ,handleAddToBookmark,handleAddMarkRead}) => {
 const {id,title,cover,author_img,author,reading_time,posted_date,hashtags}=blog;
  return (
    <div className='mb-20'>
      <img className='w-full rounded-lg' src={cover} alt="" />
<div className='flex justify-between items-center'>
<div className='flex'>
<img className='w-14 mb-2 rounded-full' src={author_img} alt="" />
<div className='ml-6'>
  <h1 className='text-2xl my-2'> {author} </h1>
  <p>{posted_date} </p>
</div>

</div>

<div>
<span className='mr-3'> {reading_time} Min Read</span>
<button onClick={()=>handleAddToBookmark(blog)} className='text-2xl'><FaBookmark></FaBookmark> </button>
</div>
</div>

      <h1 className='text-4xl my-2 '>{title} </h1>
      <p>
        {
          hashtags.map((hash,idx)=> <span key={idx} ><a href="">#{hash}</a> </span> )
        }
      </p>
      <p onClick={()=>handleAddMarkRead(reading_time,id)} className='font-bold text-purple-800 underline mt-2 text-lg'>Mark as Read</p>

    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;
