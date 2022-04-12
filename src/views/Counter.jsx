
import { useState } from "react";
import Button from "../components/button/Button";
import Count from "../components/counter/Coun";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function Counter() {
  let [count, setCount] = useState(0);
  const countUp = () => {
    setCount((count) => count + 1);
  };
  const countDown = () => {
    setCount((count) => count - 1);
  };
  return (
    <div className="App">
      <Count styles="alert alert-success" value={count} />
      <Button
        styles="btn btn-primary mt-5 me-5 fs-5"
        value="+"
        action={countUp}
      />
      <Button
        styles="btn btn-warning mt-5 ms-5 fs-5"
        value="-"
        action={countDown}
      />
    </div>
  );
}

export default Counter;