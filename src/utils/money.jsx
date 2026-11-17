import CurrencyFormat from "react-currency-format";

export function formatMoney(amount) {
  return (
    <CurrencyFormat
      value={amount}
      displayType="text"
      prefix="MZN "
      thousandSeparator={" "}
      decimalScale={2}
      fixedDecimalScale
    />
  );
}
