import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import pathSuccessIcon from '../img/ok.svg';
import pathErrorIcon from '../img/error.svg';
let status = true;
const iconUrl = status ? pathSuccessIcon : pathErrorIcon;

const formSnackbar = document.querySelector('.form');

formSnackbar.addEventListener('submit', evt => {
  evt.preventDefault();
  const dataSnackbar = new FormData(formSnackbar);
  for (const event of dataSnackbar) {
    console.log(event);
  }
});

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
