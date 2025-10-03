/* mostra o botão quando o HERO sai da viewport (ou seja: a partir da INTRO) */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnTop");
  const hero = document.getElementById("hero");
  if (!btn || !hero) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // se o hero NÃO estiver mais visível -> mostrar botão
        if (!entry.isIntersecting) {
          btn.classList.add("show");
        } else {
          btn.classList.remove("show");
        }
      });
    },
    { root: null, threshold: 0 }
  );

  observer.observe(hero);
});
