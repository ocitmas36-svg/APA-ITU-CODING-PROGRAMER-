function saveProgress(langId){
  localStorage.setItem("progress-"+langId,true);
}

function updateProgress(langId){
  const bar = document.getElementById("progressBar");
  const done = localStorage.getItem("progress-"+langId);
  bar.style.width = done ? "100%" : "0%";
  bar.innerText = done ? "100%" : "0%";
}
