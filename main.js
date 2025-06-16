import { header } from "./header/header.js";
import { sections } from "./sections/sections.js";
import { footer } from "./footer/footer.js";


header();
// sections();
footer();
window.onload = () => {
  sections();
  setInterval(sections, 60_000);
};
