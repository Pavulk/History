const points = document.querySelectorAll('.point');
const box = document.getElementById('infoBox');
let timeoutId; 

points.forEach(point => {
    point.addEventListener('mouseenter', () => {
        timeoutId = setTimeout(() => {
            box.style.animation = 'none';
            box.offsetHeight; 
            
            box.style.display = 'block';
            
            // ЗАМЕНИЛ ТУТ: теперь браузер поймет теги <br> или <b>
            box.innerHTML = point.getAttribute('data-text');
            
            box.style.animation = 'fadeIn 0.5s ease forwards';
        }, 300); 
    });

    point.addEventListener('mouseleave', () => {
        clearTimeout(timeoutId); 
    });
});

document.addEventListener('dblclick', () => {
    box.style.display = 'none';
    box.style.animation = 'none';
});
