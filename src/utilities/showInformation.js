export function showInformation(binanceData = [], twelveData = []) {
  const container = document.getElementById("info-container");
  container.innerHTML = "";

  function createCard(ticker, price, source) {
    const card = document.createElement("div");
    card.className = "info-card";
    card.innerHTML = `
      <h3>${ticker}</h3>
      <p><strong>Price:</strong> $${parseFloat(price).toFixed(4)}</p>
      <p><strong>Source:</strong> ${source}</p>
    `;
    return card;
  }

  const allAssets = [
    ...binanceData,
    ...twelveData,
  ];

  allAssets.forEach(({ symbol, price, source }) => {
    if (symbol && price) {
      const card = createCard(symbol, price, source);
      container.appendChild(card);
    }
  });
}
