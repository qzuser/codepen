var pics = document.querySelectorAll(".wrap img");
var pages = document.querySelectorAll(".page span");
var swap = document.querySelectorAll("p");
var current = 0, timer;
function slideout(){
  pics[current].className = "";
  pages[current].className = "";
}
function slidein(){
  pics[current].className = 'active';
  pages[current].className = 'active';
}
function change(){
  timer = setInterval(() => {
    slideout();
    current++
    if(current == 4) current = 0;
    slidein();
  }, 2000);
}
change();

pics.forEach( item => {
  item.addEventListener('mouseover', ()=>{
    clearInterval(timer);
  })
  item.addEventListener('mouseout', () => {
    change();
  })
})

pages.forEach( item => {
  item.addEventListener("mouseover", function(){
    clearInterval(timer);
    slideout();
    current = this.dataset.page;
    slidein();
  });
  item.addEventListener("mouseout", () => {
    change();
  });
})

swap[0].addEventListener("click", function() {
  slideout();
  current--;
  if(current == -1) current = 3;
  slidein();
});

swap[1].addEventListener('click', function(){
  slideout();
  current++;
  if(current == 4) current = 0;
  slidein();
})

