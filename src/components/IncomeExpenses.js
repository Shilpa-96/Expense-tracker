import React, { useContext } from "react";
import { myContext } from "../context/MyContext";

export default function IncomeExpenses() {
  const { transactions } = useContext(myContext);
  let expense = 0;
  let income = 0;
  transactions.map((item) => {
    if (item.cost > 0) {
      income += item.cost;
    } else {
      expense += item.cost;
    }
  });
  return (
    <div className="income-expense">
      <div>
        <h3>Income</h3>
        <p className="income">+${income}</p>
      </div>
      <div>
        <h3>Expense</h3>
        <p className="expense">-${Math.abs(expense)}</p>
      </div>
    </div>
  );
}
