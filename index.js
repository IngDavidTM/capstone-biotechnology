function wrapFunction() {
  const wrap = document.getElementById('nav-wrapper');
  if (wrap.style.display === 'flex') {
    wrap.style.display = 'none';
  } else {
    wrap.style.display = 'flex';
  }
}
const openWrap = document.getElementById('wrapper');
const closeWrap = document.getElementById('close-wrap');
openWrap.addEventListener('click', wrapFunction);
closeWrap.addEventListener('click', wrapFunction);