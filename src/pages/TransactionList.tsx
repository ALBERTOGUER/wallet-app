import CardBalance from "../components/CardBalance";
import DailyPoints from "../components/DailyPoints";
import PaymentsDue from "../components/PaymentsDue";
import List from "../components/List";
import { TransactionDetailProps } from "../common/types";

function getCurrentSeasonStart(currentDate: Date) {
  const year = currentDate.getFullYear();

  const seasons = [
    { name: "Spring", start: new Date(year, 2, 20) }, // March 20
    { name: "Summer", start: new Date(year, 5, 21) }, // June 21
    { name: "Autumn", start: new Date(year, 8, 22) }, // September 22
    { name: "Winter", start: new Date(year, 11, 21) }, // December 21
  ];

  seasons.sort((a: any, b: any) => a.start - b.start);

  let currentSeason = seasons[seasons.length - 1];
  for (let i = 0; i < seasons.length; i++) {
    if (currentDate < seasons[i].start) {
      currentSeason = seasons[i - 1];
      break;
    }
  }

  if (!currentSeason) {
    currentSeason = seasons[seasons.length - 1];
    currentSeason.start.setFullYear(year - 1);
  }

  return String(currentSeason.start);
}

const TransactionList: React.FC<TransactionDetailProps> = ({
  transactions,
}) => {
  const currentDate = new Date();
  const seasonStart = getCurrentSeasonStart(currentDate);
  return (
    <>
      <div className="grid gap-2 grid-cols-2">
        <div className="grid gap-2">
          <CardBalance balance={500} limit={1500} />
          <DailyPoints seasonStart={seasonStart} />
        </div>
        <PaymentsDue />
      </div>
      <List transactions={transactions} />
    </>
  );
};

export default TransactionList;
