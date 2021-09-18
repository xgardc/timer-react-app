const Hints = () => {
  return (
    <div className="row g-0 mt-5">
      <div className="col-md-8 offset-md-2 opacity-100">
        <div className="d-flex flex-row justify-content-between">
          <p className="w-75 text-muted">Başlatmak veya durdurmak için:</p>
          <p className="w-25 d-inline bg-dark text-light text-center h6 py-2 align-self-center opacity-50">
            SPACE
          </p>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <p className="w-75 text-muted">Sıfırlamak için:</p>
          <p className="w-25 d-inline bg-dark text-light text-center h6 py-2 align-self-center opacity-50">
            E veya 0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hints;
