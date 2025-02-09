import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import pathErrorIcon from '../img/bi_x-octagon.png';

const timerInput = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
let userSelectedDate;

console.log(timerInput);
console.log(btnStart);

const timerItem = {
  days: document.querySelector('[data-days'),
  hours: document.querySelector('[data-hours'),
  minutes: document.querySelector('[data-minutes'),
  seconds: document.querySelector('[data-seconds'),

  intervalId: null,
  initTime: null,
  counterTime: null,

  start(number) {
    this.initTime = Date.now();
    this.counterTime = number;
    this.intervalId = setInterval(() => {
      this.timer();
    }, 1000);
    btnStart.disabled = true;
    timerInput.disabled = true;
  },

  stop() {
    clearInterval(this.intervalId);
    btnStart.disabled = true;
    timerInput.disabled = false;
  },

  timer() {
    this.counterTime -= 1000;
    if (this.counterTime <= 0) {
      this.stop();
    }
    const convertTime = convertMs(this.counterTime);
    const ctrTime = timeToStr(convertTime);
    this.days.textContent = ctrTime.days;
    this.hours.textContent = ctrTime.hours;
    this.minutes.textContent = ctrTime.minutes;
    this.seconds.textContent = ctrTime.seconds;
    // console.log(ctrTime.seconds);
  },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  altInput: true,
  altFormat: 'Y-m-d H:i',
  dateFormat: 'Y-m-d H:i',
  minuteIncrement: 1,
  static: true,
  position: 'auto',
  positionElement: timerInput,
  weekNumbers: true,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    checkTime(userSelectedDate);
  },
};

flatpickr('#datetime-picker', options);

function checkTime(userTime) {
  const nowTime = Date.now();
  const choseTime = Date.parse(userTime);
  const deffTime = choseTime - nowTime;
  // console.log(deffTime);
  if (deffTime > 0) {
    btnStart.disabled = false;
    btnStart.addEventListener('click', () => timerItem.start(deffTime));
  } else {
    btnStart.disabled = true;
    messageAllert();
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timeToStr({ days, hours, minutes, seconds }) {
  days = days.toString().padStart(2, '0');
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  return { days, hours, minutes, seconds };
}

function messageAllert() {
  iziToast.show({
    position: 'topRight',
    title: 'Error',
    titleColor: 'white',
    message: 'Please choose a date in the future',
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: 'white',
    iconUrl: pathErrorIcon,
    backgroundColor: '#EF4040',
    theme: 'dark',
  });
}
