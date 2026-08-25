const USD_TO_INR = 83;

export function formatINR(usdPrice) {
  const inr = Math.round(usdPrice * USD_TO_INR);
  return inr.toLocaleString("en-IN");
}
