// 질문 5개. 각 보기의 value는 songs.js의 태그 값과 같아야 합니다.
// key는 곡 데이터의 속성 이름입니다. (mood, genre, situation, sound, weather)
window.QUESTIONS = [
  {
    key: 'mood',
    text: '지금 기분은 어때요?',
    options: [
      { label: '😆 신나고 들떠요', value: 'happy' },
      { label: '😌 평온하고 여유로워요', value: 'calm' },
      { label: '🥲 괜히 센치해요', value: 'sad' },
      { label: '🌙 몽환적이고 멍해요', value: 'dreamy' },
      { label: '🔥 에너지가 넘쳐요', value: 'fire' },
    ],
  },
  {
    key: 'genre',
    text: '오늘은 어떤 장르가 끌려요?',
    options: [
      { label: '🎤 힙합', value: 'hiphop' },
      { label: '💖 K-pop', value: 'kpop' },
      { label: '🎸 밴드 음악', value: 'band' },
      { label: '🎧 팝송', value: 'pop' },
      { label: '🌸 J-pop', value: 'jpop' },
    ],
  },
  {
    key: 'situation',
    text: '이 노래를 어디서 들을 거예요?',
    options: [
      { label: '🚇 출퇴근·등하교 길', value: 'commute' },
      { label: '📚 공부·작업할 때', value: 'focus' },
      { label: '🏋️ 운동할 때', value: 'workout' },
      { label: '🌃 밤 산책·잠들기 전', value: 'night' },
      { label: '🚗 드라이브·친구와 함께', value: 'drive' },
    ],
  },
  {
    key: 'sound',
    text: '어떤 사운드가 끌려요?',
    options: [
      { label: '🎸 기타 소리', value: 'guitar' },
      { label: '🎹 반짝이는 신스·전자음', value: 'synth' },
      { label: '🥁 묵직한 비트·베이스', value: 'beat' },
      { label: '🎼 피아노·어쿠스틱', value: 'piano' },
      { label: '🎻 웅장하고 꽉 찬 사운드', value: 'grand' },
    ],
  },
  {
    key: 'weather',
    text: '오늘 날씨(또는 하늘 분위기)는요?',
    options: [
      { label: '☀️ 쨍하게 맑아요', value: 'sunny' },
      { label: '☁️ 흐리고 구름 많아요', value: 'cloudy' },
      { label: '🌧️ 비가 와요', value: 'rainy' },
      { label: '❄️ 쌀쌀하고 추워요', value: 'cold' },
      { label: '🍃 선선한 바람이 불어요', value: 'breezy' },
    ],
  },
];

// 결과 화면에 보여줄 라벨
window.LABELS = {
  genre: { hiphop: '힙합', kpop: 'K-pop', band: '밴드', pop: '팝송', jpop: 'J-pop' },
  mood: { happy: '신나는', calm: '평온한', sad: '센치한', dreamy: '몽환적인', fire: '에너지 넘치는' },
  situation: { commute: '이동 중', focus: '작업할 때', workout: '운동할 때', night: '밤에', drive: '드라이브' },
  sound: { guitar: '기타', synth: '신스', beat: '비트', piano: '피아노', grand: '웅장함' },
  weather: { sunny: '맑음', cloudy: '흐림', rainy: '비', cold: '쌀쌀함', breezy: '선선함' },
};
