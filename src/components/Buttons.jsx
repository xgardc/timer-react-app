const Buttons = ({ timerHandler }) => {
  return (
    <div className="row g-0">
      <div className="col-md-8 offset-md-2 d-flex justify-content-center my-5">
        <button
          onClick={timerHandler}
          name="timerStart"
          className="btn btn-success mx-3 w-33 btn-lg py-md-4 py-sm-2 ms-0"
        >
          Başlat
        </button>
        <button
          onClick={timerHandler}
          name="timerStop"
          className="btn btn-danger  mx-3 w-33 btn-lg py-md-4 py-sm-2 m-0"
        >
          Durdur
        </button>
        <button
          onClick={timerHandler}
          name="timerReset"
          className="btn btn-primary mx-3 w-33 btn-lg py-md-4 py-sm-2 me-0"
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Buttons;
