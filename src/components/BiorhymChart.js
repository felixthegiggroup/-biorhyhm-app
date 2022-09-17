import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import { calculateBiorhyhmsSeries } from "../calculation";
import dayjs from "dayjs";

const BiorhymChart = ({ birthDate, targetDate }) => {
  const startDate = dayjs(targetDate).subtract(15, "days").toISOString();

  //   Function to formatte
  function formatDate(toISOString) {
    return dayjs(toISOString).format("D MMM");
  }
  const data = calculateBiorhyhmsSeries(birthDate, startDate, 31).map(
    (item) => ({ ...item, date: formatDate(item.date) })
  );

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          ticks={[data[3].date, data[15].date, data[27].date]}
        />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} />
        <Line type="natural" dot={false} dataKey="physical" stroke="green" />
        <Line type="natural" dot={false} dataKey="emotional" stroke="red" />
        <Line type="natural" dot={false} dataKey="intellectual" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BiorhymChart;
