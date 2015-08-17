var wyQuiz = {
  codeName: "wy-Index",
  title: "廢青指數測驗",
  startText: "開始",
  url: 'http://dprktest.initiumlab.com/',
  bannerImgRelativePath: './images/banner_hant.png',
  coverImgRelativePath: './images/cover.png',
  lang: 'zh-hant',

  totalScore: 0
};

wyQuiz.survey = [
  {
    "serial": 0,
    "questionText": "政府派錢六千元，我會立即search廉價機票，計劃去旅行",
    "imagePath": "images/optionImage1.png",
    "options": [
      {"optionScore": 3, "optionText":"很同意"},
      {"optionScore": 2, "optionText":"較同意"},
      {"optionScore": 1, "optionText":"較反對"},
      {"optionScore": 0, "optionText":"很反對"},
    ]
  },
  {
    "serial": 1,
    "questionText": "就算老闆加錢要求我OT，我都寧願選擇去friend的party",
    "options": [
      {"optionScore": 3, "optionText":"很同意"},
      {"optionScore": 2, "optionText":"較同意"},
      {"optionScore": 1, "optionText":"較反對"},
      {"optionScore": 0, "optionText":"很反對"},
    ]
  },
  {
    "serial": 2,
    "questionText": "每當要shopping，我就會立即想到上網淘寶",
    "imagePath": "images/optionImage1.png",
    "options": [
      {"optionScore": 3, "optionText":"很同意"},
      {"optionScore": 2, "optionText":"較同意"},
      {"optionScore": 1, "optionText":"較反對"},
      {"optionScore": 0, "optionText":"很反對"},
    ]
  },
  {
    "serial": 3,
    "questionText": "我覺得我的性別是",
    "options": [
      {"optionScore": 0, "optionText":"男"},
      {"optionScore": 0, "optionText":"女"},
      {"optionScore": 0, "optionText":"皆非"},
      {"optionScore": 0, "optionText":"不確定"},
    ]
  },
  {
    "serial": 4,
    "questionText": "我覺得自己一定可以賺夠錢買樓，等政府派公屋的都是Loser",
    "options": [
      {"optionScore": 0, "optionText":"很同意"},
      {"optionScore": 1, "optionText":"較同意"},
      {"optionScore": 2, "optionText":"較反對"},
      {"optionScore": 3, "optionText":"很反對"},
    ]
  },
  {
    "serial": 5,
    "questionText": "如果有得揀，我會想做李嘉誠，而不是王維基",
    "options": [
      {"optionScore": 0, "optionText":"很同意"},
      {"optionScore": 1, "optionText":"較同意"},
      {"optionScore": 2, "optionText":"較反對"},
      {"optionScore": 3, "optionText":"很反對"},
    ]
  },
  {
    "serial": 6,
    "questionText": "我認爲社會上大多數的成功青年其實都是「靠父幹」",
    "options": [
      {"optionScore": 3, "optionText":"很同意"},
      {"optionScore": 2, "optionText":"較同意"},
      {"optionScore": 1, "optionText":"較反對"},
      {"optionScore": 0, "optionText":"很反對"},
    ]
  },
  {
    "serial": 7,
    "questionText": "講真，我的歲數是",
    "options": [
      {"optionScore": 0, "optionText":"18歲以下"},
      {"optionScore": 0, "optionText":"18-25歲"},
      {"optionScore": 0, "optionText":"26-30歲"},
      {"optionScore": 0, "optionText":"30歲以上"},
    ]
  },
  {
    "serial": 8,
    "questionText": "當父母批評我班friend好hea或好頹，我會減少同這班朋友來往",
    "options": [
      {"optionScore": 0, "optionText":"很同意"},
      {"optionScore": 1, "optionText":"較同意"},
      {"optionScore": 2, "optionText":"較反對"},
      {"optionScore": 3, "optionText":"很反對"},
    ]
  },
  {
    "serial": 9,
    "questionText": "無論其他人怎樣評價我，都不會改變我對自己的認知",
    "options": [
      {"optionScore": 3, "optionText":"很同意"},
      {"optionScore": 2, "optionText":"較同意"},
      {"optionScore": 1, "optionText":"較反對"},
      {"optionScore": 0, "optionText":"很反對"},
    ]
  },
  {
    "serial": 10,
    "questionText": "特首選舉，怎麼都要有公民提名",
    "options": [
      {"optionScore": 3, "optionText":"很同意"},
      {"optionScore": 2, "optionText":"較同意"},
      {"optionScore": 1, "optionText":"較反對"},
      {"optionScore": 0, "optionText":"很反對"},
    ]
  },
  {
    "serial": 11,
    "questionText": "其實我讀書讀到",
    "options": [
      {"optionScore": 0, "optionText":"小學畢業"},
      {"optionScore": 0, "optionText":"中學畢業"},
      {"optionScore": 0, "optionText":"大專畢業"},
      {"optionScore": 0, "optionText":"大學或以上"},
    ]
  },
  {
    "serial": 12,
    "questionText": "同父母吵架，我一定會揸緊宗旨，堅持立場",
    "options": [
      {"optionScore": 0, "optionText":"很同意"},
      {"optionScore": 1, "optionText":"較同意"},
      {"optionScore": 2, "optionText":"較反對"},
      {"optionScore": 3, "optionText":"很反對"},
    ]
  },
  {
    "serial": 13,
    "questionText": "要爭取社會公義，我覺得上街遊行、集會，比辯論更直接有效",
    "options": [
      {"optionScore": 3, "optionText":"很同意"},
      {"optionScore": 2, "optionText":"較同意"},
      {"optionScore": 1, "optionText":"較反對"},
      {"optionScore": 0, "optionText":"很反對"},
    ]
  },
  {
    "serial": 14,
    "questionText": "比起報紙、雜誌，我更喜歡從網絡獲取資訊",
    "options": [
      {"optionScore": 3, "optionText":"很同意"},
      {"optionScore": 2, "optionText":"較同意"},
      {"optionScore": 1, "optionText":"較反對"},
      {"optionScore": 0, "optionText":"很反對"},
    ]
  },
  {
    "serial": 15,
    "questionText": "有人說過我是廢青",
    "options": [
      {"optionScore": 0, "optionText":"是"},
      {"optionScore": 0, "optionText":"否"},
    ]
  },
  {
    "serial": 16,
    "questionText": "情到濃時，我覺得在公眾地方進行性行為是可以接受的",
    "options": [
      {"optionScore": 3, "optionText":"很同意"},
      {"optionScore": 2, "optionText":"較同意"},
      {"optionScore": 1, "optionText":"較反對"},
      {"optionScore": 0, "optionText":"很反對"},
    ]
  },
  {
    "serial": 17,
    "questionText": "我覺得援交、伴遊，與做侍應一樣，只是賺錢的兼職",
    "options": [
      {"optionScore": 3, "optionText":"很同意"},
      {"optionScore": 2, "optionText":"較同意"},
      {"optionScore": 1, "optionText":"較反對"},
      {"optionScore": 0, "optionText":"很反對"},
    ]
  },
  {
    "serial": 18,
    "questionText": "除了男女關係，我認為男男或女女，都不是正常戀愛",
    "options": [
      {"optionScore": 0, "optionText":"很同意"},
      {"optionScore": 1, "optionText":"較同意"},
      {"optionScore": 2, "optionText":"較反對"},
      {"optionScore": 3, "optionText":"很反對"},
    ]
  },
  {
    "serial": 19,
    "questionText": "有人說過我是廢青",
    "options": [
      {"optionScore": 0, "optionText":"是"},
      {"optionScore": 0, "optionText":"否"},
    ]
  },
];

