const Count = ({ count }) => {
  return (
    <div className="row g-0 mt-3">
      <div className="col-md-6 offset-md-3 text-center">
        <p className="h1 text-10">{count.toString().substr(0, 4)}</p>
      </div>
    </div>
  );
};

export default Count;
