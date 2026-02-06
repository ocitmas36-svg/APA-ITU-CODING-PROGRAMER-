function getProgress(langId){
  return localStorage.getItem("done-"+langId) ? true : false;
}

function showProgress(langId){
  const done = getProgress(langId);
  if(done){
    console.log(`✅ ${langId} selesai`);
  }
}
