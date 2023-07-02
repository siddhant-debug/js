'use strict';

const btnsOpen = document.querySelectorAll('.show-modal');
const btnsClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const open = function () {
  console.log('btns clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = function () {
  console.log('btns closed');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener('click', open);
}

btnsClose.addEventListener('click', close);

overlay.addEventListener('click', close);

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
