var minute=0;
var second=0;
var milisec=0;
var min=document.getElementById("minute");
var sec=document.getElementById("second");
var msec=document.getElementById("milisec");
var interval;
function timer(){
    milisec++
    msec.innerHTML=milisec
    if(milisec>=100){
        second++
        sec.innerHTML=second
        milisec=0;
    }else if(second>=60){
        minute++
        min.innerHTML=minute
        second=0
    }
}
function start(){
interval=setInterval(timer,10)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    minute=0;
    second=0;
    milisec=0;
     min.innerHTML=minute
     sec.innerHTML=second
     msec.innerHTML=milisec
     stop()

}