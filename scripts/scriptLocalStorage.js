function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const signupName = document.querySelector('.sign-up input[type="text"]').value.trim();
  const signupEmail = document.querySelector('.sign-up input[type="email"]').value.trim();
  const signupPassword = document.querySelector('.sign-up input[type="password"]').value;

  // ------------------------ Validações -----------------------------

  if (!signupName || !signupEmail || !signupPassword) {
      showToast('Por favor, preencha todos os campos.');
      return;
  }

  if (!validateEmail(signupEmail)) {
      showToast('Por favor, insira um e-mail válido.');
      return;
  }

  if (signupPassword.length < 6) {
      showToast('A senha deve ter pelo menos 6 caracteres.');
      return;
  }

  const userData = {
      name: signupName,
      email: signupEmail,
      password: signupPassword
  };

  console.log(userData);

  localStorage.setItem('userData', JSON.stringify(userData));
  
  this.reset();
  
  showToast('Conta criada com sucesso! Faça login para continuar.');
  
  document.getElementById('login').click();
});

// ----------------------------------------------- Manipulação do formulário de login -----------------------------------------------------

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const loginEmail = document.querySelector('.sign-in input[type="email"]').value.trim();
  const loginPassword = document.querySelector('.sign-in input[type="password"]').value;

 
  if (!loginEmail || !loginPassword) {
      showToast('Por favor, preencha todos os campos.');
      return;
  }

  const storedData = JSON.parse(localStorage.getItem('userData'));

  if (storedData && 
      loginEmail === storedData.email && 
      loginPassword === storedData.password) {
      showToast('Login bem-sucedido! Redirecionando...');
        setTimeout(() => {
            window.location.href = 'introduction-quiz.html';
        }, 2000);
  } else {
      showToast('Email ou senha incorretos!');
  }
});

// ---------------------------------------------- Mantém o código original de alternância entre formulários ---------------------------------

const formContainer = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  formContainer.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  formContainer.classList.remove("active");
});