import dayjs from "dayjs";
export function calculateBiorhyhm(birthDate, targetDate, circle) {
  const birthDay = dayjs(birthDate).startOf("day");
  const targetDay = dayjs(targetDate).startOf("day");

  const diff = targetDay.diff(birthDay, "days");
  return Math.sin((2 * Math.PI * diff) / circle);
}

export function calculateBiorhyhms(birthDate, targetDate) {
  return {
    date: targetDate,
    physical: calculateBiorhyhm(birthDate, targetDate, 23),
    emotional: calculateBiorhyhm(birthDate, targetDate, 28),
    intellectual: calculateBiorhyhm(birthDate, targetDate, 33),
  };
}

export function calculateBiorhyhmsSeries(birthDate, startDate, size) {
  const series = [];
  const startDay = dayjs(startDate).startOf("day");
  for (let i = 0; i < size; i++) {
    const targetDate = startDay.add(i, "day").toISOString();
    series.push(calculateBiorhyhms(birthDate, targetDate));
  }

  return series;
}
