var time=600;
var sec=0;
var Interval=setInterval(function(){
    time=time-1;
    sec=sec-1;
    document.getElementsByClassName("minute")[0].innerText=parseInt(time/60);
    document.getElementsByClassName("seconds")[0].innerText=(time%60);
  
},1000)
console.log(Interval);

