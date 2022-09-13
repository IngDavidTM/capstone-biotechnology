window.addEventListener('DOMContentLoaded', () => {
  const wrap = document.getElementById('nav-wrapper');
  const openWrap = document.getElementById('wrapper');
  const closeWrap = document.getElementById('close-wrap');
  function wrapFunction() {
    if (wrap.style.display === 'flex') {
      wrap.style.display = 'none';
    } else {
      wrap.style.display = 'flex';
    }
  }
  openWrap.addEventListener('click', wrapFunction);
  closeWrap.addEventListener('click', wrapFunction);
  const imgHomeSetup = document.querySelectorAll('.img-home-setup');
  function homeFunction() {
    window.location.href = 'index.html';
  }
  imgHomeSetup.forEach((img) => { img.addEventListener('click', homeFunction); });
});