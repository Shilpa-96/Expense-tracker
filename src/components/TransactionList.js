import React, { useContext } from "react";
import { myContext } from "../context/MyContext";

export default function TransactionList() {
  const { transactions, handleDelete } = useContext(myContext);
  return (
    <>
      <h4>History</h4>
      <hr />
      <div className="transaction-list">
        {transactions.map((item) => {
          return (
            <div key={item.id}>
              <div
                className={
                  item.cost > 0
                    ? "green transaction-items"
                    : "red transaction-items"
                }
              >
                <span>{item.text}</span>
                <span>{item.cost}</span>
              </div>
              <div className="del-btn">
                <button onClick={() => handleDelete(item.id)}>&times;</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
