'use strict';

// const btns = document.querySelectorAll('.btn');
// const modalOverlay = document.querySelector('.modal-overlay ');
// const modals = document.querySelectorAll('.modal');

// btns.forEach((el) => {
// 	el.addEventListener('click', (e) => {
// 		let path = e.currentTarget.getAttribute('data-path');

// 		modals.forEach((el) => {
// 			el.classList.remove('modal--visible');
// 		});

// 		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
// 		modalOverlay.classList.add('modal-overlay--visible');
// 	});
// });

// modalOverlay.addEventListener('click', (e) => {
// 	console.log(e.target);

// 	if (e.target == modalOverlay) {
// 		modalOverlay.classList.remove('modal-overlay--visible');
// 		modals.forEach((el) => {
// 			el.classList.remove('modal--visible');
// 		});
// 	}
// });



const btnOpenModal = document.getElementById('btnOpenModal');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const btnNext = document.getElementById('btnNext');
const btnClose = document.getElementById('btnClose');

btnOpenModal.addEventListener('click', function() {
  modal1.classList.add('visible');
});

btnNext.addEventListener('click', function() {
  modal1.classList.remove('visible');
  modal2.classList.add('visible');
});

btnClose.addEventListener('click', function() {
  modal2.classList.remove('visible');
  // Переход на другую страницу HTML
  window.location.href = 'home.html';
});

document.addEventListener('click', function(event) {
  if (event.target === modal1 || event.target === modal2) {
    modal1.classList.remove('visible');
    modal2.classList.remove('visible');
  }
});








// const btnOpenModal = document.getElementById('btnOpenModal');
// const modal1 = document.getElementById('modal1');
// const modal2 = document.getElementById('modal2');
// const btnNext = document.getElementById('btnNext');
// const btnClose = document.getElementById('btnClose');

// btnOpenModal.addEventListener('click', function() {
//   modal1.classList.add('visible');
// });

// btnNext.addEventListener('click', function() {
//   modal1.classList.remove('visible');
//   modal2.classList.add('visible');
// });

// btnClose.addEventListener('click', function() {
//   modal2.classList.remove('visible');
//   // Переход на другую страницу HTML
//   window.location.href = 'home.html';
// });

// document.addEventListener('click', function(event) {
//   if (event.target === modal1 || event.target === modal2) {
//     modal1.classList.remove('visible');
//     modal2.classList.remove('visible');
//   }
// });

// const btns = document.querySelectorAll('.btn');
// const modalOverlay = document.querySelector('.modal-overlay ');
// const modals = document.querySelectorAll('.modal');

// btns.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     let path = e.currentTarget.getAttribute('data-path');

//     modals.forEach((el) => {
//       el.classList.remove('modal--visible');
//     });

//     document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
//     modalOverlay.classList.add('modal-overlay--visible');
//   });
// });

// modalOverlay.addEventListener('click', (e) => {
//   console.log(e.target);

//   if (e.target == modalOverlay) {
//     modalOverlay.classList.remove('modal-overlay--visible');
//     modals.forEach((el) => {
//       el.classList.remove('modal--visible');
//     });
//   }
// });