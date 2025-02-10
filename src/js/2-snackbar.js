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

  const alertPromis = createPromise(statusSnackbar[1][1], statusSnackbar[0][1]);
  alertPromis.then(data => {
    if (data === 'fulfilled') {
      status = true;
      titleSnack = 'OK';
      messageSnack = `Fulfilled promise in ${statusSnackbar[0][1]}ms`;
      backgroundSnack = ' #59a10d';
    } else if (data === 'rejected') {
      status = false;
      titleSnack = 'Error';
      messageSnack = `Rejected promise in ${statusSnackbar[0][1]}ms`;
      backgroundSnack = ' #ef4040';
    }
    messageAllert(status, titleSnack, messageSnack, backgroundSnack);
  });
  formSnackbar.reset();
});

function createPromise(value, delay) {
  const promis = new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
  return promis;
}

function messageAllert(status, titleSnack, messageSnack, backgroundSnack) {
  const iconUrl = status ? pathSuccessIcon : pathErrorIcon;
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
