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
      name: 'Yochai Benkler',
      title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'Benkler studies commons-based peer productions, and published his seminal book The Wealth of Network in 2006.',
    },
    {
      image: 'images/speaker2.png',
      name: 'SohYeong Noh',
      title: 'Director of Art Centre Nabi and a board member of CC Korea',
      description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
    },
    {
      image: 'images/speaker3.png',
      name: 'Lila Tretikov',
      title: 'Executive Director of the Wikimedia Foundation',
      description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
    },
    {
      image: 'images/speaker4.png',
      name: 'Kilnam Chon',
      title: 'Executive Director of the Wikimedia Foundation',
      description: 'Kilnam Chon is help to bring the internet to Asia and is an outspoken advocate for the open web and digital commons. in 2012 he was inducted into the inaugural class of the Internet Societys (ISOC) Internet Hall of Fame',
    },
    {
      image: 'images/speaker5.png',
      name: 'Julia Leda',
      title: 'President of Young Pirates of Europe',
      description: 'European integration, political democracy and participation of youth trough online as her major condern, Redas report outlining potential changes to EU copyright law was approved by the Parliament in July.',
    },
    {
      image: 'images/speaker6.png',
      name: 'Ryan Merkley',
      title: 'CEO of Creative Commons, ex CEO of the Mozilla foundation',
      description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
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