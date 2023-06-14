let foods = [
  ['불고기', '찜닭', '닭볶음탕', '스테이크', '월남쌈', '수육', '아귀찜', '쌈밥', '낙지볶음'],
  ['된장찌개', '김치찌개', '부대찌개', '순두부찌개', '청국장찌개', '동태찌개', '비지찌개', '고추장찌개', '오징어찌개'],
  ['카레', '비빔밥', '오므라이스', '김치볶음밥', '제육덮밥', '연어덮밥', '치킨마요덮밥', '돈부리', '오징어덮밥'],
  ['라면', '토마토 스파게티', '크림 스파게티', '냉면', '잔치국수', '비빔국수', '칼국수', '우동', '콩국수', '짜장면', '짬뽕', '쌀국수'],
  ['육개장', '닭개장', '떡국', '소고기무국', '시레깃국', '갈비탕', '추어탕', '삼계탕', '대구탕'],
  ['샌드위치', '프렌치 토스트', '떡볶이', '시리얼', '샐러드', '밥버거', '핫도그', '편의점 도시락', '김밥', '유부초밥'],
  ['순대국', '콩나물 국밥', '북엇국', '홍합탕', '뼈해장국', '대파 라면', '매생이국', '선지 해장국']
]

let teuksik = ['불고기', '찜닭', '닭볶음탕', '스테이크', '월남쌈', '수육', '아귀찜', '쌈밥', '낙지볶음'];  //9
let jjigae = ['된장찌개', '김치찌개', '부대찌개', '순두부찌개', '청국장찌개', '동태찌개', '비지찌개', '고추장찌개', '오징어찌개']; //9
let bap = ['카레', '비빔밥', '오므라이스', '김치볶음밥', '제육덮밥', '연어덮밥', '치킨마요덮밥', '돈부리', '오징어덮밥']; //9
let myeon = ['라면', '토마토 스파게티', '크림 스파게티', '냉면', '잔치국수', '비빔국수', '칼국수', '우동', '콩국수', '짜장면', '짬뽕', '쌀국수']; //12
let gukTang = ['육개장', '닭개장', '떡국', '소고기무국', '시레깃국', '갈비탕', '추어탕', '삼계탕', '대구탕'] ; //9
let tvDinner = ['샌드위치', '프렌치 토스트', '떡볶이', '시리얼', '샐러드', '밥버거', '핫도그', '편의점 도시락', '김밥', '유부초밥']; //10
let hangoverFood = ['순대국', '콩나물 국밥', '북엇국', '홍합탕', '뼈해장국', '대파 라면', '매생이국', '선지 해장국']; //8

let food = ['불고기', '찜닭', '닭볶음탕', '스테이크', '월남쌈', '수육', '아귀찜', '쌈밥', '낙지볶음',
'된장찌개', '김치찌개', '부대찌개', '순두부찌개', '청국장찌개',
'카레', '비빔밥', '오므라이스', '김치볶음밥', '제육덮밥', '연어덮밥', '치킨마요덮밥', '라면', '토마토 스파게티', '크림 스파게티', '냉면', '잔치국수', '비빔국수', '칼국수', '우동', '콩국수', '짜장면', '짬뽕', '쌀국수',
'샌드위치', '프렌치 토스트', '떡볶이', '시리얼', '샐러드', '밥버거', '핫도그', '편의점 도시락', '김밥', '유부초밥'];


let select = ['랜덤', '종료'];


let randFoodType = 0;
let rand1 = 0;

let coice1 = 0;

// let readline = require('readline');

// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// console.log("메뉴 추천");

// let choiceMainLoop = function () {
//   console.log("오늘의 메뉴를 추천해드립니다.");
//   console.log(select, " 중 입력해주세요.\n");
//   rl.question('', function (userInput) {
//     if (userInput == '종료')
//     {
//       console.log("Have a good day");
//       return rl.close();
//     }
//     else if(userInput == '랜덤')
//     {
//       choiceRandom();
//     }

//     else
//     {
//       console.log("다시 입력해주세요.");
//       choiceMainLoop();
//     }
//   });
// };

// let choiceRandom = function() {
  
  
//   rand1 = randFoodType = randomNum(0,43);
  
//   rl.question("'시작' '다시하기' '메인화면' '종료'\n", function(userInput)
//   {
//     //console.log("오늘의 메뉴는 ", food[rand1], "입니다");

//     if (userInput == '종료')
//     {
//       return rl.close();
//     }

//     else if (userInput == '시작')
//     {
//       console.log("오늘의 메뉴는 ", food[rand1], "입니다");
//       again();
//     }

//     else if (userInput == '메인화면')
//     {
//       choiceMainLoop();
//     }

//     else if(userInput == '다시하기')
//     {
//       choiceRandom();
//     }

//     else
//     {
//       console.log("다시 입력해주세요.");
//       choiceRandom();
//     }
    
    
//   });
// }

// let again = function()
// {
//   rl.question("'다시하기' '메인화면' '종료'\n", function(userInput)
//   {
//     if (userInput == '종료')
//     {
//       return rl.close();
//     }

//     else if (userInput == '메인화면')
//     {
//       choiceMainLoop();
//     }

//     else if(userInput == '다시하기')
//     {
//       choiceRandom();
//     }

//     else
//     {
//       console.log("다시 입력해주세요.");
//       again();
//     }
//   });
// }

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function coice() {
  
  const genderNodeList
  = document.getElementsByName('select');
  
  genderNodeList.forEach((node) => {
    if(node.checked)  {
      document.getElementById('selectResult').innerText
        = node.value;
      coice1 = node.value;
    }
  })
}

// var audio = new Audio('sound/button.mp3');

function randomFood(){
  // audio.paly();
  const genderNodeList
  = document.getElementsByName('select');
  
  genderNodeList.forEach((node) => {
    if(node.checked)  {
      coice1 = node.value;
    }
  })
  if(coice1 == 0){
    nomal();
  }else{
    let radom1 = randomNum(0, foods[coice1-1].length)
    document.getElementById('result').innerText
      = foods[coice1-1][radom1];
  }
}

function nomal(){
  let arg1 = randomNum(0,43);
  document.getElementById("result").innerText = food[arg1];
}
// inpput : 1 특식 2 지개 3 덮밥/볶음 4 면 5 국 6간편식 7 해장
// array : 0 특식 1 지개 2 덮밥/볶음 3 면 4 국 5간편식 6 해장

function makeAlert() {
  alert("미안해요! 없어요!");
}