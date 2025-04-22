import React from "react";
import { TransactionsListProps } from "../common/types";
import { useNavigate } from "react-router";

const formatDate = (date: string): string => {
  const transactionDate = new Date(date);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - transactionDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays < 7
    ? transactionDate.toLocaleDateString("en-US", { weekday: "long" })
    : transactionDate.toLocaleDateString("en-US");
};

const List: React.FC<TransactionsListProps> = ({ transactions }) => {
  let navigate = useNavigate();

  return (
    <>
      <h2 className="font-bold text-left">Latest transactions</h2>
      <table className="table-auto rounded-lg min-w-full bg-white  p-4">
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className="bg-transparent border-b-1 border-gray-300 text-sm"
              onClick={() => navigate(`/transaction/${tx.id}`)}
            >
              <td className="text-left ">
                <div className="ml-2">
                  <strong className="">{tx.name}</strong>
                  <p>
                    {tx.pending ? "Pending: " : ""}
                    {tx.description}
                    {formatDate(tx.date)}
                  </p>
                </div>
              </td>

              <td className="place-items-start">
                {tx.type === "Payment" ? "+" : "-"}${tx.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
