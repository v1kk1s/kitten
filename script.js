/**
 * Created by viktoriya on 30.11.15.
 */

Window.onload = (function() {
  var wrap = document.getElementById('blocks-wrap'),
    puss = [];

  puss[0] = new Image();
  puss[0].src = 'img/blue.jpg';
  puss[1] = new Image();
  puss[1].src = 'img/gray.jpg';
  puss[2] = new Image();
  puss[2].src = 'img/green.jpg';
  puss[3] = new Image();
  puss[3].src = 'img/navy.jpg';
  puss[4] = new Image();
  puss[4].src = 'img/red.jpg';
  puss[5] = new Image();
  puss[5].src = 'img/violet.jpg';
  puss[6] = new Image();
  puss[6].src = 'img/yellow.jpg';

  function click() {
    document.getElementById('punch').play();

    if (this.getAttribute('data-played') == 'false') {
      (setTimer.bind(this))();
      this.setAttribute('data-played', true);
    } else {
      (clearTimer.bind(this))();
      this.setAttribute('data-played', false);
    }

  }

  function setTimer() {
    this.timer = setInterval(function(self) {
      (replaceImg.bind(self))(puss[Math.floor(Math.random()*puss.length)]);
    }, 500, this);
  }

  function clearTimer() {
    clearInterval(this.timer);
    this.timer = 0;
  }

  function replaceImg (curr) {
    this.innerHTML = "<img src="+curr.src +"/>";
  }


  for (var i=0; i < 25; i++) {
    var photo = puss[Math.floor(Math.random()*puss.length)];
    var div = document.createElement('div');
    div.className = "block-item";
    div.setAttribute('data-played', false);
    div.innerHTML = "<img src="+photo.src +"/>";

    var currBlock = wrap.appendChild(div);
    currBlock.addEventListener('click', click);
  }


})();