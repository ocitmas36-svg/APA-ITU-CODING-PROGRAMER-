// ===============================
// DATA BAHASA (CONTOH 3, NANTI BISA TAMBAH 15)
// ===============================
const languages = {
  python: {
    name: "Python",
    origin: "Dibuat oleh Guido van Rossum (1991)",
    description: "Python adalah bahasa pemrograman yang mudah dibaca dan sangat populer untuk AI, data, dan web.",
    level: 90,
    uses: ["AI", "Data Science", "Web", "Automation"]
  },
  javascript: {
    name: "JavaScript",
    origin: "Dibuat oleh Brendan Eich (1995)",
    description: "JavaScript adalah bahasa utama untuk web interaktif.",
    level: 85,
    uses: ["Web", "Frontend", "Backend", "Mobile"]
  },
  php: {
    name: "PHP",
    origin: "Dibuat oleh Rasmus Lerdorf (1995)",
    description: "PHP banyak digunakan untuk backend web dan server.",
    level: 75,
    uses: ["Web Backend", "CMS", "API"]
  }
};

// ===============================
// AMAN: JALAN SETELAH HTML SIAP
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const langKey = params.get("lang");

  if (!langKey) return;

  const data = languages[langKey];
  if (!data) {
    document.body.innerHTML = "<h2>Bahasa tidak ditemukan</h2>";
    return;
  }

  renderLanguage(data);
});

// ===============================
// RENDER KE HALAMAN
// ===============================
function renderLanguage(data) {
  const container = document.getElementById("lang-content");
  if (!container) return;

  container.innerHTML = `
    <h1>${data.name}</h1>
    <p><strong>Asal usul:</strong> ${data.origin}</p>
    <p>${data.description}</p>

    <h3>Digunakan untuk:</h3>
    <ul>
      ${data.uses.map(u => `<li>${u}</li>`).join("")}
    </ul>

    <h3>Tingkat Popularitas</h3>
    <div class="progress-box">
      <div class="progress-bar" style="width:${data.level}%">
        ${data.level}%
      </div>
    </div>

    <br>
    <a href="index.html" class="btn">⬅ Kembali</a>
  `;
}
