
const BookAdd = ({bookmark}) => {
  const {title}=bookmark;
  return (
    <div>
      <h1 className="text-xl bg-slate-200 p-3 m-3 rounded-lg"> {title} </h1>
    </div>
  );
};

export default BookAdd;