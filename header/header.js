let heroImage = "./assets/investing.jpg";

export function header() {
  document.querySelector("header").innerHTML = `
    <div class="header-container">
      <div class="top-bar">
        <div class="logo">Assets Tracker</div>
        <nav class="navigation">
          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div class="controls">
          <button id="theme-toggle">
            <span id="theme-icon">🌙</span>
          </button>
          <button class="hamburger">☰</button>
          </div>
      </div>
      <div class="hero">
        <img src="${heroImage}" alt="Investment Hero Image">
        <div class="hero-text">
          <h2>Track your stocks & crypto in real-time</h2>
        </div>
      </div>
    </div>
  `;
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      //console.log("hamburger clicked");
    });
  });

  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    themeIcon.textContent = isDarkMode ? "☀️" : "🌙";
    //console.log("Dark mode:", isDarkMode ? "Enabled" : "Disabled");
  });
}
