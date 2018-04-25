window.onload=function(){
    var div2=document.getElementById("div2");
    var div1=document.getElementById("div1");
    div1.onclick=function(){
      div1.className=(div1.className=="close1")?"open1":"close1";
      div2.className=(div2.className=="close2")?"open2":"close2";
      div1.className=="close1" ? console.log('关') : console.log('开')
    }
}