// let x=parseInt(prompt("Enter in your Set Timer in seconds"))
let s;
let x,p;
var flag=0;

function set()
{
    clearInterval(s);
    x=parseInt(prompt("Enter in your Set Timer in seconds"));
    p=x;
    s=setInterval(() => {
    document.getElementsByClassName('minute')[0].innerHTML=parseInt(x/60);
     document.getElementsByClassName('seconds')[0].innerHTML=x%60;
    document.getElementsByClassName('milli')[0].innerHTML = x *10;
     x=x-1;
     if (x < 0) {
            clearInterval(s);
             alert("Time's up!");
    }
    }, 1000);
// setTimeout(()=>{
//     clearInterval(s);
// },(1000*p))
let fun=()=>{
    
}
}
function reset()
{
    clearInterval(s);
    x=p;
    s=setInterval(() => {
    document.getElementsByClassName('minute')[0].innerHTML=parseInt(x/60);
     document.getElementsByClassName('seconds')[0].innerHTML=x%60;
    document.getElementsByClassName('milli')[0].innerHTML = x *10;
     x=x-1;
     if (x < 0) {
            clearInterval(s);
             alert("Time's up!");
    }
    }, 1000);
}
function pause()
{
    if (flag == 0) {
        clearInterval(s);
        flag = 1;
        document.getElementsByClassName('pause')[0].innerHTML = "Resume";
    } else {
        flag = 0;
        document.getElementsByClassName('pause')[0].innerHTML = "Pause";
        
        s = setInterval(() => {
            document.getElementsByClassName('minute')[0].innerHTML = Math.floor(x / 60);
            document.getElementsByClassName('seconds')[0].innerHTML = x % 60;
            document.getElementsByClassName('milli')[0].innerHTML = (x * 10) % 1000;
            x = x - 1;
            if (x < 0) {
                clearInterval(s);
                alert("Time's up!");
            }
        }, 1000);
    }
}