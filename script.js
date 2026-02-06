let chart;

/* ======================
   DATA BAHASA
====================== */
const data = {
  javascript: langFull(
    "JavaScript",
    "Dibuat Brendan Eich (1995), bahasa utama web interaktif.",
    "Variabel, function, DOM, event.",
    "React, Vue, Node.js.",
    "Frontend & backend, peluang kerja tinggi.",
    `let nama = "Programmer"; console.log(nama);`,
    [90,60,85,80]
  ),

  python: langFull(
    "Python",
    "Dibuat Guido van Rossum (1991).",
    "Sintaks sederhana, cocok pemula.",
    "AI, Data Science, Django.",
    "Sangat kuat untuk AI & data.",
    `print("Halo Programmer")`,
    [85,40,90,70]
  ),

  php: langFull(
    "PHP",
    "Bahasa backend web.",
    "Integrasi HTML & MySQL.",
    "Framework Laravel.",
    "Digunakan CMS seperti WordPress.",
    `<?php echo "Halo"; ?>`,
    [75,50,70,65]
  )
};

/* TEMPLATE BAHASA LAIN */
["java","c","cpp","csharp","kotlin","dart","go","rust","swift","ruby","sql","r"]
.forEach(b => {
  data[b] = langFull(
    b.toUpperCase(),
    "Pengenalan & sejarah singkat.",
    "Konsep dasar & sintaks.",
    "Penggunaan industri.",
    "Karier profesional.",
    "",
    [70,60,70,70]
  );
});

function langFull(name,l1,l2,l3,l4,code,chartData){
  return {
    title:name,
    desc:`
<h3>Level 1</h3>${l1}
<h3>Level 2</h3>${l2}
<h3>Level 3</h3>${l3}
<h3>Level 4</h3>${l4}
${code ? `<pre>${code}</pre>` : ""}
`,
    chart:chartData
  };
}

function loadLang(lang){
  document.getElementById("content").innerHTML =
    `<h2>${data[lang].title}</h2>${data[lang].desc}`;

  if(chart) chart.destroy();
  chart = new Chart(document.getElementById("chart"),{
    type:"bar",
    data:{
      labels:["Popularitas","Kesulitan","Peluang Kerja","Performa"],
      datasets:[{data:data[lang].chart}]
    }
  });
}

/* ======================
   QUIZ SKOR
====================== */
const quiz = [
  {q:"Bahasa AI paling populer?",o:["Python","PHP","C"],c:0},
  {q:"Bahasa utama web?",o:["Java","JavaScript","C++"],c:1},
  {q:"Bahasa backend populer?",o:["PHP","Swift","Rust"],c:0},
  {q:"Bahasa database?",o:["SQL","Go","C"],c:0}
];

let qi=0,score=0;

function startQuiz(){
  qi=0; score=0;
  showQ();
}

function showQ(){
  const q=quiz[qi];
  document.getElementById("question").innerText=q.q;
  const a=document.getElementById("answers");
  a.innerHTML="";
  q.o.forEach((x,i)=>{
    const b=document.createElement("button");
    b.innerText=x;
    b.onclick=()=>ans(i);
    a.appendChild(b);
  });
}

function ans(i){
  if(i===quiz[qi].c) score++;
  qi++;
  document.getElementById("progressBar").style.width=
    (qi/quiz.length*100)+"%";
  qi<quiz.length ? showQ() : finish();
}

function finish(){
  const hasil=Math.round(score/quiz.length*100);
  document.getElementById("question").innerText="Quiz Selesai";
  document.getElementById("answers").innerHTML="";
  document.getElementById("scoreText").innerText="Skor: "+hasil+"%";
  document.getElementById("badge").innerText=
    hasil>=80?"🟣 Mahir":hasil>=60?"🔵 Menengah":"🟢 Pemula";
}
