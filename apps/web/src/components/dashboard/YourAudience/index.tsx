import { Icon } from "@sozialens/ui";
import { IconsTypeRegular } from "../../../../../../packages/sozialens-ui/src/components/Icon/types";

interface StatisticsProps {
  label: string;
  icon: IconsTypeRegular;
  result: string | number;
  pastWeekPercent: number;
}

const statistics: StatisticsProps[] = [
  {
    label: "Campaigns",
    icon: "users",
    result: 23,
    pastWeekPercent: 1.3,
  },
  {
    label: "Estimated Views",
    icon: "eye-check",
    result: 10293,
    pastWeekPercent: 1.3,
  },
  {
    label: "Engagement",
    icon: "user-check",
    result: "76%",
    pastWeekPercent: 1.3,
  },
  {
    label: "Anual Views",
    icon: "arrows",
    result: 10293,
    pastWeekPercent: -1.3,
  },
];

const YourAudience = (): JSX.Element => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-[22px] mb-[17px]">
        {statistics.map((stat) => (
          <div key={stat.label} className="card p-5">
            <div className="flex items-center justify-between font-medium mb-3 gap-1">
              <div>
                <h4 className="text-base-400 text-sm">{stat.label}</h4>
                <p className="text-lg text-primary-100">{stat.result}</p>
              </div>
              <div className="w-[66px] h-[66px] rounded-[15px] bg-base-700 flex-shrink-0 flex items-center justify-center text-2xl">
                <Icon
                  name={stat.icon}
                  className="text-gradient bg-gradient-1"
                />
              </div>
            </div>
            <div className="flex items-start justify-between gap-2">
              <Icon name="trend" className="text-lg text-success-200" />
              <p className="text-xs text-base-300">
                {stat.pastWeekPercent}%{" "}
                {stat.pastWeekPercent > 0 ? "Up" : "Down"} from past week
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="card h-[449px]"></div>
    </div>
  );
};

export default YourAudience;
