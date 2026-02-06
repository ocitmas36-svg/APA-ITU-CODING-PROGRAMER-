document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("lang");

  const container = document.getElementById("lang-content");
  if (!key || !languages[key]) {
    container.innerHTML = "<h2>Bahasa tidak ditemukan</h2><a href='index.html'>⬅ Kembali</a>";
    return;
  }

  const d = languages[key];

  container.innerHTML = `
    <h1>${d.name}</h1>
    <p><b>Asal Usul:</b> ${d.origin}</p>
    <p>${d.description}</p>

    <h3>Materi:</h3>
    <ul>${d.materi.map(m => `<li>${m}</li>`).join("")}</ul>

    <h3>Popularitas</h3>
    <div class="progress-box">
      <div class="progress-bar" style="width:${d.level}%">${d.level}%</div>
    </div>

    <br>
    <a class="btn" href="index.html">⬅ Kembali</a>
  `;
});
