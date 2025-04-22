import React from "react";
import { Transaction, TransactionDetailProps } from "../common/types";
import { useParams } from "react-router-dom";

const TransactionDetail: React.FC<TransactionDetailProps> = ({
  transactions,
}) => {
  let { id } = useParams();
  const transaction: Transaction = transactions.filter((tx) => tx.id == id)[0];
  return (
    <>
      <h1 className="font-bold">${transaction.amount}</h1>
      <div className="text-gray-500">
        <p>{transaction.description}</p>
        <p>{transaction.date}</p>
      </div>
    </>
  );
};

export default TransactionDetail;
