let current=0, score=0;
const qEl=document.getElementById("question");
const optEl=document.getElementById("options");
const scoreEl=document.getElementById("score");

function loadQuiz(){
  if(current>=quizData.length){
    scoreEl.innerText=`Skor Akhir: ${score}`;
    saveXP(score);
    return;
  }
  const q=quizData[current];
  qEl.innerText=q.q;
  optEl.innerHTML="";
  q.options.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.innerText=opt;
    btn.onclick=()=>check(i);
    optEl.appendChild(btn);
  });
}
function check(ans){
  const q=quizData[current];
  if(ans===q.answer) score+=q.xp;
  current++;
  loadQuiz();
}
loadQuiz();
