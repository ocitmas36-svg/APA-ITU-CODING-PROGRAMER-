let score = 0;

document.getElementById("question").innerText =
  "JavaScript bisa berjalan di browser?";

function answer(isTrue) {
  if (isTrue) score++;
  document.getElementById("result").innerText =
    "Skor kamu: " + score;
}
