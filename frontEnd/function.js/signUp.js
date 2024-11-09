// signUp.js
import { auth } from './firebase.js';

document.getElementById('signUpForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Firebase Authentication - Sign up
        await auth.createUserWithEmailAndPassword(email, password);
        alert('Account created successfully!');
        window.location.href = "login.html"; // Redirect to login page
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
