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
  const partner = document.getElementById('partner');
  const moreMobile = document.getElementById('more-mobile');
  function moreFunction() {
    if (partner.style.display === 'flex') {
      partner.style.display = 'none';
      moreMobile.innerHTML = 'MORE <i class="fa-solid fa-chevron-down">';
    } else {
      partner.style.display = 'flex';
      moreMobile.innerHTML = 'LESS <i class="fa-solid fa-chevron-up">';
    }
  }
  moreMobile.addEventListener('click', moreFunction);
});