

const form = document.getElementById('registrationForm');
const loginInput = document.getElementById('login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorContainer = document.getElementById('errorContainer');


form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  if (passwordInput.value !== confirmPasswordInput.value) {
    showError('Пароли не совпадают');
    return;
  }

  
  const login = loginInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

 
  fetch('5232', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login,
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      
      if (data.success) {
        
        loginInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
        showError('');
        alert('Регистрация прошла успешно');
      } else {
      
        showError(data.message);
      }
    })
    .catch((error) => {
      console.error('Произошла ошибка при регистрации:', error);
      showError('Произошла ошибка при регистрации');
    });
});


function showError(message) {
  errorContainer.innerText = message;
}







// function registerUser() {
//     // Получение значений полей из формы регистрации
//     var login = document.getElementById("login").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
  
    
//     if (login === "" || email === "" || password === "") {
//       alert("Пожалуйста, заполните все поля.");
//       return;
//     }
  
    
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/register", true);
//     xhr.setRequestHeader("Content-Type", "application/json");
  
//     // Создание объекта с данными пользователя
//     var user = {
//       login: login,
//       email: email,
//       password: password
//     };
  
    
//     var jsonUser = JSON.stringify(user);
  
//     // Отправка запроса на сервер
//     xhr.send(jsonUser);
  
//     // Обработка ответа от сервера
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var response = JSON.parse(xhr.responseText);
//         if (response.success) {
//           alert("Пользователь успешно зарегистрирован.");
//           // Перенаправление на страницу входа или другую страницу
//         } else {
//           alert("Ошибка при регистрации пользователя.");
//         }
//       }
//     };
//   }



