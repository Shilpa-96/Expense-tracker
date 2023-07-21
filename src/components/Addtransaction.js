import React, { useContext, useState } from "react";
import { myContext } from "../context/MyContext";

export default function Addtransaction() {
  const { handleAdd } = useContext(myContext);
  const [text, setText] = useState("");
  const [amt, setAmt] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    handleAdd({ id: amt, text: text, cost: Number(amt) });
    console.log(typeof amt);
    setText("");
    setAmt(0);
  };
  return (
    <>
      <h4 className="add-title">Add new transaction</h4>
      <hr />
      <form className="add-transaction">
        <label htmlFor="text" className="text">
          Text
        </label>
        <input
          type="text"
          placeholder="Enter here"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>

        <label htmlFor="amount">
          Amount
          <br />
          (negetive-expense,positive-income)
        </label>
        <input
          type="number"
          id="amount"
          value={amt}
          onChange={(e) => setAmt(e.target.value)}
        ></input>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Add Transaction
        </button>
      </form>
    </>
  );
}
