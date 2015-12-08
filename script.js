/**
 * Created by viktoriya on 30.11.15.
 */

Window.onload = (function() {
  var wrap = document.getElementById('blocks-wrap'),
    filters = ['grayscale(1)',
                'blur(5px)',
                'saturate(500%)',
                'sepia(1)',
                'hue-rotate(180deg)',
                'invert(1)'],
    kitty = new Image();
    kitty.src = 'img/kitty.jpg';


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
      (replaceImg.bind(self))();
    }, 500, this);
  }

  function clearTimer() {
    clearInterval(this.timer);
    this.timer = 0;
  }

  function replaceImg () {
    this.innerHTML = "<img style='"+ setFilter()+"' src="+kitty.src +"/>";
  }

  function setFilter() {
    var currFilter = filters[Math.floor(Math.random()*filters.length)];
    var filterClass = [
      'filter:'+ currFilter,
      '-webkit-filter:' + currFilter,
      '-moz-filter:' + currFilter,
      '-o-filter:' + currFilter,
      '-ms-filter:' + currFilter
    ];

    return filterClass.join(";");
  }


  for (var i=0; i < 25; i++) {
    var div = document.createElement('div');
    div.className = "block-item";
    div.setAttribute('data-played', false);
    div.innerHTML = "<img style='"+ setFilter()+"' src="+kitty.src +"/>";

    var currBlock = wrap.appendChild(div);
    currBlock.addEventListener('click', click);
  }


})();