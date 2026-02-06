const params = new URLSearchParams(window.location.search);
const langId = params.get("lang");
const hero = document.getElementById("learnHero");
const tabContent = document.getElementById("tabContent");
const tabOverview = document.getElementById("tabOverview");
const tabRoadmap = document.getElementById("tabRoadmap");
const tabCode = document.getElementById("tabCode");

if(!languages[langId]){
  hero.innerHTML = "<h2>Bahasa tidak ditemukan</h2>";
} else {
  const lang = languages[langId];
  hero.innerHTML = `<h2>${lang.name}</h2><p>${lang.description}</p>`;
  renderTab("overview");

  tabOverview.onclick = ()=> renderTab("overview");
  tabRoadmap.onclick = ()=> renderTab("roadmap");
  tabCode.onclick = ()=> renderTab("code");
}

function renderTab(tab){
  if(!languages[langId]) return;
  const lang = languages[langId];
  if(tab==="overview"){
    tabContent.innerHTML = `<h3>Sejarah & Deskripsi</h3>
      <p>${lang.description}</p>
      <p>Level: ${lang.level}</p>`;
  } else if(tab==="roadmap"){
    tabContent.innerHTML = `<h3>Roadmap Belajar</h3>
      <ul>${lang.roadmap.map(r=>`<li>${r}</li>`).join("")}</ul>`;
  } else if(tab==="code"){
    tabContent.innerHTML = `<h3>Contoh Kode</h3>
      <pre><code>${lang.example}</code></pre>`;
  }
}

function markDone(){
  if(!langId) return;
  localStorage.setItem("done-"+langId,true);
  alert("Progress disimpan ✅");
    }
