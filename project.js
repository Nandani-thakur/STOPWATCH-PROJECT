var isStop=true;
var s=0;
var min=0;
var hr=0;

//start button section
function start(){
  if(isStop==true){
    isStop=false;
    timer();
  }
}
//timer section
function timer(){
if(isStop==false){
  s=parseInt(s);
  min=parseInt(min);
  hr=parseInt(hr);
   

  s++;
  if(s==60){
    s=0;
    min++;
  }
  if(min==60){
min=0;
hr++;
  }
  if(s<10){
    s="0"+s;
  }
  if(min<10){
    min="0"+min;
  }
  if(hr<10){
    hr="0"+hr;
  }
  
  stopwatch.innerHTML=hr+":"+min+":"+s;

  setTimeout("timer()",1000);
}
}
//stop button section

function stop(){
  isStop=true;

}
// reset buttton section
function reset(){
  isStop=true;
  s=0;
  min=0 ;
  hr=0;
  stopwatch.innerHTML="00 : 00 :00 ";
}