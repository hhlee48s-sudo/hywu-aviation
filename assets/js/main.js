// 모바일 메뉴
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// D-day (탑승권)
const pass = document.querySelector('.pass');
if (pass) {
  const el = pass.querySelector('.dday');
  const day = 864e5, today = new Date(); today.setHours(0,0,0,0);
  const s = new Date(pass.dataset.start + 'T00:00:00'), e = new Date(pass.dataset.end + 'T00:00:00');
  if (today < s) el.textContent = 'D-' + Math.round((s - today) / day);
  else if (today <= e) { const n = Math.round((e - today) / day); el.textContent = n === 0 ? 'D-DAY' : '마감 D-' + n; }
  else el.textContent = 'CLOSED';
}

// 숫자 카운트업 + 등장 애니메이션
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add('in');
  en.target.querySelectorAll('.count').forEach(c => {
    const to = +c.dataset.to; let cur = 0; const step = Math.max(1, Math.ceil(to / 40));
    const t = setInterval(() => { cur = Math.min(to, cur + step); c.textContent = cur; if (cur >= to) clearInterval(t); }, 25);
  });
  io.unobserve(en.target);
}), { threshold: .15 });
document.querySelectorAll('.section .container').forEach(el => { el.classList.add('reveal'); io.observe(el); });

// 교육과정 탭
document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.tab, .tab-panel').forEach(x => x.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(btn.dataset.tab).classList.add('active');
}));

// 자격증 스탬프
const stamps = document.querySelectorAll('.stamp');
const cnt = document.querySelector('.stamp-count b');
stamps.forEach(s => s.addEventListener('click', () => {
  s.classList.toggle('on');
  cnt.textContent = document.querySelectorAll('.stamp.on').length;
}));

// 직무 테스트
const Q = [
  { q: '여행을 갈 때 가장 설레는 순간은?', a: [['비행기 안에서 창밖 구름을 볼 때', 'cabin'], ['공항에 도착해 체크인할 때', 'ground'], ['라운지에서 여유롭게 쉴 때', 'lounge']] },
  { q: '친구들 사이에서 나는 주로…', a: [['분위기 메이커, 누구와도 금방 친해져요', 'cabin'], ['일정과 예약을 척척 챙기는 플래너', 'ground'], ['세심하게 한 명 한 명 챙기는 스타일', 'lounge']] },
  { q: '갑자기 문제가 생기면?', a: [['침착하게 바로 행동한다', 'cabin'], ['규정과 절차부터 확인한다', 'ground'], ['상대의 기분을 먼저 살핀다', 'lounge']] },
  { q: '가장 배워보고 싶은 수업은?', a: [['기내방송 · 모의비행', 'cabin'], ['항공예약 · 발권 · 스마트공항', 'ground'], ['와인 · 바리스타 · 이미지메이킹', 'lounge']] }
];
const R = {
  cabin: ['객실승무원 타입', '하늘 위 안전과 서비스를 동시에 책임지는 당신! 항공모의비행, 기내방송, 항공안전업무(VR) 수업이 딱 맞아요.'],
  ground: ['항공사 지상직 타입', '공항의 흐름을 정확하게 움직이는 당신! 항공예약실무, 운임발권, 스마트공항서비스 수업을 추천해요.'],
  lounge: ['VIP 라운지 서비스 타입', '디테일한 배려가 강점인 당신! 와인 소믈리에, 바리스타 자격증과 이미지메이킹 수업이 잘 맞아요.']
};
const box = document.getElementById('quizBox');
if (box) {
  const qEl = box.querySelector('.quiz-q'), aEl = box.querySelector('.quiz-a'), bar = box.querySelector('.quiz-progress span'), res = box.querySelector('.quiz-result');
  let i = 0, score = {};
  const render = () => {
    if (i >= Q.length) {
      const top = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
      qEl.hidden = aEl.hidden = true; res.hidden = false; bar.style.width = '100%';
      res.querySelector('h3').textContent = R[top][0];
      res.querySelector('.result-desc').textContent = R[top][1];
      return;
    }
    bar.style.width = (i / Q.length * 100) + '%';
    qEl.textContent = 'Q' + (i + 1) + '. ' + Q[i].q;
    aEl.innerHTML = '';
    Q[i].a.forEach(([t, k]) => { const b = document.createElement('button'); b.textContent = t; b.onclick = () => { score[k] = (score[k] || 0) + 1; i++; render(); }; aEl.appendChild(b); });
  };
  document.getElementById('quizRetry').onclick = () => { i = 0; score = {}; qEl.hidden = aEl.hidden = false; res.hidden = true; render(); };
  render();
}
