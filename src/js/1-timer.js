import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import pathErrorIcon from '../img/octagon.svg';

const timerInput = document.getElementById('datetime-picker');
const btnStart = document.querySelector('[data-start]');
let userSelectedInterval = null;

btnStart.disabled = true;

// console.log(timerInput);
// console.log(btnStart);

const timerItem = {
  days: document.querySelector('[data-days'),
  hours: document.querySelector('[data-hours'),
  minutes: document.querySelector('[data-minutes'),
  seconds: document.querySelector('[data-seconds'),

  intervalId: null,
  counterTime: null,

  start() {
    this.counterTime = userSelectedInterval;
    btnStart.disabled = true;
    document.querySelector('.form-control').disabled = true;
    this.intervalId = setInterval(() => {
      this.timer();
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    btnStart.disabled = true;
    document.querySelector('.form-control').disabled = false;
  },

  timer() {
    if (this.counterTime < 0) {
      this.stop();
    } else {
      this.counterTime -= 1000;
      const convertTime = convertMs(this.counterTime);
      const ctrTime = timeToStr(convertTime);
      this.days.textContent = ctrTime.days;
      this.hours.textContent = ctrTime.hours;
      this.minutes.textContent = ctrTime.minutes;
      this.seconds.textContent = ctrTime.seconds;

      // console.log(ctrTime.seconds);
    }
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
    checkTime(selectedDates[0]);
  },
};

flatpickr(timerInput, options);
timerBtnStart();

function checkTime(userTime) {
  const nowTime = Date.now();
  const choseTime = Date.parse(userTime);
  userSelectedInterval = choseTime - nowTime;

  if (userSelectedInterval > 0) {
    btnStart.disabled = false;
  } else {
    btnStart.disabled = true;
    messageAllert();
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
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

function timerBtnStart() {
  btnStart.addEventListener('click', () => {
    timerItem.start();
  });
}
