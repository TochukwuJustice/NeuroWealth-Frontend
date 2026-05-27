import { randomInt } from "./seeded-rng";

// Mock data for chart examples
export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Line/Area chart data: Portfolio value over time
export const portfolioValueData: ChartDataPoint[] = months.map((month, i) => {
  const baseValue = 10000 + (i * 450);
  const noise = randomInt(-300, 300);
  return {
    name: month,
    value: baseValue + noise,
    yield: randomInt(80, 450)
  };
});

// Bar chart data: Monthly yield
export const monthlyYieldData: ChartDataPoint[] = portfolioValueData.map(p => ({
  name: p.name,
  value: p.yield
}));

// Donut chart data: Asset allocation
export const assetAllocationData: ChartDataPoint[] = [
  { name: "USDC", value: randomInt(35, 50), tone: "primary" },
  { name: "USDT", value: randomInt(20, 30), tone: "accent" },
  { name: "XLM", value: randomInt(15, 25), tone: "warning" },
  { name: "Other", value: randomInt(5, 15), tone: "neutral-strong" },
];

// Time series data for multiple lines
export const multiLineData = months.map((month, i) => {
  const portfolio = portfolioValueData[i].value;
  const benchmarkBase = 9800 + (i * 400);
  return {
    name: month,
    portfolio,
    benchmark: benchmarkBase + randomInt(-200, 200)
  };
});

// Categorical bar data
export const categoricalBarData: ChartDataPoint[] = [
  { name: "Deposits", value: randomInt(12000, 18000) },
  { name: "Withdrawals", value: randomInt(2000, 5000) },
  { name: "Yield", value: randomInt(2000, 3500) },
  { name: "Fees", value: randomInt(100, 300) },
];
