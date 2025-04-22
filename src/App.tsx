import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Transaction, TransactionJson } from "./common/types";
import TransactionList from "./pages/TransactionList";
import TransactionDetail from "./pages/TransactionDetail";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const fetchingTransaction = async () => {
      try {
        let res = await fetch("/data.json");
        let data: TransactionJson = await res.json();
        setTransactions(data.transactions);
        const totalBalance = data.transactions
          .filter((tx: Transaction) => tx.type === "Credit")
          .reduce((sum: number, tx: Transaction) => sum + tx.amount, 0);
        setBalance(totalBalance);
      } catch (e) {}
    };
    fetchingTransaction();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TransactionList transactions={transactions} />}
        />
        <Route
          path="/transaction/:id"
          element={<TransactionDetail transactions={transactions} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
