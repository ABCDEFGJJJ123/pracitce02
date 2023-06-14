let foodType = ['특식', '찌개', '밥류(덮밥 / 볶음밥)', '면', '국류(국 / 탕)', '간편식', '해장']; //7
let teuksik = ['불고기', '찜닭', '닭볶음탕', '스테이크', '월남쌈', '수육', '아귀찜', '쌈밥', '낙지볶음'];  //9
let jjigae = ['된장찌개', '김치찌개', '부대찌개', '순두부찌개', '청국장찌개', '동태찌개', '비지찌개', '고추장찌개', '오징어찌개']; //9
let bap = ['카레', '비빔밥', '오므라이스', '김치볶음밥', '제육덮밥', '연어덮밥', '치킨마요덮밥', '돈부리', '오징어덮밥']; //9
let myeon = ['라면', '토마토 스파게티', '크림 스파게티', '냉면', '잔치국수', '비빔국수', '칼국수', '우동', '콩국수', '짜장면', '짬뽕', '쌀국수']; //12
let gukTang = ['육개장', '닭개장', '떡국', '소고기무국', '시레깃국', '갈비탕', '추어탕', '삼계탕', '대구탕'] ; //9
let tvDinner = ['샌드위치', '프렌치 토스트', '떡볶이', '시리얼', '샐러드', '밥버거', '핫도그', '편의점 도시락', '김밥', '유부초밥']; //10
let hangoverFood = ['순대국', '콩나물 국밥', '북엇국', '홍합탕', '뼈해장국', '대파 라면', '매생이국', '선지 해장국']; //8



let select = ['랜덤', '메뉴 고르기', '종료'];


let randFoodType = 0;
let rand1 = 0;
let i = 0;

let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("메뉴 추천");

let choiceMainLoop = function () {
  console.log(select, " 중 입력해주세요.\n");
  rl.question('', function (userInput) {
    if (userInput == '종료')
    {
      console.log("Have a good day");
      return rl.close();
    }

    else if(userInput == '메뉴 고르기' || userInput == '메뉴고르기')
    {
      choiceMenu();
    }

    else if(userInput == '랜덤')
    {
      choiceRandom();
    }

    else
    {
      console.log("다시 입력해주세요.");
      choiceMainLoop();
    }
  });
};

let choiceMenu = function () {
  console.log(foodType, " 중 어떤 메뉴를 선택하시겠습니까? '종료'를 입력하시면 종료 됩니다.\n");
  rl.question('', function(userInput)
  {

    if (userInput == '종료')
    {
      return rl.close();
    }

    else if (userInput == foodType[0] || userInput == '1')
      choiceTeuksik(); //특식
    
    else if (userInput == foodType[1] || userInput == '2')
      choiceJjigae(); //찌개
    
    else if (userInput == foodType[2] || userInput == '3' || userInput == '밥')
      choiceBap(); //덮밥/볶음밥
    
    else if (userInput == foodType[3] || userInput == '4')
      choiceMyeon(); //면
    
    else if (userInput == foodType[4] || userInput == '5' || userInput == '국')
      choiceGukTang(); //국/탕
    
    else if (userInput == foodType[5] || userInput == '6')
      choiceTvDinner(); //간편식
    
    else if (userInput == foodType[6] || userInput == '7')
      choiceHangoverFood(); //해장
    
    else
    {
      console.log("다시 입력해주세요.");
      choiceMenu();
    }
  });
}

let choiceTeuksik = function() //특식
{
  console.log(foodType[0]);
  console.log(teuksik);
  rl.question(" 중에 선택해주세요. \n '메인화면'을 입력하시면 메인화면으로 돌아갑니다. '종료'를 입력하시면 종료됩니다.\n", function(userInput)
  {

    if (userInput == '종료')
    {
      return rl.close();
    }

    else if (userInput == '메인화면')
    {
      choiceMainLoop();
    }
    
    else if(userInput == teuksik[0])
    {
      console.log("오늘의 메뉴는 ", teuksik[0], " 입니다.");
    }
    else if (!(userInput == teuksik[i]))
    {
      for (let i = 1; i < 10; i++)
      {
        if (userInput == teuksik[i])
        {
          console.log("오늘의 메뉴는 ", teuksik[i], " 입니다.");
        }
      }
    }
    
    else 
    {
      console.log("다시 입력해주세요.");
      choiceTeuksik();
    }

    quitQuestion();

  });
}

let choiceJjigae = function() //찌개
{
  console.log(foodType[1]);
  console.log(jjigae);
  rl.question(" 중에 선택해주세요.'메인화면'을 입력하시면 메인화면으로 돌아갑니다. '종료'를 입력하시면 종료 됩니다.\n", function(userInput)
  {
    if (userInput == '종료')
    {
      return rl.close();
    }
    
    else if (userInput == '메인화면')
    {
      choiceMainLoop();
    }

    else if(userInput == jjigae[0])
      console.log("오늘의 메뉴는 ", jjigae[0], " 입니다.");
    
    else if (!(userInput == jjigae[i]))
    {
      for (let i = 1; i < 10; i++)
      {
        if (userInput == jjigae[i])
        {
          console.log("오늘의 메뉴는 ", jjigae[i], " 입니다.");
        }
      }
    }
      
    else
    {
      console.log("다시 입력해주세요.");
      choiceJjigae();
    }

    quitQuestion();
  });
}

let choiceBap = function() //덮밥/볶음밥
{
  console.log(foodType[2]);
  console.log(bap);
  rl.question(" 중에 선택해주세요. '메인화면'을 입력하시면 메인화면으로 돌아갑니다. '종료'를 입력하시면 종료 됩니다.\n", function(userInput)
  {
    if (userInput == '종료')
    {
      return rl.close();
    }

    else if (userInput == '메인화면')
    {
      choiceMainLoop();
    }

    else if(userInput == bap[0])
      console.log("오늘의 메뉴는 ", bap[0], " 입니다.");
    
    else if (!(userInput == bap[i]))
    {
      for (let i = 1; i < 10; i++)
      {
        if (userInput == bap[i])
        {
          console.log("오늘의 메뉴는 ", bap[i], " 입니다.");
        }
      }
    }

    else
    {
      console.log("다시 입력해주세요.");
      choiceBap();
    }

    quitQuestion();
  });
}

let choiceMyeon = function() //면
{
  console.log(foodType[3]);
  console.log(myeon);
  rl.question(" 중에 선택해주세요. '메인화면'을 입력하시면 메인화면으로 돌아갑니다. '종료'를 입력하시면 종료 됩니다.\n", function(userInput)
  {
    if (userInput == '종료')
    {
      return rl.close();
    }

    else if (userInput == '메인화면')
    {
      choiceMainLoop();
    }

    else if(userInput == myeon[0])
      console.log("오늘의 메뉴는 ", myeon[0], " 입니다.");
    
    else if (!(userInput == jjigae[i]))
    {
      for (let i = 1; i < 13; i++)
      {
        if (userInput == myeon[i])
        {
          console.log("오늘의 메뉴는 ", myeon[i], " 입니다.");
        }
      }
    }


    else
    {
      console.log("다시 입력해주세요.");
      choiceMyeon();
    }

    quitQuestion();
  });
}

let choiceGukTang = function() //국/탕
{
  console.log(foodType[4]);
  console.log(gukTang);
  rl.question(" 중에 선택해주세요. '메인화면'을 입력하시면 메인화면으로 돌아갑니다. '종료'를 입력하시면 종료 됩니다.\n", function(userInput)
  {
    if (userInput == '종료')
    {
      return rl.close();
    }

    else if (userInput == '메인화면')
    {
      choiceMainLoop();
    }

    else if(userInput == gukTang[0])
      console.log("오늘의 메뉴는 ", gukTang[0], " 입니다.");
    
    else if (!(userInput == jjigae[i]))
    {
      for (let i = 1; i < 10; i++)
      {
        if (userInput == gukTang[i])
        {
          console.log("오늘의 메뉴는 ", gukTang[i], " 입니다.");
        }
      }
    }

    else
    {
      console.log("다시 입력해주세요.");
      choiceGukTang();
    }

    quitQuestion();
  });
}

let choiceTvDinner = function() //간편식
{
  console.log(foodType[5]);
  console.log(tvDinner);
  rl.question(" 중에 선택해주세요. '메인화면'을 입력하시면 메인화면으로 돌아갑니다. '종료'를 입력하시면 종료 됩니다.\n", function(userInput)
  {
    if (userInput == '종료')
    {
      return rl.close();
    }

    else if (userInput == '메인화면')
    {
      choiceMainLoop();
    }

    else if(userInput == tvDinner[0])
      console.log("오늘의 메뉴는 ", tvDinner[0], " 입니다.");
    
    else if (!(userInput == tvDinner[i]))
    {
      for (let i = 1; i < 11; i++)
      {
        if (userInput == tvDinner[i])
        {
          console.log("오늘의 메뉴는 ", tvDinner[i], " 입니다.");
        }
      }
    }

    else
    {
      console.log("다시 입력해주세요.");
      choiceTvDinner();
    }

    quitQuestion();
  });
}

let choiceHangoverFood = function() //해장
{
  console.log(foodType[6]);
  console.log(hangoverFood);
  rl.question(" 중에 선택해주세요. '메인화면'을 입력하시면 메인화면으로 돌아갑니다. '종료'를 입력하시면 종료 됩니다.\n", function(userInput)
  {
    if (userInput == '종료')
    {
      return rl.close();
    }

    else if (userInput == '메인화면')
    {
      choiceMainLoop();
    }

    else if(userInput == hangoverFood[0])
      console.log("오늘의 메뉴는 ", hangoverFood[0], " 입니다.");
    
    else if (!(userInput == jjigae[i]))
    {
      for (let i = 1; i < 8; i++)
      {
        if (userInput == hangoverFood[i])
        {
          console.log("오늘의 메뉴는 ", hangoverFood[i], " 입니다.");
        }
      }
    }
      
    else
    {
      console.log("다시 입력해주세요.");
      choiceHangoverFood();
    }

    quitQuestion();
  });
}

let choiceRandom = function() {
  console.log("오늘의 메뉴를 추천해드립니다.");
  randFoodType = randomNum(0,7);

  if (randFoodType == 0)
  {
    rand1 = randomNum(0, 10);
    console.log("오늘의 메뉴는 ", teuksik[rand1], "입니다");
  }

  if (randFoodType == 1)
  {
    rand1 = randomNum(0, 10);
    console.log("오늘의 메뉴는 ", jjigae[rand1], " 입니다");
  }

  if (randFoodType == 2)
  {
    rand1 = randomNum(0, 10);
    console.log("오늘의 메뉴는 ", bap[rand1], " 입니다");
  }

  if (randFoodType == 3)
  {
    rand1 = randomNum(0, 13);
    console.log("오늘의 메뉴는 ", myeon[rand1], " 입니다");
  }

  if (randFoodType == 4)
  {
    rand1 = randomNum(0, 10);
    console.log("오늘의 메뉴는 ", gukTang[rand1], " 입니다");
  }

  if (randFoodType == 5)
  {
    rand1 = randomNum(0, 11);
    console.log("오늘의 메뉴는 ", tvDinner[rand1], " 입니다");
  }

  if (randFoodType == 6)
  {
    rand1 = randomNum(0, 9);
    console.log("오늘의 메뉴는 ", hangoverFood[rand1], " 입니다");
  }

  rl.question("'메인화면'을 입력하시면 메인화면으로 돌아갑니다. '종료'를 입력하시면 종료 됩니다.\n", function(userInput)
  {
    if (userInput == '종료')
    {
      return rl.close();
    }

    else if (userInput == '메인화면')
    {
      choiceMainLoop();
    }

    else
    {
      console.log("다시 입력해주세요.");
      choiceRandom();
    }
    
    
  });
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

let quitQuestion = function()
{
  rl.question("종료하시겠습니까? '네' 와 '아니요' 중에 선택해주세요.\n", function(userInput)
    {
      if (userInput == '네')
      {
        return rl.close();
      }

      else if(userInput == '아니요')
      {
        console.log("메인화면으로 돌아갑니다.\n");
        choiceMainLoop();
      }

      else
      {
        console.log("다시 입력해주세요.\n");
        quitQuestion();
      }
    });
}

choiceMainLoop();