export function showInformation(binanceData = [], twelveData = []) {
  const container = document.getElementById("info-container");
  container.innerHTML = "";

  const stockSection = document.createElement("section");
  stockSection.id = "stock-section";
  stockSection.innerHTML = `<h2>Stock Market</h2>`;

  const cryptoSection = document.createElement("section");
  cryptoSection.id = "crypto-section";
  cryptoSection.innerHTML = `<h2>Crypto Market</h2>`;

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

  twelveData.forEach(({ symbol, price, source }) => {
    const card = createCard(symbol, price, source);
    stockSection.appendChild(card);
  });

  binanceData.forEach(({ symbol, price, source }) => {
    const card = createCard(symbol, price, source);
    cryptoSection.appendChild(card);
  });

  container.appendChild(stockSection);
  container.appendChild(cryptoSection);
}
