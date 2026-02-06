const params = new URLSearchParams(location.search);
const langId = params.get("lang");
const langData = languages.find(l => l.id === langId);
const langNameEl = document.getElementById("langName");
const tabContent = document.getElementById("tabContent");
const progressBar = document.getElementById("progressBar");

// Set title
if(!langData){
  langNameEl.innerText = "Bahasa tidak ditemukan";
  tabContent.innerHTML = "";
} else {
  langNameEl.innerText = langData.name;
  updateProgress(langId);

  // Tab logic
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => btn.addEventListener("click", ()=>{
    tabBtns.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    showTab(btn.dataset.tab);
  }));

  function showTab(tab){
    switch(tab){
      case "desc":
        tabContent.innerHTML = `<p>${langData.description}</p><p>Level: ${langData.level}</p>`;
        break;
      case "materi":
        tabContent.innerHTML = `<ul>${langData.materi.map(m=>`<li>${m}</li>`).join("")}</ul>`;
        break;
      case "roadmap":
        tabContent.innerHTML = `<ul>${langData.roadmap.map(r=>`<li>${r}</li>`).join("")}</ul>`;
        break;
      case "code":
        tabContent.innerHTML = `<pre><code>${langData.codeExample}</code></pre>`;
        break;
    }
  }

  showTab("desc"); // default
}

function markDone(){
  saveProgress(langId);
  alert("Progress disimpan ✅");
  updateProgress(langId);
}
