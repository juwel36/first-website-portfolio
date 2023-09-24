

const EroorElement = () => {

const handleback =()=> {

  window.history.back();
}

  return (
    <div>
      <h1 className="text-center font-bold text-4xl mt-16">Uppppps !</h1>
      <p className="text-center  mt-9">Somthing Wrong</p>
      <div className="flex items-center justify-center mt-9">
        <button onClick={handleback} >Go Back</button>
      </div>
    </div>
  );
};

export default EroorElement;