document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const key = params.get("lang");
  if (!key || !languages[key]) return;

  const d = languages[key];
  document.getElementById("lang-content").innerHTML = `
    <h1>${d.name}</h1>
    <p><b>Asal:</b> ${d.origin}</p>
    <p>${d.desc}</p>

    <h3>Materi:</h3>
    <ul>${d.materi.map(m=>`<li>${m}</li>`).join("")}</ul>

    <div class="progress-box">
      <div class="progress-bar" style="width:${d.level}%">${d.level}%</div>
    </div>

    <br><a href="index.html" class="btn">⬅ Kembali</a>
  `;
});
