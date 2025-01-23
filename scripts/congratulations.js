document.addEventListener('DOMContentLoaded', function() {
    const devArea = localStorage.getItem('devArea');
    const areaElement = document.querySelector('h2');
    
    if(areaElement && devArea) {
        areaElement.textContent = devArea;
    }
    
    localStorage.removeItem('devArea');
});