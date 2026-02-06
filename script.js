const data = {
  javascript: lang("JavaScript","Bahasa web interaktif.","Dasar JS","Framework","Karier", [90,60,85,80]),
  python: lang("Python","Bahasa AI.","Sintaks mudah","Data & AI","Karier", [85,40,90,70]),
  php: lang("PHP","Backend web.","Database","Laravel","Karier", [75,50,70,65])
};

["java","c","cpp","csharp","kotlin","dart","go","rust","swift","ruby","sql","r"]
.forEach(x=>{
  data[x]=lang(x.toUpperCase(),"Pengenalan","Dasar","Industri","Karier",[70,60,70,70]);
});

function lang(t,l1,l2,l3,l4,c){
  return {
    title:t,
    html:`<h3>Level 1</h3>${l1}<h3>Level 2</h3>${l2}
          <h3>Level 3</h3>${l3}<h3>Level 4</h3>${l4}`,
    chart:c
  };
}

let chart;
function loadLang(l){
  document.getElementById("title").innerText=data[l].title;
  document.getElementById("content").innerHTML=data[l].html;

  if(chart) chart.destroy();
  chart=new Chart(document.getElementById("chart"),{
    type:"bar",
    data:{
      labels:["Popularitas","Kesulitan","Peluang","Performa"],
      datasets:[{data:data[l].chart}]
    }
  });
}

/* QUIZ */
const quiz=[
  {q:"Bahasa AI?",o:["Python","PHP","C"],c:0},
  {q:"Web?",o:["JS","Java","C"],c:0},
  {q:"Database?",o:["SQL","Go","Rust"],c:0}
];
let i=0,s=0;

function startQuiz(){i=0;s=0;show();}
function show(){
  q=quiz[i];
  question.innerText=q.q;
  answers.innerHTML="";
  q.o.forEach((x,j)=>{
    let b=document.createElement("button");
    b.innerText=x;
    b.onclick=()=>ans(j);
    answers.appendChild(b);
  });
}
function ans(j){
  if(j===quiz[i].c)s++;
  i++;
  progressBar.style.width=(i/quiz.length*100)+"%";
  i<quiz.length?show():finish();
}
function finish(){
  scoreText.innerText="Skor: "+Math.round(s/quiz.length*100)+"%";
  badge.innerText=s>=2?"🔥 Mantap":"🌱 Pemula";
       }
