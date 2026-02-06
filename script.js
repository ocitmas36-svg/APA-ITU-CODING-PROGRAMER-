document.addEventListener("DOMContentLoaded", () => {
  initLangPage();
});

function initLangPage() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");

  if (!lang) return;

  const data = languages[lang];
  if (!data) {
    document.body.innerHTML = "<h2>Bahasa tidak ditemukan</h2>";
    return;
  }

  renderLanguage(data);
}
