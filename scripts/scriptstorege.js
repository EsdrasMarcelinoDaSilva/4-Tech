const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInForm = document.querySelector('.sign-in form');
const signUpForm = document.querySelector('.sign-up form');

// Função para verificar se o usuário está logado
function isLoggedIn() {
  const userEmail = localStorage.getItem('userEmail');
  if (userEmail) {
    // Usuário logado, redireciona para a página principal ou outra página apropriada
    window.location.href = "pagina-principal.html"; // Substitua pelo URL da sua página principal
  }
}

// Verifica se o usuário está logado ao carregar a página
isLoggedIn();

// Função para fazer login
signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário
  const emailInput = signInForm.querySelector('input[type="email"]');
  const passwordInput = signInForm.querySelector('input[type="password"]');

  // Validação (adicione lógica para verificar se as credenciais são válidas)
  const isValid = true; // Substitua pelo resultado da sua validação

  if (isValid) {
    // Armazena o email no localStorage
    localStorage.setItem('userEmail', emailInput.value);

    // Redireciona para a página principal
    window.location.href = "pagina-principal.html"; // Substitua pelo URL da sua página principal
  } else {
    // Exibe uma mensagem de erro se as credenciais forem inválidas
    alert('Email ou senha incorretos.');
  }
});

// Função para fazer logout
function logout() {
  localStorage.removeItem('userEmail');
  window.location.href = "index.html"; // Redireciona para a página de login
}

// Adicione um botão de logout à sua página (por exemplo, no menu) e chame logout() no evento de clique.

// Função para registrar um novo usuário
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário
  const nameInput = signUpForm.querySelector('input[type="text"]');
  const emailInput = signUpForm.querySelector('input[type="email"]');
  const passwordInput = signUpForm.querySelector('input[type="password"]');

  // Validação (adicione lógica para verificar se as credenciais são válidas)
  const isValid = true; // Substitua pelo resultado da sua validação

  if (isValid) {
    // Salva os dados do usuário no localStorage
    localStorage.setItem('userName', nameInput.value);
    localStorage.setItem('userEmail', emailInput.value);
    localStorage.setItem('userPassword', passwordInput.value); 

    // Redireciona para a página principal
    window.location.href = "pagina-principal.html"; // Substitua pelo URL da sua página principal
  } else {
    // Exibe uma mensagem de erro se as credenciais forem inválidas
    alert('Erro ao registrar usuário.');
  }
});

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});

// Adicione uma função para tratar o logout (opcional)
// Exemplo:
// function logout() {
//   localStorage.clear(); // Limpa todos os dados do localStorage
//   window.location.href = "index.html"; // Redireciona para a página de login
// }