document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire pour validation manuelle

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');

    // Validation simple
    if (name === '' || email === '' || password === '') {
        errorMessage.textContent = "Tous les champs sont obligatoires.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Le mot de passe doit comporter au moins 6 caractères.";
        return;
    }

    // Si la validation est correcte
    alert("Inscription réussie !");
    errorMessage.textContent = '';
    // Reset le formulaire
    document.getElementById('signupForm').reset();
});
