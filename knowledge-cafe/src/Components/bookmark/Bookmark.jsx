import BookAdd from "../Bookadd/BookAdd";


const Bookmark = ({bookmarks,addTime}) => {
  return (
    <div className="w-1/3">
      <div>
        <p className="text-2xl bg-purple-700 text-white m-2 rounded-lg p-3">Reading Time : {addTime} </p>
      </div>
      <h2 className="text-3xl p-3">Book mark : {bookmarks.length} </h2>
      {
        bookmarks.map(bookmark=> <BookAdd key={bookmark.id} bookmark={bookmark} > </BookAdd> )
      }
     
    </div>
  );
};

export default Bookmark;