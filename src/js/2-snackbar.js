import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import pathSuccessIcon from '../img/ok.svg';
import pathErrorIcon from '../img/octagon.svg';
let status = true;
let backgroundSnack = '';
let titleSnack = '';
let messageSnack = '';

const iconUrl = status ? pathSuccessIcon : pathErrorIcon;

const formSnackbar = document.querySelector('.form');

formSnackbar.addEventListener('submit', evt => {
  evt.preventDefault();
  let dataSnackbar = new FormData(formSnackbar);
  let statusSnackbar = [];
  for (const event of dataSnackbar) {
    statusSnackbar.push(event);
  }

  const valueSnack = statusSnackbar[1][1];
  const delaySnack = +statusSnackbar[0][1];

  const alertPromis = createPromise(valueSnack, delaySnack);
  alertPromis
    .then((status, delaySnack) => messageAllert(status, delaySnack))
    .catch((status, delaySnack) => messageAllert(status, delaySnack));
  formSnackbar.reset();
});

function createPromise(value, delay) {
  const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 'fulfilled') {
        status = true;
        resolve(status, delay);
      } else if (value === 'rejected') {
        status = false;
        reject(status, delay);
      }
    }, delay);
  });
  return promis;
}

function messageAllert(status, delay) {
  const iconUrl = status ? pathSuccessIcon : pathErrorIcon;
  const titleSnack = status ? 'OK' : 'Error';
  const messageSnack = status
    ? `Fulfilled promise in ${delay}ms`
    : `Rejected promise in ${delay}ms`;
  const backgroundSnack = status ? ' #59a10d' : ' #ef4040';
  iziToast.show({
    position: 'topRight',
    title: titleSnack,
    titleColor: 'white',
    message: messageSnack,
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: 'white',
    iconUrl: iconUrl,
    backgroundColor: backgroundSnack,
    theme: 'dark',
  });
}
