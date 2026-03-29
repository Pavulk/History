const points = document.querySelectorAll('.point');
const box = document.getElementById('infoBox');
let timeoutId; // Переменная для хранения таймера

points.forEach(point => {
    // 1. Когда навели мышку
    point.addEventListener('mouseenter', () => {
        // Устанавливаем задержку (например, 500 мс = 0.5 сек)
        timeoutId = setTimeout(() => {
            box.style.animation = 'none';
            box.offsetHeight; // "Хак" для перезагрузки анимации
            
            box.style.display = 'block';
            box.textContent = point.getAttribute('data-text');
            
            box.style.animation = 'fadeIn 0.5s ease forwards';
        }, 300); // ИЗМЕНИ ЭТО ЧИСЛО, чтобы сделать паузу длиннее или короче
    });

    // 2. Если мышка ушла с квадратика раньше времени — отменяем показ
    point.addEventListener('mouseleave', () => {
        clearTimeout(timeoutId); // Останавливает таймер, если мышка просто "пролетела" мимо
    });
});

// Двойной клик для закрытия
document.addEventListener('dblclick', () => {
    box.style.display = 'none';
    box.style.animation = 'none';
});