const container = document.getElementById("languageList");

languages.forEach(lang => {
  const card = document.createElement("div");
  card.className = "language-card";
  card.innerHTML = `<h3>${lang.name}</h3><p>${lang.level}</p>`;
  card.onclick = ()=>{ location.href=`learn.html?lang=${lang.id}`; };
  container.appendChild(card);
});
