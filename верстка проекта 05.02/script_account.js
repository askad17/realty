// Показываем модальное окно при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            const authModal = document.getElementById('authModal');
            authModal.style.display = 'flex';
        });
        
        // Функция входа
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('errorMessage');
            
            // Простая проверка (в реальном приложении нужно проверять на сервере)
            if (username && password) {
                // Сохраняем имя пользователя
                localStorage.setItem('username', username);
                
                // Скрываем модальное окно
                document.getElementById('authModal').style.display = 'none';
                
                // Показываем личный кабинет
                document.getElementById('accountBlock');
                
                // Устанавливаем имя пользователя
                document.getElementById('userName').textContent = username;
            } else {
                errorMessage.textContent = 'Пожалуйста, заполните все поля';
            }
        }
        
        // Обработчик для ссылки "Личный кабинет"
        document.getElementById('profileLink').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Проверяем, авторизован ли пользователь
            if (localStorage.getItem('username')) {
                // Показываем личный кабинет
                document.getElementById('accountBlock');
                document.getElementById('userName').textContent = localStorage.getItem('username');
            } else {
                // Показываем форму авторизации
                document.getElementById('authModal').style.display = 'flex';
            }
        });
        
        // Проверяем авторизацию при загрузке (если пользователь уже авторизован)
        window.onload = function() {
            if (localStorage.getItem('username')) {
                document.getElementById('authModal').style.display = 'none';
                document.getElementById('accountBlock');
                document.getElementById('userName').textContent = localStorage.getItem('username');
            }
        };