let score = localStorage.getItem("score") || 0;
document.getElementById("q").innerText =
  "JavaScript berjalan di browser?";

function answer(v){
  if(v===1) score++;
  localStorage.setItem("score",score);
  document.getElementById("score").innerText =
    "Skor kamu: "+score;
}
