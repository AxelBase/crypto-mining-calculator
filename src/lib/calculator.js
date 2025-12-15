// src/lib/calculator.js
// Updated version with more professional validation error messages

/**
 * Validates the inputs.
 * @param {Object} inputs - The input values.
 * @returns {string|null} Professional error message if invalid, null if valid.
 */
export function validateInputs(inputs) {
  const fields = {
    hashRate: 'Hash Rate (MH/s)',
    difficulty: 'Network Difficulty (PH)',
    blockReward: 'Block Reward (coins)',
    coinPrice: 'Coin Price (USD)',
    powerConsumption: 'Power Consumption (watts)',
    electricityCost: 'Electricity Cost (USD/kWh)'
  };

  for (const [key, label] of Object.entries(fields)) {
    const value = inputs[key];

    if (typeof value !== 'number' || isNaN(value)) {
      return `Please enter a valid number for ${label}.`;
    }

    if (value <= 0) {
      return `${label} must be greater than zero.`;
    }
  }

  return null;
}

/**
 * Calculates the profits.
 * @param {Object} inputs - The validated input values.
 * @returns {Object} { dailyProfit, weeklyProfit, monthlyProfit } in USD, rounded to 2 decimals.
 */
export function calculateProfits(inputs) {
  const { hashRate, difficulty, blockReward, coinPrice, powerConsumption, electricityCost } = inputs;

  const hashRateHs = hashRate * 1_000_000;
  const difficultyHashes = difficulty * 1_000_000_000_000_000;
  const blocksPerSecond = hashRateHs / difficultyHashes;
  const coinsPerSecond = blocksPerSecond * blockReward;
  const dailyCoins = coinsPerSecond * 86400;
  const dailyRevenue = dailyCoins * coinPrice;

  const dailyCost = (powerConsumption / 1000) * 24 * electricityCost;
  const dailyProfit = dailyRevenue - dailyCost;

  const weeklyProfit = dailyProfit * 7;
  const monthlyProfit = dailyProfit * 30;

  // Round to 2 decimal places
  return {
    dailyProfit: Math.round(dailyProfit * 100) / 100,
    weeklyProfit: Math.round(weeklyProfit * 100) / 100,
    monthlyProfit: Math.round(monthlyProfit * 100) / 100
  };
}