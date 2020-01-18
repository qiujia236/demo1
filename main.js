let html = document.querySelector("#demo");
let style = document.querySelector("#style");

let string = `/*你好，我是wb，接下来我要
加样式，我要加的样式是*/
#demo{
  word-break: break-all;
}
#div1 {
  position: fixed;
  border: 1px solid red;
  width: 250px;
  height: 250px;
}
/*
接下来我把div变成一个八卦图
,先画一个圆。
*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 变成一黑一白*/
#div1{
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
  top:40px;
  left:50%;
  transform:translateX(-50%);
}
#div1::before{
  content: '';
  display : block;
  width: 125px;
  height: 125px;
  position:absolute;
  top : 0;
  left: 50%;
  transform: translate(-50%);  
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 24%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  content: '';
  display : block;
  width: 125px;
  height: 125px;  
  position:absolute;  
  bottom:0;
  left:50%;
  transform: translate(-50%);
  background:  #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 
  19%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    // n = n + 1;
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    // demo.innerHTML = string.substring(0, n);
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    //滚动至底部
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);
    if (n < string.length - 1) {
      //不是最后一个
      n += 1;
      step();
    }
  }, 0);
};

step();
