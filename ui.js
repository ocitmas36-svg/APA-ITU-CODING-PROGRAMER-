// Bisa dipakai untuk shared UI seperti modal, toast, atau tooltip
function showToast(msg){
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(()=>document.body.removeChild(toast),2000);
}
