var pickGem = document.querySelector(".gem");
var showCount = document.querySelector("span");
var getBody = document.querySelector("body");
var gemCount = 0;
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

window.onresize = function() {
  var pageWidth = window.innerWidth;
  var pageHeight = window.innerHeight;
};

var collectGem = function() {
  var left = Math.round(Math.random() * pageWidth);
  var top = Math.round(Math.random() * pageHeight);
  pickGem.style.top = top + "px";
  pickGem.style.left = left + "px";
  gemCount++;
  showCount.innerHTML = gemCount;
  if (gemCount % 5 == 0) {
    var red = Math.round(Math.random() * 100);
    var green = Math.round(Math.random() * 100);
    var blue = Math.round(Math.random() * 100);
    getBody.style.backgroundColor =
      "rgb(" + red + "," + green + "," + blue + ")";
  }
};

pickGem.addEventListener("mouseenter", collectGem);

pickGem.addEventListener("click", collectGem);
