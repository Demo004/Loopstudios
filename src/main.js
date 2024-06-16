// modern-normalize
import "../style/modern-normalize.css";

// main-style
import "../style/style.css";

// components
import "../style/components/header.css";
import "../style/components/hero.css";
import "../style/components/careers.css";
import "../style/components/events.css";
import "../style/components/footer.css";

// utility
import "../style/utility.css";

// ### scroll behavior
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
