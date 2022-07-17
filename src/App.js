import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { actions } from "./state/index";

function App() {
  const [input, setInput] = useState("");
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    console.log("inside the increment function", counter);
    dispatch(actions.increment());
  };

  document.body.style.background = "black";

  const decrement = () => {
    dispatch(actions.decrement());
    console.log("Inside the decrement function", counter);
  };

  const changed = (event) => {
    setInput(event.target.value);
    console.log("HHSHSH", input);
  };

  const addBy = () => {
    dispatch(actions.addBy(Number(input)));
  };

  return (
    <div style={{ background: "black" }}>
      <div className="main-div">
        <h1
          style={{
            color: "white",
            background: "black",
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Hey
        </h1>
        <h3 style={{ color: "white", alignSelf: "center" }}>{counter}</h3>
        <input
          type="text"
          id="inputValue"
          placeholder="Enter a value"
          onChange={changed}
          style={{
            padding: "8px",
            border: "1px solid blue",
            borderRadius: "10px",
            alignSelf: "center",
          }}
        />
        <div className="btn-div">
          <button
            onClick={increment}
            style={{
              padding: "0.5rem",
              color: "white",
              background: "green",
              borderRadius: "4px",
              margin: "5px",
              alignSelf: "center",
            }}
          >
            Increment
          </button>
          <button
            onClick={decrement}
            style={{
              padding: "0.5rem",
              color: "white",
              background: "red",
              borderRadius: "4px",
              margin: "5px",
              alignSelf: "center",
            }}
          >
            Decrement
          </button>
          <button
            onClick={addBy}
            style={{
              padding: "0.5rem",
              color: "white",
              background: "blue",
              borderRadius: "4px",
              margin: "5px",
              alignSelf: "center",
            }}
          >
            Add amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
