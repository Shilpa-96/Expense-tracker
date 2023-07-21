import "./App.css";
import Addtransaction from "./components/Addtransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { ContextProvider } from "./context/MyContext";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <Addtransaction />
    </ContextProvider>
  );
}

export default App;
