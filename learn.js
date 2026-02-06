const params = new URLSearchParams(location.search);
const key = params.get("lang");
const nameEl = document.getElementById("langName");
const tabContent = document.getElementById("tabContent");
const tabs = document.querySelectorAll("#tabs button");

if (!languages.find(l=>l.id===key)) {
  nameEl.innerText="Bahasa tidak ditemukan";
  tabContent.innerHTML="<p>Tidak ada materi</p>";
} else {
  const lang = languages.find(l=>l.id===key);
  nameEl.innerText = lang.name;

  const content = {
    desc: `<p>${lang.description}</p>`,
    roadmap: `<ul>${lang.roadmap.map(r=>`<li>${r}</li>`).join("")}</ul>`,
    examples: `<pre>${lang.examples.join("\n")}</pre>`
  };

  tabContent.innerHTML = content.desc;

  tabs.forEach(t=>{
    t.addEventListener("click", ()=>{
      tabs.forEach(btn=>btn.classList.remove("active"));
      t.classList.add("active");
      tabContent.innerHTML = content[t.dataset.tab];
    });
  });
}

function markDone(){
  localStorage.setItem("done-"+key,true);
  alert(`Progress ${languages.find(l=>l.id===key).name} disimpan 🎉`);
}
