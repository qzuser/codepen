function slideshow() {
  var slideshow = document.getElementById("slideshow"),
    imgs = slideshow.getElementsByTagName("img"), 
    pages = slideshow.getElementsByTagName("span"), 
    buttons = slideshow.getElementsByTagName("p"),
    left_btn = buttons[0],
    right_btn = buttons[1],
    current = 0; //current为当前活跃的图片编号

  function slideOff() {                   /*************要善于多用函数*******************/
    imgs[current].className = ""; //图片淡出
    pages[current].className = "";
  }
  function slideOn() {
    imgs[current].className = "active"; //图片淡入
    pages[current].className = "active";
  }

  function changeSlide() {
    slideOff();
    current++;
    if (current >= 3) current = 0;
    slideOn();
  }
  var slideon = setInterval(changeSlide, 2000);

  slideshow.onmouseover = function() {
    clearInterval(slideon); 
  };
  slideshow.onmouseout = function() {
    slideon = setInterval(changeSlide, 2000);
  };

  for (var i = 0; i < pages.length; i++) {
    pages[i].onmouseover = function() {
      slideOff(); 
      current = this.getAttribute("name"); //得到鼠标停留的页码对应的current
      slideOn();
    };
  }

  left_btn.onclick = function() {
    slideOff();
    current--;
    if (current < 0) current = 2;
    slideOn();
  };
  right_btn.onclick = function() {
    slideOff();
    current++;
    if (current > 2) current = 0;
    slideOn();
  };
}
slideshow();
