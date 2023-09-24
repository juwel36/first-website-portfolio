
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/blogs/Blogs'
import Bookmark from './Components/bookmark/Bookmark'

function App() {
 const [bookmarks,setBookmarks]=useState([])
 const [addTime,setAddTIme]=useState(0)

 const handleAddToBookmark= blog =>{
  const newBookmarks=[...bookmarks,blog]
  setBookmarks(newBookmarks)
 }

 const handleAddMarkRead=(time,id)=>{
setAddTIme(addTime+time)

const remaining=bookmarks.filter(bookmark=> bookmark.id !== id)
setBookmarks(remaining)

 }

  return (
    <>
    <div className='max-w-5xl mx-auto'>
    <Header></Header>
   <div className='flex'>
<Blogs handleAddToBookmark={handleAddToBookmark} handleAddMarkRead={handleAddMarkRead}></Blogs>
<Bookmark bookmarks={bookmarks} addTime={addTime} ></Bookmark>
   </div>
    </div>
    </>
  )
}

export default App
