// document.addEventListener('DOMContentLoaded', function() {
//     const select = document.querySelector('select');
//     const options = document.querySelectorAll('.option');
    
//     // Remove seleção anterior
//     function clearSelection() {
//         options.forEach(option => {
//             option.classList.remove('selected');
//         });
//     }
    
//     // Atualiza quando mudar o select
//     select.addEventListener('change', function() {
//         clearSelection();
//         if(this.value) {
//             const selectedDiv = document.querySelector(`.option[data-option="${this.value}"]`);
//             if(selectedDiv) {
//                 selectedDiv.classList.add('selected');
//             }
//         }
//     });
    
//     // Atualiza quando clicar nas divs
//     options.forEach(option => {
//         option.addEventListener('click', function() {
//             const optionValue = this.getAttribute('data-option');
//             clearSelection();
//             this.classList.add('selected');
//             select.value = optionValue;
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('select');
    const options = document.querySelectorAll('.option');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Remove seleção anterior
    function clearSelection() {
        options.forEach(option => {
            option.classList.remove('selected');
        });
    }

    // Função para determinar a área baseada na resposta
    function getArea(option) {
        const areas = {
            'A': 'Frontend',
            'B': 'Backend',
            'C': 'DevOps'
        };
        return areas[option];
    }
    
    // Atualiza quando mudar o select
    select.addEventListener('change', function() {
        clearSelection();
        if(this.value) {
            const selectedDiv = document.querySelector(`.option[data-option="${this.value}"]`);
            if(selectedDiv) {
                selectedDiv.classList.add('selected');
            }
        }
    });
    
    // Atualiza quando clicar nas divs
    options.forEach(option => {
        option.addEventListener('click', function() {
            const optionValue = this.getAttribute('data-option');
            clearSelection();
            this.classList.add('selected');
            select.value = optionValue;
        });
    });

    // Manipula o envio
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedValue = select.value;
        
        if(selectedValue) {
            // Salva a área no localStorage
            const area = getArea(selectedValue);
            localStorage.setItem('devArea', area);
            
            // Redireciona para a página de parabéns
            window.location.href = 'congratulations.html';
        } else {
            showToast('Por favor, selecione uma opção antes de continuar.');
        }
    });
});