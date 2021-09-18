import { useRef, useState, useEffect } from "react";
import Count from "components/Count";
import Buttons from "components/Buttons";
import Hints from "components/Hints";

const App = () => {
  const mainDiv = useRef(null);
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const keyboardHandler = (e) => {
    let key = e.key.toLowerCase();
    switch (key) {
      case " ":
        setIsCounting((prevCount) => !prevCount);
        break;
      case "0":
      case "e":
        resetTimer();
        break;
      default:
        break;
    }
  };

  const timerHandler = (e) => {
    mainDiv.current.focus();
    switch (e.target.name) {
      case "timerStart":
        setIsCounting(true);
        break;
      case "timerStop":
        setIsCounting(false);
        break;
      case "timerReset":
        resetTimer();
        break;
      default:
        break;
    }
  };

  const resetTimer = () => {
    setIsCounting(false);
    setTimeout(() => setCount(0), 10);
  };

  useEffect(() => mainDiv.current.focus());

  // eslint-disable-next-line
  useEffect(() => document.addEventListener("keyup", keyboardHandler), []);

  useEffect(() => {
    if (isCounting) {
      setTimeout(() => setCount((prevCount) => prevCount + 0.01), 10);
    }
  }, [count, isCounting]);

  return (
    <div>
      <div ref={mainDiv} tabIndex={0} />
      <div className="container">
        <Count count={count} />
        <Buttons timerHandler={timerHandler} />
        <Hints />
      </div>
    </div>
  );
};

export default App;
