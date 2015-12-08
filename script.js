/**
 * Created by viktoriya on 30.11.15.
 */
var punch = document.getElementById('punch');
var cheers = document.getElementById('cheers');
var filters = ['grayscale',
  'blur',
  'saturate',
  'sepia',
  'hue',
  'invert',
  'none'];

function PunchApp(name, sound) {
    this.kitty = new Image();
    this.kitty.src = 'img/' + name;
    this.wrap = document.getElementById('blocks-wrap');
    this.sound = function() {
      sound.play();
    };
}

PunchApp.prototype.createImgBlocks = function() {
  for (var i=0; i < 25; i++) {
    var div = document.createElement('div');
    div.className = "block-item";
    div.setAttribute('data-played', false);
    div.innerHTML = "<img class='"+ this.setFilter()+"' src="+this.kitty.src +"/>";

    var currBlock = this.wrap.appendChild(div);
    currBlock.addEventListener('click', this.click);
    currBlock.addEventListener('click', this.sound);
  }
};

PunchApp.prototype.click = function() {
  if (this.getAttribute('data-played') == 'false') {
    (PunchApp.prototype.setTimer.bind(this))();
    this.setAttribute('data-played', true);
  } else {
    (PunchApp.prototype.clearTimer.bind(this))();
    this.setAttribute('data-played', false);
  }
};

PunchApp.prototype.setTimer = function() {
  this.timer = setInterval(function(self) {
    (PunchApp.prototype.replaceImg.bind(self))();
  }, 500, this);
};

PunchApp.prototype.clearTimer = function() {
  clearInterval(this.timer);
  this.timer = 0;
};

PunchApp.prototype.replaceImg  = function() {
  this.getElementsByTagName('img')[0].className = PunchApp.prototype.setFilter();
};

PunchApp.prototype.setFilter = function() {
  return filters[Math.floor(Math.random()*filters.length)];
}



Window.onload = (function() {
  var kabay = new PunchApp('kitty.jpg', punch);
  kabay.createImgBlocks();

  var christina = new PunchApp('xr.jpg', cheers);
  christina.createImgBlocks();
})();