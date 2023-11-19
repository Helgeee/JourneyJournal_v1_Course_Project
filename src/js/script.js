
'use strict';
   // Получаем модальные окна по их id
   var modal1 = document.getElementById("modal1");
   var modal2 = document.getElementById("modal2");

   // Получаем пустую область экрана
   var body = document.getElementsByTagName("body")[0];

   // Открываем модальное окно 1
   function openModal1() {
     modal1.style.display = "block";
   }

   // Открываем модальное окно 2
   function openModal2() {
     modal2.style.display = "block";
   }

   // Закрываем модальное окно 1
   function closeModal1() {
     modal1.style.display = "none";
   }

   // Закрываем модальное окно 2
   function closeModal2() {
     modal2.style.display = "none";
   }

   // Закрываем модальные окна при клике на пустую область экрана
   body.onclick = function(event) {
     if (event.target == body) {
       closeModal1();
       closeModal2();
     } 
   }
   function openModal(id) {
    document.getElementById(id).style.display = "block";
}

// Функция для закрытия модального окна
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}






// // Функция index модального окна

function openModal() {
  document.getElementById("modal1").style.display = "block";
}

function closeModal() {
  document.getElementById("modal1").style.display = "none";
}

function openModal2() {
  document.getElementById("modal1").style.display = "none";
  document.getElementById("modal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("modal2").style.display = "none";
}




