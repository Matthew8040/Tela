document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const messageElement = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const usernameInput = document.getElementById('jose');
        const passwordInput = document.getElementById('caio');
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Aqui você normalmente faria a verificação do usuário e senha
        // com um servidor ou um banco de dados.

        // Para este exemplo simples, vamos simular uma verificação básica:
        if (username === 'usuario' && password === 'senha') {
            messageElement.textContent = 'Login bem-sucedido!';
            messageElement.style.color = 'green';
            // Redirecionar para outra página, por exemplo:
            // window.location.href = 'pagina_inicial.html';
        } else {
            messageElement.textContent = 'Nome de usuário ou senha incorretos.';
            messageElement.style.color = 'red';
        }

        // Limpar os campos do formulário após a tentativa de login
        loginForm.reset();
    });
});