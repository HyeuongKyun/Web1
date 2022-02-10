var Body = {
  SetColor : function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },

  SetBackgroundColor : function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
var Links = {
  SetColor : function (color){
    // var i = 0;
    // while (i < document.querySelectorAll('a').length){
    //   document.querySelectorAll('a')[i].style.color = color;
    //   i = i+1
    // } jQuery를 googleCDN을 통해 대처하기 위해 코드를 살려둠.
    $('a').css('color', color);
    }
  }

var Border = {
  h1TagSetColor : function (color){
    // document.getElementById('main').style.borderColor = color;
    $('#main').css('borderColor', color);
  },

  divIdSetColor : function (color){
    // document.getElementById('act').style.borderColor = color;
    $('#act').css('borderColor', color);
  }
}
var Ol = {
  SetColor : function(color){
  $('ol').css('color', color);
  }
}
function nightDayHandler(self){
  // var target = document.body;
  // var targetborder_left = document.getElementById('act');
  // var targetborder_bottom = document.getElementById('main');
  // var links = document.querySelectorAll('a');
  // 여기서 변수명을 지정해도 위 함수에서 지역변수를 가져다 쓸 수 없기 때문에 변수를 사용하지 않았습니다.
  if (self.value === 'night'){
    Body.SetBackgroundColor('black');
    Body.SetColor('white');

    self.value = 'day';

    Border.divIdSetColor('white');
    Border.h1TagSetColor('white');

    Ol.SetColor('powderblue');
    Links.SetColor('powderblue')

  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'night';

    Border.divIdSetColor('black');
    Border.h1TagSetColor('black');

    Ol.SetColor('gray');
    Links.SetColor('gray')
  }
}
