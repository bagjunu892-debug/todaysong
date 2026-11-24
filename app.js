// 질문 진행 + 추천 로직
// - 곡마다 "지금까지 한 답과 일치한 개수"로 점수를 매긴다.
// - 점수가 가장 높은 곡들만 남기고, 마지막에 그중 한 곡을 고른다.
//   (완벽히 맞는 곡이 없어도 항상 결과가 나오게 하기 위함)

const SONGS = window.SONGS;
const QUESTIONS = window.QUESTIONS;
const LABELS = window.LABELS;

const $ = (id) => document.getElementById(id);

let step = 0; // 현재 질문 번호 (0부터)
let answers = []; // [{ key, value }]

function showScreen(name) {
  document.querySelectorAll('.screen').forEach((el) => el.classList.remove('active'));
  $('screen-' + name).classList.add('active');
}

// 지금까지의 답에 대해 곡별 점수를 계산하고, 최고 점수인 곡들을 돌려준다.
function getCandidates() {
  const scored = SONGS.map((song) => ({
    song,
    score: answers.filter((a) => song[a.key] === a.value).length,
  }));
  const best = Math.max(...scored.map((x) => x.score));
  return {
    best,
    songs: scored.filter((x) => x.score === best).map((x) => x.song),
  };
}

// 같은 날 + 같은 답이면 같은 곡이 나오도록 하는 간단한 해시
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function pickSong(candidates) {
  const seed = todayKey() + '|' + answers.map((a) => a.value).join(',');
  return candidates[hashString(seed) % candidates.length];
}

function renderQuestion() {
  const q = QUESTIONS[step];
  $('step-label').textContent = `${step + 1} / ${QUESTIONS.length}`;
  $('progress-bar').style.width = `${(step / QUESTIONS.length) * 100}%`;
  $('question-text').textContent = q.text;

  const box = $('options');
  box.innerHTML = '';
  q.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt.label;
    btn.addEventListener('click', () => choose(q.key, opt.value));
    box.appendChild(btn);
  });

  if (step === 0) {
    $('remaining').textContent = `전체 ${SONGS.length}곡 중에서 골라요`;
  } else {
    const { best, songs } = getCandidates();
    const exact = best === answers.length;
    $('remaining').textContent = exact
      ? `지금까지 모두 맞는 곡 ${songs.length}곡이 남았어요`
      : `완벽히 맞는 곡은 없어서, 가장 가까운 ${songs.length}곡이 남았어요`;
  }
}

function choose(key, value) {
  answers.push({ key, value });
  step += 1;
  if (step < QUESTIONS.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const { songs } = getCandidates();
  const song = pickSong(songs);

  $('result-title').textContent = song.title;
  $('result-artist').textContent = song.artist;

  const tags = $('result-tags');
  tags.innerHTML = '';
  ['genre', 'mood', 'situation', 'sound', 'weather'].forEach((key) => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = '#' + LABELS[key][song[key]];
    tags.appendChild(span);
  });

  const query = encodeURIComponent(`${song.artist} ${song.title}`);
  $('result-link').href = `https://www.youtube.com/results?search_query=${query}`;

  showScreen('result');
}

function start() {
  step = 0;
  answers = [];
  renderQuestion();
  showScreen('question');
}

$('btn-start').addEventListener('click', start);
$('btn-restart').addEventListener('click', () => showScreen('start'));
