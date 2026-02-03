document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                // Simulate processing
                const btn = loginForm.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = 'Signing In...';
                btn.style.opacity = '0.7';

                setTimeout(() => {
                    alert(`Welcome back, ${email}!`);
                    // Redirect to home
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
