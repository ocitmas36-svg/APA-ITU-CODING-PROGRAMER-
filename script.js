let chart;

const data = {
  javascript: {
    title: "JavaScript",
    desc: `
<h3>Level 1 – Pengenalan</h3>
JavaScript dibuat oleh Brendan Eich (1995) untuk membuat web interaktif.

<h3>Level 2 – Dasar</h3>
Variabel, function, DOM, event, loop.

<h3>Level 3 – Lanjutan</h3>
Framework: React, Vue, Node.js.

<h3>Level 4 – Profesional</h3>
Digunakan frontend & backend, peluang kerja sangat tinggi.

<pre>let nama = "Programmer";
console.log(nama);</pre>
`,
    chart: [90, 60, 85, 80]
  },

  python: {
    title: "Python",
    desc: `
<h3>Level 1</h3>
Dibuat Guido van Rossum (1991), mudah dibaca.

<h3>Level 2</h3>
If, loop, function, list, dictionary.

<h3>Level 3</h3>
AI, Data Science, Django, Flask.

<h3>Level 4</h3>
Sangat populer untuk AI & Machine Learning.

<pre>print("Halo Programmer")</pre>
`,
    chart: [85, 40, 90, 70]
  },

  php: {
    title: "PHP",
    desc: `
<h3>Level 1</h3>
Bahasa backend web.

<h3>Level 2</h3>
Integrasi HTML & MySQL.

<h3>Level 3</h3>
Framework Laravel.

<h3>Level 4</h3>
Banyak digunakan CMS seperti WordPress.

<pre>&lt;?php echo "Halo"; ?&gt;</pre>
`,
    chart: [75, 50, 70, 65]
  },

  java: langTemplate("Java", 80, 65, 85, 75),
  c: langTemplate("C", 70, 75, 65, 85),
  cpp: langTemplate("C++", 75, 70, 70, 90),
  csharp: langTemplate("C#", 75, 65, 75, 80),
  kotlin: langTemplate("Kotlin", 70, 60, 75, 70),
  dart: langTemplate("Dart", 65, 55, 70, 65),
  go: langTemplate("Go", 70, 60, 80, 85),
  rust: langTemplate("Rust", 65, 75, 75, 90),
  swift: langTemplate("Swift", 70, 60, 70, 75),
  ruby: langTemplate("Ruby", 60, 55, 65, 60),
  sql: langTemplate("SQL", 85, 40, 90, 70),
  r: langTemplate("R", 60, 65, 70, 65)
};

function langTemplate(name, p, k, j, f) {
  return {
    title: name,
    desc: `
<h3>Level 1</h3>
Pengenalan bahasa ${name}.

<h3>Level 2</h3>
Konsep dasar & sintaks.

<h3>Level 3</h3>
Framework & penggunaan industri.

<h3>Level 4</h3>
Digunakan secara profesional di bidang tertentu.
`,
    chart: [p, k, j, f]
  };
}

function loadLang(lang) {
  document.getElementById("content").innerHTML =
    `<h2>${data[lang].title}</h2>${data[lang].desc}`;

  if (chart) chart.destroy();
  chart = new Chart(document.getElementById("chart"), {
    type: 'bar',
    data: {
      labels: ["Popularitas", "Kesulitan", "Peluang Kerja", "Performa"],
      datasets: [{
        data: data[lang].chart
      }]
    }
  });
}

function jawab(benar) {
  document.getElementById("hasil").innerText =
    benar ? "✅ Benar! Python unggul di AI." : "❌ Salah, coba pelajari lagi.";
}
