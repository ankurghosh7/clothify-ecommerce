/**
 * Calculates the percentage change between a previous value and a current value.
 * @param {number} previous - The previous value.
 * @param {number} current - The current value.
 * @returns {string} - The percentage change with an indication of up or down.
 */
export default function calculatePercentageChange(
  previous: number,
  current: number
) {
  if (previous === 0) {
    return null;
  }

  const change = ((current - previous) / previous) * 100;
  return change > 0
    ? {
        value: `${change.toFixed(0)}%`,
        isPositive: true,
      } // 2 decimal places
    : {
        value: `${Math.abs(change).toFixed(0)}%`,
        isPositive: false,
      };
}
