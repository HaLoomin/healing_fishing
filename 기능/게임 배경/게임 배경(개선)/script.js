
  //게임시간을 다른기능에서 사용하기 위한 전역변수
  //게임 일
  var game_day = 0;
  //게임 시
  var game_hour = 0;
  //게임 분
  var game_min = 0;
  //1초에 2분씩 증가하는 게임 분
  var game_min_slow = 0;

  //기능: 게임시간
  function make_gametime() {
      //0.5초당 1분증가
      game_min = game_min + 1
      //60분이 되었을때 1시간 증가
      if (game_min == 60) {
          game_min = 0;
          game_hour = game_hour + 1;
      }
      //24시간이 되었을때 1일 증가
      if (game_hour == 24) {
          game_hour = 0;
          game_day = game_day + 1;
      }
      //게임시간 2분마다 업데이트 처리
      if (game_min % 2 == 0) {
          game_min_slow = game_min
      }

      //테스트용 출력코드 삭제요망
      var test2 = document.getElementById("gametime_now_slow");
      test2.innerText = "시간 : "+ game_day + " 일 " + game_hour + " 시 " + game_min_slow + " 분";
  }
  //0.5초마다 시간함수 실행
  setInterval(make_gametime, 500);


  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  
  let bgcolor = ["#b1e2e2", "#636888", "#b08fcc"];
  
  if (game_hour < 7) {
    ctx.fillStyle = bgcolor[1];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (game_hour >= 7) {
    ctx.fillStyle = bgcolor[2]; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (game_hour >= 12) {
    ctx.fillStyle = bgcolor[0];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (game_hour >= 18) {
    ctx.fillStyle = bgcolor[1];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
$(document).ready(function(){
  var stars = 800;
  var $stars = $(".stars");
  var r = 800;
  for(var i = 0; i < stars; i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function() {
    var cur = $(this);
    var s = 0.2 + (Math.random() * 1);
    var curR = r + (Math.random() * 300);
    cur.css({ 
      transformOrigin:"0 0 " + curR + "px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
       
    })
  })
})
setTimeout("fade_in()", 360000);
setTimeout("fade_in()", 700000);

function fade_in() {
  var stars = document.querySelector(".stars");
  stars.style.opacity = "1";
}
function fade_out() {
  var stars = document.querySelector(".stars");
  stars.style.opacity = "0";
}