document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('select');
    const options = document.querySelectorAll('.option');
    const submitBtn = document.querySelector('.submit-btn');
    
    function clearSelection() {
        options.forEach(option => {
            option.classList.remove('selected');
        });
    }

    function getArea(option) {
        const areas = {
            'A': 'Frontend',
            'B': 'Backend',
            'C': 'DevOps'
        };
        return areas[option];
    }
    
    select.addEventListener('change', function() {
        clearSelection();
        if(this.value) {
            const selectedDiv = document.querySelector(`.option[data-option="${this.value}"]`);
            if(selectedDiv) {
                selectedDiv.classList.add('selected');
            }
        }
    });
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            const optionValue = this.getAttribute('data-option');
            clearSelection();
            this.classList.add('selected');
            select.value = optionValue;
        });
    });

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedValue = select.value;
        
        if(selectedValue) {
            const area = getArea(selectedValue);
            localStorage.setItem('devArea', area);
            
            window.location.href = 'congratulations.html';
        } else {
            showToast('Por favor, selecione uma opção antes de continuar.');
        }
    });
});