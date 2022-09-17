import { calculateBiorhyhms } from "./calculation";

it("calculates the physical biorhyhm", () => {
  const { physical } = calculateBiorhyhms("1996-03-15", "2022-09-16");
  expect(physical).toBeCloseTo(-0.5196);
});

it("calculates the emotional biorhyhm", () => {
  const { emotional } = calculateBiorhyhms("1996-03-15", "2022-09-16");
  expect(emotional).toBeCloseTo(-1.0);
});
it("calculates the intellectual biorhyhm", () => {
  const { intellectual } = calculateBiorhyhms("1996-03-15", "2022-09-16");
  expect(intellectual).toBeCloseTo(0.7557);
});
