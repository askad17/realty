document.addEventListener('DOMContentLoaded', function() {
    // Закрытие выпадающего меню при клике вне его
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            const openMenus = document.querySelectorAll('.dropdown-menu');
            openMenus.forEach(menu => {
                menu.style.display = 'none';
            });
        }
    })});