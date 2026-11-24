# 🎵 오늘의 노래

질문 5개에 답하면 100곡 중에서 오늘의 노래를 추천해주는 웹사이트입니다. 설치 없이 브라우저만 있으면 됩니다.

## 실행 방법

설치할 것이 없습니다. 저장소를 받아서 `index.html`을 더블클릭하면 브라우저에서 열립니다.

```bash
git clone <저장소 주소>
```

## 모두 같이 보기 (GitHub Pages, 무료)

1. GitHub 저장소의 **Settings → Pages**로 이동
2. Source를 **Deploy from a branch**, 브랜치는 `main`, 폴더는 `/ (root)`로 선택 후 Save
3. 1~2분 뒤 `https://<계정>.github.io/<저장소 이름>/` 주소로 접속 가능
4. 이후 `main`에 합쳐지는 변경은 자동으로 반영됩니다.

## 동작 방식

1. 질문 5개(기분 / 장르 / 상황 / 사운드 / 날씨)에 오지선다로 답합니다.
2. 곡마다 붙어 있는 태그와 답이 일치하는 개수로 점수를 매깁니다.
3. 답할 때마다 일치도가 가장 높은 곡만 남기고, 남은 곡 수를 화면에 보여줍니다.
4. 5개 질문이 끝나면 남은 곡 중 한 곡을 추천합니다.
   - 같은 날 같은 답이면 같은 곡이 나옵니다. (날짜 기반 고정 선택)
   - 모든 답에 완벽히 맞는 곡이 없으면 가장 많이 맞는 곡들 중에서 고릅니다.

## 파일 구조

| 파일 | 역할 |
| --- | --- |
| `index.html`, `style.css` | 화면 |
| `app.js` | 질문 진행, 점수 계산, 추천 로직 |
| `questions.js` | 질문 5개와 보기 (태그 값과 연결) |
| `songs.js` | 노래 100곡과 태그 |

## 노래 추가·수정하기

`songs.js`의 한 줄이 한 곡입니다. 순서는 `제목, 아티스트, 장르, 기분, 상황, 사운드, 날씨` 입니다.

```js
s('아무노래', 'ZICO', 'hiphop', 'happy', 'drive', 'beat', 'sunny'),
```

| 태그 | 가능한 값 |
| --- | --- |
| 장르 | `hiphop` `kpop` `band` `pop` `jpop` |
| 기분 | `happy` `calm` `sad` `dreamy` `fire` |
| 상황 | `commute` `focus` `workout` `night` `drive` |
| 사운드 | `guitar` `synth` `beat` `piano` `grand` |
| 날씨 | `sunny` `cloudy` `rainy` `cold` `breezy` |

## 협업 규칙 (제안)

- `main` 브랜치에 직접 푸시하지 않고, 브랜치를 만들어 Pull Request로 합칩니다.
- 브랜치 이름 예시: `feat/result-screen`, `data/add-songs`
- 곡 데이터(`songs.js`)와 화면 코드는 파일이 나뉘어 있어 충돌이 적습니다.
- 곡 태그는 취향이 들어가는 부분이라, 이견이 있으면 PR에서 이야기해서 정합니다.
