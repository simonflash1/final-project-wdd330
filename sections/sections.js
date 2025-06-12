import { callApiBinance, fetchPrices } from "../utilities/apiCalls.js";
import { showInformation } from "../utilities/showInformation.js";

export async function sections() {
  const binanceRaw = await callApiBinance();
  const binanceData = filterTopCryptos(binanceRaw);
  // si la data ya esta en localstorage y no esta la cookie que confirma que la info esta hace mas de x tiempo llamar a la api
  // si no, llamar a la api y guardarla en localstorage y crear una cookie
  const twelveDataRaw = await fetchPrices();
  const twelveData = normalizeTwelveData(twelveDataRaw);
  // localStorage.setItem("twelveData", JSON.stringify(twelveData));

  showInformation(binanceData, twelveData);
}
function normalizeTwelveData(data) {
  const normalized = [];

  for (const [symbol, info] of Object.entries(data)) {
    if (info && info.price) {
      normalized.push({
        symbol: symbol,
        price: info.price,
        source: "Twelve Data",
      });
    }
  }

  return normalized;
}
const topCryptos = [
  "BTCUSDT",
  "ETHUSDT",
  "BNBUSDT",
  "SOLUSDT",
  "ADAUSDT",
  "XRPUSDT",
  "DOGEUSDT",
  "DOTUSDT",
  "AVAXUSDT",
  "MATICUSDT",
];

function filterTopCryptos(data) {
  return data
    .filter((item) => topCryptos.includes(item.symbol))
    .map((item) => ({
      symbol: item.symbol,
      price: item.price,
      source: "Binance",
    }));
}
