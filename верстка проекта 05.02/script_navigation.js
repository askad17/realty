document.addEventListener('DOMContentLoaded', function() {
            const burger = document.querySelector('.burger');
            const navList = document.querySelector('.header__list');
            
            burger.addEventListener('click', function() {
                this.classList.toggle('active');
                navList.classList.toggle('active');
            });
            
            // Закрытие меню при клике на пункт (опционально)
            const navItems = document.querySelectorAll('.list__item a');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    burger.classList.remove('active');
                    navList.classList.remove('active');
                });
            });
        });