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

export const fetchPrices = async () => {
  try {
    const response = await fetch(
      'https://api.twelvedata.com/price?symbol=AAPL,GOOG,MSFT,EUR/USD,USD/JPY&apikey=bdd846cec5344368ac013b7646cb9d94'
    );

    if (!response.ok) {
      throw new Error(`Twelve Data API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Twelve Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching Twelve Data prices:", error);
  }
};

