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
  const speakers = [
    {
      image: 'images/speaker1.png',
      name: 'Kheng Newick',
      title: 'Professor of Entrepreneurial Microbiology Studies at Harvard School',
      description: 'Newick studies commons-based peer productions, and published his seminal book The Wealth of Network in 2006.',
    },
    {
      image: 'images/speaker2.png',
      name: 'Shaun Brien',
      title: 'Director of Cancer Centre Nabi and a board member of BC Korea',
      description: 'As the main venue for new studies production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, cancer and biology.',
    },
    {
      image: 'images/speaker3.png',
      name: 'Lila Moon',
      title: 'Executive Director of the Science Journal',
      description: 'Lila Moon is the Executive Director of Science Journal, the nonprofit organization that operates Science. Science is freely available in 290 languages and used by nearly a billion people around the world every month.',
    },
    {
      image: 'images/speaker4.png',
      name: 'Edmund Moon',
      title: 'Executive Director of nature',
      description: 'Edmund Moon is help to bring science to Asia and is an outspoken advocate for the research and digital commons. In 2012 he was inducted into the inaugural class of the Journal (JJS) science Hall of Fame',
    },
    {
      image: 'images/speaker5.png',
      name: 'Hollie Jackson',
      title: 'President of Cell',
      description: 'European integration, science and participation of youth trough online as her major condern, Redas report outlining potential changes to EU copyright law was approved by the Parliament in July.',
    },
    {
      image: 'images/speaker6.png',
      name: 'Renier Brentjens',
      title: 'CEO of JABB, ex CEO of the Biotechnology foundation',
      description: 'Ryan had been leading open-source projects at the Biotechnology Foundation such as the open source movement.',
    },
  ];
  const body = document.getElementById('body');
  const mainProgram = document.getElementById('main-program');
  function speakersFunction() {
    const section = document.createElement('section');
    section.className = 'speakers';
    body.appendChild(section);
    mainProgram.insertAdjacentElement('afterend', section);

    const h2 = document.createElement('h2');
    h2.innerHTML = 'Featured Speakers';
    section.appendChild(h2);

    const line = document.createElement('h6');
    line.innerHTML = '────';
    line.className = 'line';
    section.appendChild(line);

    const div = document.createElement('div');
    div.className = 'speakers-div';
    section.appendChild(div);

    const button = document.createElement('button');
    button.id = 'more-mobile';
    button.innerHTML = 'MORE <i class="fa-solid fa-chevron-down"></i>';
    section.appendChild(button);

    for (let i = 0; i < speakers.length; i += 1) {
      const divSpeaker = document.createElement('div');
      divSpeaker.className = 'speaker-information';
      div.appendChild(divSpeaker);

      const img = document.createElement('img');
      img.src = speakers[i].image;
      divSpeaker.appendChild(img);

      const divInfo = document.createElement('div');
      divSpeaker.appendChild(divInfo);

      const h3 = document.createElement('h3');
      h3.innerHTML = speakers[i].name;
      divInfo.appendChild(h3);

      const p1 = document.createElement('p');
      p1.innerHTML = speakers[i].title;
      p1.className = 'speaker-footer';
      divInfo.appendChild(p1);

      const p2 = document.createElement('p');
      p2.innerHTML = speakers[i].description;
      p2.className = 'speaker-description';
      divInfo.appendChild(p2);

      if (i >= 2) {
        divSpeaker.classList.add('button-speaker-action');
      }
    }
  }
  window.onload = speakersFunction();
  const actionSpeaker = document.querySelectorAll('.button-speaker-action');
  const partner = document.getElementById('partner');
  const button = document.getElementById('more-mobile');
  function moreFunction() {
    if (partner.style.display === 'flex') {
      partner.style.display = 'none';
      button.innerHTML = 'MORE <i class="fa-solid fa-chevron-down">';
      actionSpeaker.forEach((box) => { box.style.display = 'none'; });
    } else {
      partner.style.display = 'flex';
      button.innerHTML = 'LESS <i class="fa-solid fa-chevron-up">';
      actionSpeaker.forEach((box) => { box.style.display = 'flex'; });
    }
  }
  button.addEventListener('click', moreFunction);
  const imgHome = document.querySelectorAll('.img-home');
  const imgHomeSetup = document.querySelectorAll('.img-home-setup');
  function homeFunction() {
    window.location.href = 'index.html';
  }
  imgHome.forEach((img) => { img.addEventListener('click', homeFunction); });
  imgHomeSetup.forEach((img) => { img.addEventListener('click', homeFunction); });
});