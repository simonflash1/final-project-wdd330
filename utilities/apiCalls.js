export async function callApiBinance() {
  try {
    const response = await fetch("https://api.binance.com/api/v3/ticker/price");

    if (!response.ok) {
      throw new Error(`Binance API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Binance data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching Binance data:", error);
  }
}

export async function fetchPrices() {
  const cache = localStorage.getItem("twelveDataCache");
  const now = Date.now();

  if (cache) {
    const { timestamp, data } = JSON.parse(cache);
    if (now - timestamp < 60_000) {
      console.log("Cache data");
      return data;
    }
  }

  try {
    const response = await fetch('https://api.twelvedata.com/price?symbol=AAPL,GOOG,MSFT,EUR/USD,USD/JPY&apikey=bdd846cec5344368ac013b7646cb9d94');
    if (!response.ok) throw new Error("Error in TwelveData API call");

    const data = await response.json();

    localStorage.setItem(
      "twelveDataCache",
      JSON.stringify({ timestamp: now, data })
    );

    return data;
  } catch (error) {
    console.error("Error with TwelveData:", error);

    if (cache) {
      const { data } = JSON.parse(cache);
      console.log("old data by error");
      return data;
    }

    return {};
  }
}