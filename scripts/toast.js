function showToast(message, duration = 3000) {
    const toastElement = document.createElement('div');
    toastElement.classList.add('toast');
    toastElement.textContent = message;

    toastElement.style.position = 'fixed';
    toastElement.style.bottom = '20px';
    toastElement.style.left = '50%';
    toastElement.style.transform = 'translateX(-50%)';
    toastElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    toastElement.style.color = 'white';
    toastElement.style.padding = '10px 20px';
    toastElement.style.borderRadius = '5px';
    toastElement.style.zIndex = '1000';

    document.body.appendChild(toastElement);

    toastElement.style.animation = 'toast-in 0.5s, toast-out 0.5s ' + (duration / 2000 - 0.5) + 's';

    function removeToast() {
        document.body.removeChild(toastElement);
    }

    setTimeout(removeToast, duration);
}

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