// src/data/quizData.js

// ──────────────────────────────────────────────
// 유틸리티: Fisher-Yates 알고리즘을 이용한 배열 섞기 함수
const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// ──────────────────────────────────────────────
// 치킨 카테고리 (10문제)
const 치킨 = [
  {
    question: "ㅁㄹ ㅊㅋ",
    answer: "마라 치킨",
    options: shuffleArray([
      "마라 치킨",
      "마랑 치킨",
      "마라 칰킨",
      "마라 치낀",
    ]),
  },
  {
    question: "ㄹㄷㅎ ㅋㄹㅊ",
    answer: "레드핫 크런치",
    options: shuffleArray([
      "레드핫 크런치",
      "레드킽 크런치",
      "레뜨핫 크런치",
      "레드핫 크런취",
    ]),
  },
  {
    question: "ㄱㅊㅂㅅㅅ",
    answer: "고추바사삭",
    options: shuffleArray([
      "고추바삭삭",
      "고추바사싹",
      "고추바사삭",
      "고츄바사삭",
    ]),
  },
  {
    question: "ㄱㄹㅋ ㅋㄹㅁ",
    answer: "갈릭 크리미",
    options: shuffleArray([
      "갈릭 크리미",
      "갈릿 크리미",
      "칼릭 크리미",
      "갈릭 크리밋",
    ]),
  },
  {
    question: "ㅋㄹ ㄸㅂㅇ ㅊㅋ",
    answer: "크림 떡볶이 치킨",
    options: shuffleArray([
      "크림 떡볶이 치킨",
      "크림 떡보기 치킨",
      "크림 떡뽁이 치킨",
      "크림 떡볶이 칰킨",
    ]),
  },
  {
    question: "ㅎㅇㅈ ㅊㅋ",
    answer: "흑임자 치킨",
    options: shuffleArray([
      "흑임자 치킨",
      "흑잎자 치킨",
      "흑임자 칰킨",
      "흑임차 치킨",
    ]),
  },
  {
    question: "ㅊㅈㄹ ㅊㅋ",
    answer: "치즈링 치킨",
    options: shuffleArray([
      "치즈링 치킨",
      "치즈링 칰킨",
      "치쯔링 치킨",
      "치즈닁 치킨",
    ]),
  },
  {
    question: "ㅂㄷ ㅋㄹㅁㅊㅋ",
    answer: "불닭 크림치킨",
    options: shuffleArray([
      "불닭 크림치킨",
      "불닭 크림칰킨",
      "붇닭 크림치킨",
      "불닭 크랲치킨",
    ]),
  },
  {
    question: "ㅅㄴㅇ ㅊㅋ",
    answer: "스노윙 치킨",
    options: shuffleArray([
      "스노윙 치킨",
      "스누잉 치킨",
      "스노잉 칰킨",
      "스노윙 치낀",
    ]),
  },
  {
    question: "ㅇㅅㅂ ㅁㅇ ㅊㅋ",
    answer: "와사비 마요 치킨",
    options: shuffleArray([
      "와사비 마요 치킨",
      "와사비 마요 칰킨",
      "와사피 마요 치킨",
      "와사비 마뇨 치킨",
    ]),
  },
];

// ──────────────────────────────────────────────
// 햄버거 카테고리 (10문제)
const 햄버거 = [
  {
    question: "ㅁㄱ ㅊㅈㅍㅌ ㅂㄱ",
    answer: "메가 치즈폭탄 버거",
    options: shuffleArray([
      "메가 치즈폭탄 버거",
      "메가 치즤폭탄 버거",
      "메가 치즈퐉탄 버거",
      "메가 칫즈폭탄 버거",
    ]),
  },
  {
    question: "ㄱㄹㅇ ㅇㄴ ㅂㄱ",
    answer: "갈릭 어니언 버거",
    options: shuffleArray([
      "갈릭 어니언 버거",
      "칼릭 어니언 버거",
      "갈릭 언니언 버거",
      "갈릭 어니연 버거",
    ]),
  },
  {
    question: "ㅅㅇㅅ ㅂㄷㅁㅇ ㅂㄱ",
    answer: "스윗 불닭마요 버거",
    options: shuffleArray([
      "스윗 불닭마요 버거",
      "스윗 불닭마뇨 버거",
      "스윗 불닥마요 버거",
      "스윗 불닭마요 벅거",
    ]),
  },
  {
    question: "ㅌㄹㅍ ㅅㅅ ㅂㄱ",
    answer: "트리플 소스 버거",
    options: shuffleArray([
      "트리플 소스 버거",
      "트리쁠 소스 버거",
      "트리플 쇠스 버거",
      "트리플 소쓰 버거",
    ]),
  },
  {
    question: "ㅎㅅ ㅍㅌㅇㅌ ㅂㄱ",
    answer: "해쉬 포테이토 버거",
    options: shuffleArray([
      "해쉬 포테이토 버거",
      "햇쉬 포테이토 버거",
      "해쉬 포테이토 벅거",
      "해쉬 포데이토 버거",
    ]),
  },
  {
    question: "ㅅㅇ ㅇㅅㅂ ㅂㄱ",
    answer: "새우 와사비 버거",
    options: shuffleArray([
      "새우 와사비 버거",
      "새워 와사비 버거",
      "새우 와사삐 버거",
      "새우 와싸비 버거",
    ]),
  },
  {
    question: "ㅁㅋㅇ ㅊㅈ ㅂㄱ",
    answer: "맥앤 치즈 버거",
    options: shuffleArray([
      "맥앤 치즈 버거",
      "맠앤 치즈 버거",
      "맥앤 치즤 버거",
      "맥앤 칫즈 버거",
    ]),
  },
  {
    question: "ㅍㅇㅇㅍ ㅎㅇㅇ ㅂㄱ",
    answer: "파인애플 하와이 버거",
    options: shuffleArray([
      "파인애플 하와이 버거",
      "파인에플 하와이 버거",
      "파인애플 하와이 벅거",
      "파인애플 하왓이 버거",
    ]),
  },
  {
    question: "ㅊㅍㄹ ㅅㅍㅇㅅ ㅂㄱ",
    answer: "치폴레 스파이스 버거",
    options: shuffleArray([
      "치폴레 스파이스 버거",
      "치포렐 스파이스 버거",
      "치폴레 스파잇스 버거",
      "치폴래 스파이쓰 버거",
    ]),
  },
  {
    question: "ㅂㅇㅋ ㅌㅁㅌ ㅂㄱ",
    answer: "베이컨 토마토 버거",
    options: shuffleArray([
      "베이컨 토마토 버거",
      "베이켄 토마토 버거",
      "베이컨 토맡오 버거",
      "베이칸 토마토 버거",
    ]),
  },
];

// ──────────────────────────────────────────────
// 라면 카테고리 (10문제)
const 라면 = [
  {
    question: "ㅁㄹ ㅇㄱㅈ ㄹㅁ",
    answer: "마라 육개장 라면",
    options: shuffleArray([
      "마라 육개장 라면",
      "말아 육개장 라면",
      "마라 윽개장 라면",
      "마라 육개쟝 라면",
    ]),
  },
  {
    question: "ㄲㄱ ㄹㅁ",
    answer: "꽃게 라면",
    options: shuffleArray([
      "꽃게 라면",
      "꼳게 라면",
      "꽃개 라면",
      "꼳개 라면",
    ]),
  },
  {
    question: "ㅊㅈ ㅂㄷ ㄹㅁ",
    answer: "치즈 부대 라면",
    options: shuffleArray([
      "치즈 부대 라면",
      "칫즈 부대 라면",
      "치즈 부대 라먄",
      "치즈 보대 라면",
    ]),
  },
  {
    question: "ㅁㄹ ㅎㄱ ㄹㅁ",
    answer: "마라 훠궈 라면",
    options: shuffleArray([
      "마라 훠궈 라면",
      "말아 훠궈 라면",
      "마라 호궈 라면",
      "마라 훠워 라면",
    ]),
  },
  {
    question: "ㅇㅋ ㄸㅎㅈ ㄹㅁ",
    answer: "얼큰 뼈해장 라면",
    options: shuffleArray([
      "얼큰 뼈해장 라면",
      "얼큰 뼈햇장 라면",
      "얼컫 뼈해장 라면",
      "얼큰 뼈해쟝 라면",
    ]),
  },
  {
    question: "ㅇㅂ ㅇㄷ ㄹㅁ",
    answer: "유부 우동 라면",
    options: shuffleArray([
      "유부 우동 라면",
      "유부 유동 라면",
      "유부 우동 라먄",
      "유부 오동 라면",
    ]),
  },
  {
    question: "ㄱㅊ ㅂㄷ ㄹㅁ",
    answer: "곱창 부대 라면",
    options: shuffleArray([
      "곱창 부대 라면",
      "곶창 부대 라면",
      "곱창 부대 라먄",
      "곱차잉 부대 라면",
    ]),
  },
  {
    question: "ㄱㅊ ㅊㅊ ㄹㅁ",
    answer: "김치 참치 라면",
    options: shuffleArray([
      "김치 참치 라면",
      "김치 참치 라먄",
      "김차 참치 라면",
      "김치 찼치 라면",
    ]),
  },
  {
    question: "ㅉㅈ ㅇㄹㅇ ㄹㅁ",
    answer: "짜장 알리오 라면",
    options: shuffleArray([
      "짜장 알리오 라면",
      "짜장 알리요 라면",
      "짜쟝 알리오 라면",
      "자장 알리오 라면",
    ]),
  },
  {
    question: "ㄱㅊ ㅊㅊ ㄹㅁ",
    answer: "김치 치즈 라면",
    options: shuffleArray([
      "김치 치즈 라면",
      "김치 치즤 라면",
      "김치 칫즈 라면",
      "김칫 치즈 라면",
    ]),
  },
];

// ──────────────────────────────────────────────
// 과자 카테고리 (10문제)
const 과자 = [
  {
    question: "ㅅㅇㄱ",
    answer: "새우깡",
    options: shuffleArray([
      "새우깡",
      "새웅깡",
      "세우깡",
      "새옹깡", // 중복 수정
    ]),
  },
  {
    question: "ㄲㄱㅋ",
    answer: "꼬깔콘",
    options: shuffleArray([
      "꼬깔콘",
      "꼬갈콘",
      "꼬깔콩",
      "꼬깰콘",
    ]),
  },
  {
    question: "ㄱㅈㅊ",
    answer: "감자칩",
    options: shuffleArray([
      "감자칩",
      "깜자칩",
      "감자찹",
      "감자쳄",
    ]),
  },
  {
    question: "ㅎㄴㅂㅌㅊ",
    answer: "허니버터칩",
    options: shuffleArray([
      "허니버터칩",
      "허니버타칩",
      "허니버터찹",
      "허니버턱칩",
    ]),
  },
  {
    question: "ㅎㄹㅂ",
    answer: "홈런볼",
    options: shuffleArray([
      "홈런볼",
      "홈런불",
      "혼런볼",
      "홈른볼",
    ]),
  },
  {
    question: "ㅊㅋㅍ",
    answer: "초코파이",
    options: shuffleArray([
      "초코파이",
      "초코퍨",
      "초꼬파이",
      "쵸코파이",
    ]),
  },
  {
    question: "ㅃㅃㄹ",
    answer: "빼빼로",
    options: shuffleArray([
      "빼빼로",
      "빼빼뢰",
      "빼뺘로",
      "빼빼러",
    ]),
  },
  {
    question: "ㅋㅊ",
    answer: "콘칩",
    options: shuffleArray([
      "콘칩",
      "콘찹",
      "쿤칩",
      "콘쳄",
    ]),
  },
  {
    question: "ㅍㄹㅇㄱㄹㅅ",
    answer: "프링글스",
    options: shuffleArray([
      "프링글스",
      "프링글즈",
      "프링글씨",
      "프링클스",
    ]),
  },
  {
    question: "ㄱㅅㅁ",
    answer: "고소미",
    options: shuffleArray([
      "고소미",
      "고솜미",
      "고쏘미",
      "고소믹",
    ]),
  },
];

// ──────────────────────────────────────────────
// 아이스크림 카테고리 (10문제)
const 아이스크림 = [
  {
    question: "ㅋㄹㅊ ㄹㅈㅂㄹ ㅇㅅㅋㄹㅁ",
    answer: "크런치 라즈베리 아이스크림",
    options: shuffleArray([
      "크런치 라즈베리 아이스크림",
      "크런치 라쥬베리 아이스크림",
      "크런쵸 라즈베리 아이스크림",
      "크런치 라즈벨리 아이스크림",
    ]),
  },
  {
    question: "ㅂㅇㄹ ㄷㅂ ㅇㅅㅋㄹㅁ",
    answer: "브이라인 더블 아이스크림",
    options: shuffleArray([
      "브이라인 더블 아이스크림",
      "브이라잉 더블 아이스크림",
      "브이라인 더블 아이쓰크림",
      "브이라인 더불 아이스크림",
    ]),
  },
  {
    question: "ㅁㄱ ㅌㅋㄹ ㅇㅅㅋㄹㅁ",
    answer: "망고 터키쉬 아이스크림",
    options: shuffleArray([
      "망고 터키쉬 아이스크림",
      "망고 터키시 아이스크림",
      "망고 터키쉬 아이쓰크림",
      "망고 터키쉬 아잉스크림",
    ]),
  },
  {
    question: "ㅅㄹ ㄴㅂㅂ ㅇㅅㅋㄹㅁ",
    answer: "솔트 녹밤밤 아이스크림",
    options: shuffleArray([
      "솔트 녹밤밤 아이스크림",
      "솔틑 녹밤밤 아이스크림",
      "솔트 녹밤빰 아이스크림",
      "쏠트 녹밤밤 아이스크림",
    ]),
  },
  {
    question: "ㅋㅁㄹ ㅂㄹ ㅇㅅㅋㄹㅁ",
    answer: "카멜라 브륄레 아이스크림",
    options: shuffleArray([
      "카멜라 브륄레 아이스크림",
      "카멜라 브룰래 아이스크림",
      "카매라 브륄레 아이스크림",
      "카멜라 브뢀레 아이스크림",
    ]),
  },
  {
    question: "ㅎㅂ ㅂㅅ ㅇㅅㅋㄹㅁ",
    answer: "허브 바질 아이스크림",
    options: shuffleArray([
      "허브 바질 아이스크림",
      "허브 바질 아이쓰크림",
      "허븝 바질 아이스크림",
      "헙브 바질 아이스크림",
    ]),
  },
  {
    question: "ㅌㅁㄷ ㅋㅊ ㅇㅅㅋㄹㅁ",
    answer: "토마토 쿠키 아이스크림",
    options: shuffleArray([
      "토마토 쿠키 아이스크림",
      "토마토 쿠키 아잉스크림",
      "토마투 쿠키 아이스크림",
      "토마토 쿠끼 아이스크림",
    ]),
  },
  {
    question: "ㅍㄹㄴㅌ ㅂㄹ ㅇㅅㅋㄹㅁ",
    answer: "피넛버터 브라운 아이스크림",
    options: shuffleArray([
      "피넛버터 브라운 아이스크림",
      "피넛벝터 브라운 아이스크림",
      "피낫버터 브라운 아이스크림",
      "피넛버터 브라웅 아이스크림",
    ]),
  },
  {
    question: "ㅁㄴㅌ ㅊㅋ ㅇㅅㅋㄹㅁ",
    answer: "민트 초코 아이스크림",
    options: shuffleArray([
      "민트 초코 아이스크림",
      "민트 쵸코 아이스크림",
      "밈트 초코 아이스크림",
      "민트 초코 아이쓰크림",
    ]),
  },
  {
    question: "ㅊㅋ ㅂㅂ ㅇㅅㅋㄹㅁ",
    answer: "초코 빙수 아이스크림",
    options: shuffleArray([
      "초코 빙수 아이스크림",
      "쵸코 빙수 아이스크림",
      "초코 빙슈 아이스크림",
      "초코 삥수 아이스크림",
    ]),
  },
];

// ──────────────────────────────────────────────
// 피자 카테고리 (10문제)
const 피자 = [
  {
    question: "ㅅㅁㅋ ㅂㅇㅋ ㅍㅈ",
    answer: "스모크 베이컨 피자",
    options: shuffleArray([
      "스모크 베이컨 피자",
      "스모크 베이큰 피자",
      "스머크 베이컨 피자",
      "스모크 베이컨 피쟈",
    ]),
  },
  {
    question: "ㅌㄹㅍ ㅁㅅㄹ ㅍㅈ",
    answer: "트러플 머쉬룸 피자",
    options: shuffleArray([
      "트러플 머쉬룸 피자",
      "트러플 머시룸 피자",
      "트러플 머쉬룸 피져",
      "트러플 머쉬룸 피쟈",
    ]),
  },
  {
    question: "ㅁㅋ ㅂㄷ ㅍㅈ",
    answer: "매콤 불닭 피자",
    options: shuffleArray([
      "매콤 불닭 피자",
      "매콤 불닥 피자",
      "매콤 불닭 피져",
      "매콤 불닥 피쟈",
    ]),
  },
  {
    question: "ㅂㅈ ㅍㅅㅌ ㅍㅈ",
    answer: "바질 페스토 피자",
    options: shuffleArray([
      "바질 페스토 피자",
      "바질 페스또 피자",
      "바질 페스토 피져",
      "바질 페스또 피쟈",
    ]),
  },
  {
    question: "ㅎㅅㅁ ㄷㅃ ㅍㅈ",
    answer: "해산물 듬뿍 피자",
    options: shuffleArray([
      "해산물 듬뿍 피자",
      "해산물 둠뿍 피자",
      "해산물 듬뿍 피져",
      "해산물 듬뿍 피쟈",
    ]),
  },
  {
    question: "ㅅㅍㅇㅅ ㅅㄹㅍ ㅍㅈ",
    answer: "스파이시 쉬림프 피자",
    options: shuffleArray([
      "스파이시 쉬림프 피자",
      "스파이씨 쉬림프 피자",
      "스파이시 쉬림프 피져",
      "스파이시 쉬림프 피쟈",
    ]),
  },
  {
    question: "ㅊㅍㄹ ㅂㅂㅋ ㅍㅈ",
    answer: "치폴레 바베큐 피자",
    options: shuffleArray([
      "치폴레 바베큐 피자",
      "치폴레 바베꿸 피자",
      "치폴레 바베큐 피져",
      "치폴레 바베큐 피쟈",
    ]),
  },
  {
    question: "ㅍㄹㅅㅎㅌ ㅍㅈ",
    answer: "프로슈토 피자",
    options: shuffleArray([
      "프로슈토 피자",
      "프로슈또 피자",
      "프로숏 피자",
      "프로슈토 피져",
    ]),
  },
  {
    question: "ㅅㅊㄹ ㅍㅈ",
    answer: "시칠리아 피자",
    options: shuffleArray([
      "시칠리아 피자",
      "시칠리야 피자",
      "시칠리아 피져",
      "시칠리아 피쟈",
    ]),
  },
  {
    question: "ㅎㄴ ㅁㅅㅌㄷ ㅍㅈ",
    answer: "허니 머스타드 피자",
    options: shuffleArray([
      "허니 머스타드 피자",
      "허니 머스타드 피져",
      "허니 머스타드 피쟈",
      "허니 머스턱 피자",
    ]),
  },
];

// ──────────────────────────────────────────────
// 최종 Quiz 데이터 export
export const quizData = {
  치킨,
  햄버거,
  라면,
  과자,
  아이스크림,
  피자,
};
