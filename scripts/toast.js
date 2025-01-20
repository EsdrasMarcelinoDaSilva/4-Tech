// toast.js

function showToast(message, duration = 3000) {
    // Cria um elemento para o toast
    const toastElement = document.createElement('div');
    toastElement.classList.add('toast');
    toastElement.textContent = message;

    // Estiliza o toast
    toastElement.style.position = 'fixed';
    toastElement.style.bottom = '20px';
    toastElement.style.left = '50%';
    toastElement.style.transform = 'translateX(-50%)';
    toastElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    toastElement.style.color = 'white';
    toastElement.style.padding = '10px 20px';
    toastElement.style.borderRadius = '5px';
    toastElement.style.zIndex = '1000';

    // Adiciona o toast ao corpo da página
    document.body.appendChild(toastElement);

    // Define a animação de entrada e saída do toast
    toastElement.style.animation = 'toast-in 0.5s, toast-out 0.5s ' + (duration / 1000 - 0.5) + 's';

    // Define a função para remover o toast após o tempo de exibição
    function removeToast() {
        document.body.removeChild(toastElement);
    }

    // Adiciona um evento para remover o toast após o tempo de exibição
    setTimeout(removeToast, duration);
}

// Adiciona as animações ao estilo da página
const style = document.createElement('style');
style.textContent = `
    @keyframes toast-in {
        from { opacity: 0; transform: translate(-50%, 100%); }
        to { opacity: 1; transform: translate(-50%, 0); }
    }
    @keyframes toast-out {
        from { opacity: 1; transform: translate(-50%, 0); }
        to { opacity: 0; transform: translate(-50%, 100%); }
    }
`;
document.head.appendChild(style);