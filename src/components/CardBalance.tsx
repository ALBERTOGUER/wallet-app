import { CardBalanceProps } from "../common/types";

const CardBalance: React.FC<CardBalanceProps> = ({ balance, limit }) => {
  const available = limit - balance;
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="px-6 py-4 text-left">
          <p className="text-gray-500 font-semibold text-base">Card balance</p>
          <div className="font-bold text-xl mb-2">${balance}</div>
          <p className="text-gray-500 text-base">${available} Available</p>
        </div>
      </div>
    </>
  );
};

export default CardBalance;
