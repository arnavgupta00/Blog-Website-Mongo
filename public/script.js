
var colorIndex = 0;

for (let di = 0; di < document.querySelectorAll(".button_t").length; di++) {
    let index = di; // Capture the current value of di in a separate variable
    document.querySelectorAll(".button_t")[index].addEventListener("click", function () {
      document.querySelectorAll(".button_t")[index].classList.add("clicked");
      setTimeout(function () {
        document.querySelectorAll(".button_t")[index].classList.remove("clicked");
      }, 500);
    });
}

//COLORCHANGE START
var colorIndex = 0
function changeColor(){
  var list_bg_color =["#2B2E4A","#52734D","#648f84"];
  var list_text_color =["#E84545","#d2d3bb","#C9F658"];
  const root = document.documentElement;

  

  root.style.setProperty('--bg', list_bg_color[colorIndex]);

  root.style.setProperty('--text', list_text_color[colorIndex]);
  colorIndex = (colorIndex + 1) % list_bg_color.length;
}

//COLORCHANGE OVER