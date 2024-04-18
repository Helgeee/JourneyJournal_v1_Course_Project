// Получение данных из формы
const form = document.getElementById('postForm'); 
const imageInput = document.getElementById('img_note'); 
const titleInput = document.getElementById('note_title'); 
const coordinatesInput = document.getElementById('coordinates'); 
const textInput = document.getElementById('note_text'); 

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  // Создание объекта FormData для передачи данных формы
  const formData = new FormData();
  formData.append('image', imageInput.files[0]); // Загрузка изображения
  formData.append('title', titleInput.value); 
  formData.append('coordinates', coordinatesInput.value); // Координаты
  formData.append('text', textInput.value); // Текст

  // Отправка данных на сервер с использованием Fetch API
  fetch('/api/createPost', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Пост успешно создан:', data);
    
  })
  .catch(error => {
    console.error('Ошибка при создании поста:', error);
    
  });
});