function formatMoney(amountCents) {
   return `$${(amountCents.priceCents / 100).toFixed(2)}`
}
export default formatMoney