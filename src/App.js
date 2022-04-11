import "./App.css";
import Counter from "./components/counter/Counter";
import { useState } from "react";
import Button from "./components/button/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let [count, setCount] = useState(0);
  const countUp = () => {
    setCount((count) => count + 1);
  };
  const countDown = () => {
    setCount((count) => count - 1);
  };
  return (
    <div className="App">
      <Counter styles="alert alert-success" value={count} />
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

export default App;
