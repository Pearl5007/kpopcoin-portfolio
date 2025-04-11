
const kpopGroups = [
  "BTS", "BLACKPINK", "TWICE", "EXO", "SEVENTEEN", "STRAY KIDS", "NCT", "RED VELVET",
  "ITZY", "TXT", "IVE", "NEWJEANS", "AESPA", "LE SSERAFIM", "ENHYPEN", "TREASURE",
  "G-IDLE", "BIGBANG", "SHINee", "MAMAMOO"
];

const listContainer = document.getElementById("kpop-list");

kpopGroups.forEach((group, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${group}</h3>
    <div class="coin"><i class="fa-brands fa-bitcoin"></i> Estimated KPOP Coins: ${((20 - index) * 5000).toLocaleString()}</div>
  `;
  listContainer.appendChild(card);
});
