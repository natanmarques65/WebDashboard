import { PieChart, Pie, Cell } from "recharts";
import { tv, VariantProps } from "tailwind-variants";

const gauge = tv({
  base: "relative flex justify-center",
});

export type GaugeChartProps = VariantProps<typeof gauge> & {
  value: number;
  label: string;
};

const GaugeChart = ({ value, label = "", ...props }: GaugeChartProps) => {
  const data = [
    { name: "filled", value },
    { name: "empty", value: 100 - value },
  ];

  return (
    <div className={gauge({})} {...props}>
      <div>
        <PieChart width={330} height={180}>
          <defs>
            <linearGradient
              id="gaugeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="red" />
              <stop offset="100%" stopColor="green" />
            </linearGradient>
          </defs>

          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            <Cell key="filled" fill="url(#gaugeGradient)" />
            <Cell key="empty" fill="#e0e0e0" />
          </Pie>
        </PieChart>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="text-sm">{label}</p>
          <p className="text-2xl font-bold">{value}%</p>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
