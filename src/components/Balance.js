import React, { useContext } from "react";
import { myContext } from "../context/MyContext";

export default function Balance() {
  const { transactions } = useContext(myContext);
  let total = 0;
  transactions.map((item) => {
    total += item.cost;
  });
  return (
    <div>
      <p>Your balance</p>
      <h2>${total}</h2>
    </div>
  );
}
