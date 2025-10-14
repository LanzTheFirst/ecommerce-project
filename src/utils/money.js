export function formatMoney(amountCents) {
  const value = Number(amountCents);

  // Defensive check
  if (isNaN(value)) return "$0.00";

  // Divide by 100 because price is stored in cents
  return `$${(value / 100).toFixed(2)}`;
}
