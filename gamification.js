function saveXP(xp){
  const total = parseInt(localStorage.getItem("xp")||0);
  localStorage.setItem("xp", total+xp);
  alert(`Kamu mendapat ${xp} XP! Total XP: ${total+xp}`);
}

function getBadge(){
  const xp = parseInt(localStorage.getItem("xp")||0);
  if(xp>=50) return "🏆 Quiz Master";
  if(xp>=20) return "🎖 Code Explorer";
  if(xp>=10) return "⭐ Newbie Coder";
  return "🙁 Belum ada badge";
}
