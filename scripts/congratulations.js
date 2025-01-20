document.addEventListener('DOMContentLoaded', function() {
    // Recupera a área do localStorage
    const devArea = localStorage.getItem('devArea');
    
    // Insere a área no h2
    const areaElement = document.querySelector('h2');
    if(areaElement && devArea) {
        areaElement.textContent = devArea;
    }
    
    // Opcional: Limpa o localStorage após usar
    localStorage.removeItem('devArea');
});