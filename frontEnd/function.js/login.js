// login.js
import { auth } from './firebase.js';

document.getElementById('signInForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Firebase Authentication - Sign In
        await auth.signInWithEmailAndPassword(email, password);
        alert('Signed in successfully!');
        window.location.href = "careers.html"; // Redirect to career page
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
