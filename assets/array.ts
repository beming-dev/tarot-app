interface tarotCard {
  img_name: any;
  card_no: number;
  card_name: string;
}

export interface tarotType extends tarotCard {
  reverse?: boolean;
  subTarot?: tarotCard;
}

export interface typeType {
  key: string;
  name: string;
  kind: "tarot" | "symbol";
}

export const types = [
  {
    key: "three",
    name: "세장 타로",
    icon: "heart",
  },
  {
    key: "four",
    name: "네장 타로",
    icon: "heart",
  },
  {
    key: "five",
    name: "다섯장 타로",
    icon: "heart",
  },
];

export const celticResult = [
  "질문을 하는 사람의 현재 상황을 나타냅니다.",
  "현재상황을 가로막고 있는 장애물을 나타냅니다.",
  "무의식,잠재의식,잠재적인 욕망,문제의 본질",
  "과거 즉, 현재 상황에 대한 최근의 배경",
  "현재 드러난 영향력과 앞으로의 발전 가능성",
  "가까운 미래에 대한 통찰, 다가올 미래의 상황",
  "인식하고 있는 자신의 감정, 자기가 보는 자신",
  "질문자를 바라보는 타인들의 상황과 영향력, 주변환경",
  "질문자의 마음가짐, 바라는것, 두려워하는것",
  "우리가 도달하는 결과를 나타냅니다.",
];

export const tarotList: tarotType[] = [
  {
    img_name: "../cards/img(1).jpg",
    card_no: 1,
    card_name: "바보 0",
  },
  {
    img_name: "../cards/img(2).jpg",
    card_no: 2,
    card_name: "소드 시종",
  },
  {
    img_name: "../cards/img(3).jpg",
    card_no: 3,
    card_name: "완드 시종",
  },
  {
    img_name: "../cards/img(4).jpg",
    card_no: 4,
    card_name: "컵 시종",
  },
  {
    img_name: "../cards/img(5).jpg",
    card_no: 5,
    card_name: "펜타클 시종",
  },
  {
    img_name: "../cards/img(6).jpg",
    card_no: 6,
    card_name: "마법사",
  },
  {
    img_name: "../cards/img(7).jpg",
    card_no: 7,
    card_name: "소드 기사",
  },
  {
    img_name: "../cards/img(8).jpg",
    card_no: 8,
    card_name: "완드 기사",
  },
  {
    img_name: "../cards/img(9).jpg",
    card_no: 9,
    card_name: "컵 기사",
  },
  {
    img_name: "../cards/img(10).jpg",
    card_no: 10,
    card_name: "펜타클 기사",
  },
  {
    img_name: "../cards/img(11).jpg",
    card_no: 11,
    card_name: "여사제",
  },
  {
    img_name: "../cards/img(12).jpg",
    card_no: 12,
    card_name: "소드 퀸",
  },
  {
    img_name: "../cards/img(13).jpg",
    card_no: 13,
    card_name: "완드 킹",
  },
  {
    img_name: "../cards/img(14).jpg",
    card_no: 14,
    card_name: "컵 퀸",
  },
  {
    img_name: "../cards/img(15).jpg",
    card_no: 15,
    card_name: "펜타클 퀸",
  },
  {
    img_name: "../cards/img(16).jpg",
    card_no: 16,
    card_name: "여황제",
  },
  {
    img_name: "../cards/img(17).jpg",
    card_no: 17,
    card_name: "소드 킹",
  },
  {
    img_name: "../cards/img(18).jpg",
    card_no: 18,
    card_name: "완드 퀸",
  },
  {
    img_name: "../cards/img(19).jpg",
    card_no: 19,
    card_name: "컵 킹",
  },
  {
    img_name: "../cards/img(20).jpg",
    card_no: 20,
    card_name: "펜타클 킹",
  },
  {
    img_name: "../cards/img(21).jpg",
    card_no: 21,
    card_name: "황제",
  },
  {
    img_name: "../cards/img(22).jpg",
    card_no: 22,
    card_name: "교황",
  },
  {
    img_name: "../cards/img(23).jpg",
    card_no: 23,
    card_name: "연인",
  },
  {
    img_name: "../cards/img(24).jpg",
    card_no: 24,
    card_name: "전차",
  },
  {
    img_name: "../cards/img(25).jpg",
    card_no: 25,
    card_name: "힘",
  },
  {
    img_name: "../cards/img(26).jpg",
    card_no: 26,
    card_name: "은둔자",
  },
  {
    img_name: "../cards/img(27).jpg",
    card_no: 27,
    card_name: "운명의 수레바퀴",
  },
  {
    img_name: "../cards/img(28).jpg",
    card_no: 28,
    card_name: "정의",
  },
  {
    img_name: "../cards/img(29).jpg",
    card_no: 29,
    card_name: "거꾸로 매달린 자",
  },
  {
    img_name: "../cards/img(30).jpg",
    card_no: 30,
    card_name: "죽음",
  },
  {
    img_name: "../cards/img(31).jpg",
    card_no: 31,
    card_name: "절제",
  },
  {
    img_name: "../cards/img(32).jpg",
    card_no: 32,
    card_name: "악마",
  },
  {
    img_name: "../cards/img(33).jpg",
    card_no: 33,
    card_name: "탑",
  },
  {
    img_name: "../cards/img(34).jpg",
    card_no: 34,
    card_name: "별",
  },
  {
    img_name: "../cards/img(35).jpg",
    card_no: 35,
    card_name: "달",
  },
  {
    img_name: "../cards/img(36).jpg",
    card_no: 36,
    card_name: "태양",
  },
  {
    img_name: "../cards/img(37).jpg",
    card_no: 37,
    card_name: "심판",
  },
  {
    img_name: "../cards/img(38).jpg",
    card_no: 38,
    card_name: "세계",
  },
  {
    img_name: "../cards/img(39).jpg",
    card_no: 39,
    card_name: "소드 1",
  },
  {
    img_name: "../cards/img(40).jpg",
    card_no: 40,
    card_name: "소드 2",
  },
  {
    img_name: "../cards/img(41).jpg",
    card_no: 41,
    card_name: "소드 3",
  },
  {
    img_name: "../cards/img(42).jpg",
    card_no: 42,
    card_name: "소드 4",
  },
  {
    img_name: "../cards/img(43).jpg",
    card_no: 43,
    card_name: "소드 5",
  },
  {
    img_name: "../cards/img(44).jpg",
    card_no: 44,
    card_name: "소드 6",
  },
  {
    img_name: "../cards/img(45).jpg",
    card_no: 45,
    card_name: "소드 7",
  },
  {
    img_name: "../cards/img(46).jpg",
    card_no: 46,
    card_name: "소드 8",
  },
  {
    img_name: "../cards/img(47).jpg",
    card_no: 47,
    card_name: "소드 9",
  },
  {
    img_name: "../cards/img(48).jpg",
    card_no: 48,
    card_name: "소드 10",
  },
  {
    img_name: "../cards/img(49).jpg",
    card_no: 49,
    card_name: "완드 1",
  },
  {
    img_name: "../cards/img(50).jpg",
    card_no: 50,
    card_name: "완드 2",
  },
  {
    img_name: "../cards/img(51).jpg",
    card_no: 51,
    card_name: "완드 3",
  },
  {
    img_name: "../cards/img(52).jpg",
    card_no: 52,
    card_name: "완드 4",
  },
  {
    img_name: "../cards/img(53).jpg",
    card_no: 53,
    card_name: "완드 5",
  },
  {
    img_name: "../cards/img(54).jpg",
    card_no: 54,
    card_name: "완드 6",
  },
  {
    img_name: "../cards/img(55).jpg",
    card_no: 55,
    card_name: "완드 7",
  },
  {
    img_name: "../cards/img(56).jpg",
    card_no: 56,
    card_name: "완드 8",
  },
  {
    img_name: "../cards/img(57).jpg",
    card_no: 57,
    card_name: "완드 9",
  },
  {
    img_name: "../cards/img(58).jpg",
    card_no: 58,
    card_name: "완드 10",
  },
  {
    img_name: "../cards/img(59).jpg",
    card_no: 59,
    card_name: "컵 1",
  },
  {
    img_name: "../cards/img(60).jpg",
    card_no: 60,
    card_name: "컵 2",
  },
  {
    img_name: "../cards/img(61).jpg",
    card_no: 61,
    card_name: "컵 3",
  },
  {
    img_name: "../cards/img(62).jpg",
    card_no: 62,
    card_name: "컵 4",
  },
  {
    img_name: "../cards/img(63).jpg",
    card_no: 63,
    card_name: "컵 5",
  },
  {
    img_name: "../cards/img(64).jpg",
    card_no: 64,
    card_name: "컵 6",
  },
  {
    img_name: "../cards/img(65).jpg",
    card_no: 65,
    card_name: "컵 7",
  },
  {
    img_name: "../cards/img(66).jpg",
    card_no: 66,
    card_name: "컵 8",
  },
  {
    img_name: "../cards/img(67).jpg",
    card_no: 67,
    card_name: "컵 9",
  },
  {
    img_name: "../cards/img(68).jpg",
    card_no: 68,
    card_name: "컵 10",
  },
  {
    img_name: "../cards/img(69).jpg",
    card_no: 69,
    card_name: "펜타클 1",
  },
  {
    img_name: "../cards/img(70).jpg",
    card_no: 70,
    card_name: "펜타클 2",
  },
  {
    img_name: "../cards/img(71).jpg",
    card_no: 71,
    card_name: "펜타클 3",
  },
  {
    img_name: "../cards/img(72).jpg",
    card_no: 72,
    card_name: "펜타클 4",
  },
  {
    img_name: "../cards/img(73).jpg",
    card_no: 73,
    card_name: "펜타클 5",
  },
  {
    img_name: "../cards/img(74).jpg",
    card_no: 74,
    card_name: "펜타클 6",
  },
  {
    img_name: "../cards/img(75).jpg",
    card_no: 75,
    card_name: "펜타클 7",
  },
  {
    img_name: "../cards/img(76).jpg",
    card_no: 76,
    card_name: "펜타클 8",
  },
  {
    img_name: "../cards/img(77).jpg",
    card_no: 77,
    card_name: "펜타클 9",
  },
  {
    img_name: "../cards/img(78).jpg",
    card_no: 78,
    card_name: "펜타클 10",
  },
];

export const symbolList: tarotType[] = [
  {
    img_name: "../symbol/symbol(1).jpg",
    card_no: 1,
    card_name: "01.전사",
  },
  {
    img_name: "../symbol/symbol(2).jpg",
    card_no: 2,
    card_name: "02.연인",
  },
  {
    img_name: "../symbol/symbol(3).jpg",
    card_no: 3,
    card_name: "03.중재자",
  },
  {
    img_name: "../symbol/symbol(4).jpg",
    card_no: 4,
    card_name: "04.어머니",
  },
  {
    img_name: "../symbol/symbol(5).jpg",
    card_no: 5,
    card_name: "05.자존심",
  },
  {
    img_name: "../symbol/symbol(6).jpg",
    card_no: 6,
    card_name: "06.봉사자",
  },
  {
    img_name: "../symbol/symbol(7).jpg",
    card_no: 7,
    card_name: "07.파트너",
  },
  {
    img_name: "../symbol/symbol(8).jpg",
    card_no: 8,
    card_name: "08.유혹자",
  },
  {
    img_name: "../symbol/symbol(9).jpg",
    card_no: 9,
    card_name: "09.선교사",
  },
  {
    img_name: "../symbol/symbol(10).jpg",
    card_no: 10,
    card_name: "10.마스터",
  },
  {
    img_name: "../symbol/symbol(11).jpg",
    card_no: 11,
    card_name: "11.어릿광대",
  },
  {
    img_name: "../symbol/symbol(12).jpg",
    card_no: 12,
    card_name: "12.천사",
  },
  {
    img_name: "../symbol/symbol(13).jpg",
    card_no: 13,
    card_name: "13.반항",
  },
  {
    img_name: "../symbol/symbol(14).jpg",
    card_no: 14,
    card_name: "14.이브의 두얼굴",
  },
  {
    img_name: "../symbol/symbol(15).jpg",
    card_no: 15,
    card_name: "15.분명히 말하기",
  },
  {
    img_name: "../symbol/symbol(16).jpg",
    card_no: 16,
    card_name: "16.양립할 수 없는",
  },
  {
    img_name: "../symbol/symbol(17).jpg",
    card_no: 17,
    card_name: "17.돌봄",
  },
  {
    img_name: "../symbol/symbol(18).jpg",
    card_no: 18,
    card_name: "18.가족",
  },
  {
    img_name: "../symbol/symbol(19).jpg",
    card_no: 19,
    card_name: "19.낙태",
  },
  {
    img_name: "../symbol/symbol(20).jpg",
    card_no: 20,
    card_name: "20.므네모스네",
  },
  {
    img_name: "../symbol/symbol(21).jpg",
    card_no: 21,
    card_name: "21.얼음여왕",
  },
  {
    img_name: "../symbol/symbol(22).jpg",
    card_no: 22,
    card_name: "21.해방",
  },
  {
    img_name: "../symbol/symbol(23).jpg",
    card_no: 23,
    card_name: "23.잠자는 미인",
  },
  {
    img_name: "../symbol/symbol(24).jpg",
    card_no: 24,
    card_name: "24.전투",
  },
  {
    img_name: "../symbol/symbol(25).jpg",
    card_no: 25,
    card_name: "25.여왕",
  },
  {
    img_name: "../symbol/symbol(26).jpg",
    card_no: 26,
    card_name: "26.배우(연기)",
  },
  {
    img_name: "../symbol/symbol(27).jpg",
    card_no: 27,
    card_name: "27.병든 왕",
  },
  {
    img_name: "../symbol/symbol(28).jpg",
    card_no: 28,
    card_name: "28.웨딩(결혼)",
  },
  {
    img_name: "../symbol/symbol(29).jpg",
    card_no: 29,
    card_name: "29.마법사",
  },
  {
    img_name: "../symbol/symbol(30).jpg",
    card_no: 30,
    card_name: "30.운명의 신",
  },
  {
    img_name: "../symbol/symbol(31).jpg",
    card_no: 31,
    card_name: "31. 짐",
  },
  {
    img_name: "../symbol/symbol(32).jpg",
    card_no: 32,
    card_name: "32.몰락",
  },
  {
    img_name: "../symbol/symbol(33).jpg",
    card_no: 33,
    card_name: "33.은퇴",
  },
  {
    img_name: "../symbol/symbol(34).jpg",
    card_no: 34,
    card_name: "34.성애",
  },
  {
    img_name: "../symbol/symbol(35).jpg",
    card_no: 35,
    card_name: "35.과거 죄수를 매던 형국",
  },
  {
    img_name: "../symbol/symbol(36).jpg",
    card_no: 36,
    card_name: "36.죄책감",
  },
  {
    img_name: "../symbol/symbol(37).jpg",
    card_no: 37,
    card_name: "37.불일치",
  },
  {
    img_name: "../symbol/symbol(38).jpg",
    card_no: 38,
    card_name: "38.흡혈귀",
  },
  {
    img_name: "../symbol/symbol(39).jpg",
    card_no: 39,
    card_name: "39.십자군",
  },
  {
    img_name: "../symbol/symbol(40).jpg",
    card_no: 40,
    card_name: "40.방해",
  },
  {
    img_name: "../symbol/symbol(41).jpg",
    card_no: 41,
    card_name: "41.사악한 문제 창조자",
  },
  {
    img_name: "../symbol/symbol(42).jpg",
    card_no: 42,
    card_name: "42.확실한 바보",
  },
  {
    img_name: "../symbol/symbol(43).jpg",
    card_no: 43,
    card_name: "43.황금소녀",
  },
  {
    img_name: "../symbol/symbol(44).jpg",
    card_no: 44,
    card_name: "44.집착",
  },
  {
    img_name: "../symbol/symbol(45).jpg",
    card_no: 45,
    card_name: "45.황금빛 새장",
  },
  {
    img_name: "../symbol/symbol(46).jpg",
    card_no: 46,
    card_name: "46.꼭두각시",
  },
  {
    img_name: "../symbol/symbol(47).jpg",
    card_no: 47,
    card_name: "47.물질과 영혼",
  },
  {
    img_name: "../symbol/symbol(48).jpg",
    card_no: 48,
    card_name: "48.창조에 대한 책임",
  },
  {
    img_name: "../symbol/symbol(49).jpg",
    card_no: 49,
    card_name: "49.작별",
  },
  {
    img_name: "../symbol/symbol(50).jpg",
    card_no: 50,
    card_name: "50.영원들의 정원",
  },
  {
    img_name: "../symbol/symbol(51).jpg",
    card_no: 51,
    card_name: "51.전략가",
  },
  {
    img_name: "../symbol/symbol(52).jpg",
    card_no: 52,
    card_name: "52.허영에 찬 장터",
  },
  {
    img_name: "../symbol/symbol(53).jpg",
    card_no: 53,
    card_name: "53.얼룩옷을 입은 피리부는 사람",
  },
  {
    img_name: "../symbol/symbol(54).jpg",
    card_no: 54,
    card_name: "54.스승과 제자",
  },
  {
    img_name: "../symbol/symbol(55).jpg",
    card_no: 55,
    card_name: "55.고통",
  },
  {
    img_name: "../symbol/symbol(56).jpg",
    card_no: 56,
    card_name: "56.꿈꾸는 존니",
  },
  {
    img_name: "../symbol/symbol(57).jpg",
    card_no: 57,
    card_name: "57.침묵",
  },
  {
    img_name: "../symbol/symbol(58).jpg",
    card_no: 58,
    card_name: "58.관계속의 일상생활",
  },
  {
    img_name: "../symbol/symbol(59).jpg",
    card_no: 59,
    card_name: "59.가책",
  },
  {
    img_name: "../symbol/symbol(60).jpg",
    card_no: 60,
    card_name: "60.심문",
  },
  {
    img_name: "../symbol/symbol(61).jpg",
    card_no: 61,
    card_name: "61.두려움",
  },
  {
    img_name: "../symbol/symbol(62).jpg",
    card_no: 62,
    card_name: "62.격노",
  },
  {
    img_name: "../symbol/symbol(63).jpg",
    card_no: 63,
    card_name: "63.속임수",
  },
  {
    img_name: "../symbol/symbol(64).jpg",
    card_no: 64,
    card_name: "64.재난",
  },
  {
    img_name: "../symbol/symbol(65).jpg",
    card_no: 65,
    card_name: "65.결합",
  },
  {
    img_name: "../symbol/symbol(66).jpg",
    card_no: 66,
    card_name: "66.슬픔",
  },
  {
    img_name: "../symbol/symbol(67).jpg",
    card_no: 67,
    card_name: "67.분리",
  },
  {
    img_name: "../symbol/symbol(68).jpg",
    card_no: 68,
    card_name: "68.왕의 두자녀",
  },
  {
    img_name: "../symbol/symbol(69).jpg",
    card_no: 69,
    card_name: "69.검은 무리",
  },
  {
    img_name: "../symbol/symbol(70).jpg",
    card_no: 70,
    card_name: "70.우울",
  },
  {
    img_name: "../symbol/symbol(71).jpg",
    card_no: 71,
    card_name: "71.불사조",
  },
  {
    img_name: "../symbol/symbol(72).jpg",
    card_no: 72,
    card_name: "72.그릇된 후광",
  },
  {
    img_name: "../symbol/symbol(73).jpg",
    card_no: 73,
    card_name: "73.죄의 고백",
  },
  {
    img_name: "../symbol/symbol(74).jpg",
    card_no: 74,
    card_name: "74.양자도약",
  },
  {
    img_name: "../symbol/symbol(75).jpg",
    card_no: 75,
    card_name: "75.포로(구속)",
  },
  {
    img_name: "../symbol/symbol(76).jpg",
    card_no: 76,
    card_name: "76.무녀(파티아)",
  },
  {
    img_name: "../symbol/symbol(77).jpg",
    card_no: 77,
    card_name: "77.모이라(운명의 여신)",
  },
  {
    img_name: "../symbol/symbol(78).jpg",
    card_no: 78,
    card_name: "성배의 의문",
  },
];
