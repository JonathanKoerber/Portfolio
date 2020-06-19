

function back(){
  window.history.back();
}
// top btn
topBtn = document.getElementById("topBtn");

window.onscroll = function () {scrollFunction()};

function scrollFunction(){
  if(document.body.schoolTop > 200 || document.documentElement.scrollTop > 200){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }
}

function toFunction(){
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; //for Chrome, FF, IE, and Opera
}