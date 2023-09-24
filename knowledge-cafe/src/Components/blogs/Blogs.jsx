import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddToBookmark,handleAddMarkRead}) => {
const [blogs,setBlogs]=useState([])

useEffect(()=>{
fetch('blogs.json')
.then(res=> res.json())
.then(data=> setBlogs(data))
},[])

  return (
    <div className="w-2/3">
      <h1>Blogs {blogs.length} </h1>
      {
blogs.map(blog => <Blog
   key={blog.id}
    blog={blog} 
    handleAddToBookmark={handleAddToBookmark}
    handleAddMarkRead={handleAddMarkRead}
    ></Blog> )
      }

    </div>
  );
};

export default Blogs;