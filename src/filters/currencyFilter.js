export default function currencyFilter(value, currency = "BYN") {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency,
  }).format(value);
}
