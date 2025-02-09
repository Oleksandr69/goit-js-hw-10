import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as u,i as m}from"./assets/vendor-BZoxUzx5.js";const h="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_95121_5)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89915%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89915%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80621C16.3037%206.76847%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76847%2016.7874%206.80621C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12151%2017.1938%207.21262C17.2315%207.30373%2017.2509%207.40138%2017.2509%207.5C17.2509%207.59861%2017.2315%207.69626%2017.1938%207.78737C17.156%207.87848%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30366%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_95121_5'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",n=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");o.disabled=!0;n.disabled=!1;let r;console.log(n);console.log(o);const C={days:document.querySelector("[data-days"),hours:document.querySelector("[data-hours"),minutes:document.querySelector("[data-minutes"),seconds:document.querySelector("[data-seconds"),intervalId:null,initTime:null,counterTime:null,start(t){this.initTime=Date.now(),this.counterTime=t,o.disabled=!0,n.disabled=!0,this.intervalId=setInterval(()=>{this.timer()},1e3)},stop(){clearInterval(this.intervalId),o.disabled=!0,n.disabled=!1},timer(){this.counterTime-=1e3,this.counterTime<=0&&this.stop();const t=g(this.counterTime),e=L(t);this.days.textContent=e.days,this.hours.textContent=e.hours,this.minutes.textContent=e.minutes,this.seconds.textContent=e.seconds}},p={enableTime:!0,time_24hr:!0,defaultDate:new Date,altInput:!0,altFormat:"Y-m-d H:i",dateFormat:"Y-m-d H:i",minuteIncrement:1,static:!0,position:"auto",positionElement:n,weekNumbers:!0,onClose(t){r=t[0],f(r)}};u("#datetime-picker",p);function f(t){const e=Date.now(),i=Date.parse(t)-e;i>0?(o.disabled=!1,o.addEventListener("click",()=>{C.start(i),o.disabled=!0,n.disabled=!0})):(o.disabled=!0,S())}function g(t){const a=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:l,seconds:d}}function L({days:t,hours:e,minutes:s,seconds:i}){return t=t.toString().padStart(2,"0"),e=e.toString().padStart(2,"0"),s=s.toString().padStart(2,"0"),i=i.toString().padStart(2,"0"),{days:t,hours:e,minutes:s,seconds:i}}function S(){m.show({position:"topRight",title:"Error",titleColor:"white",message:"Please choose a date in the future",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",iconUrl:h,backgroundColor:"#EF4040",theme:"dark"})}
//# sourceMappingURL=1-timer.js.map
