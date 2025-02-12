import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import pathSuccessIcon from '../img/ok.svg';
import pathErrorIcon from '../img/octagon.svg';

const formSnackbar = document.querySelector('.form');

formSnackbar.addEventListener('submit', snackbarStart);

function snackbarStart(evt) {
  evt.preventDefault();
  let dataSnackbar = new FormData(formSnackbar);
  let statusSnackbar = [];
  for (const event of dataSnackbar) {
    statusSnackbar.push(event);
  }

  const snackbarObj = {
    value: statusSnackbar[1][1],
    delay: +statusSnackbar[0][1],
    status: true,
  };
  // const valueSnack = statusSnackbar[1][1];
  // const delaySnack = +statusSnackbar[0][1];

  const alertPromis = createPromise(snackbarObj);
  alertPromis
    .then(snackbarObj => messageAllert(snackbarObj))
    .catch(snackbarObj => messageAllert(snackbarObj));
  formSnackbar.reset();
}

function createPromise(objectSnack) {
  const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (objectSnack.value === 'fulfilled') {
        objectSnack.status = true;
        resolve(objectSnack);
      } else if (objectSnack.value === 'rejected') {
        objectSnack.status = false;
        reject(objectSnack);
      }
    }, objectSnack.delay);
  });
  return promis;
}

function messageAllert(objectSnack) {
  const iconUrl = objectSnack.status ? pathSuccessIcon : pathErrorIcon;
  const titleSnack = objectSnack.status ? 'OK' : 'Error';
  const messageSnack = objectSnack.status
    ? `Fulfilled promise in ${objectSnack.delay}ms`
    : `Rejected promise in ${objectSnack.delay}ms`;
  const backgroundSnack = objectSnack.status ? ' #59a10d' : ' #ef4040';
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
