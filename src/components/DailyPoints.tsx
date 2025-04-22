import { DailyPointsProps } from "../common/types";
const calculatePoints = (seasonStart: string) => {
  const start = new Date(seasonStart);
  const today = new Date();
  const dayOfSeason =
    Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  let points = 0;
  if (dayOfSeason === 1) {
    points = 2;
  } else if (dayOfSeason === 2) {
    points = 3;
  } else {
    let prev2 = 2;
    let prev1 = 3;
    for (let i = 3; i <= dayOfSeason; i++) {
      points = Math.round(prev2 + 0.6 * prev1);
      prev2 = prev1;
      prev1 = points;
    }
  }

  return points > 1000 ? `${Math.round(points / 1000)}K` : points.toString();
};

const DailyPoints: React.FC<DailyPointsProps> = ({ seasonStart }) => {
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="px-6 py-4 text-left">
          <div className="font-bold text-xl mb-2">Daily Points</div>
          <p className="text-gray-500 text-base">
            {calculatePoints(seasonStart)}
          </p>
        </div>
      </div>
    </>
  );
};

export default DailyPoints;
