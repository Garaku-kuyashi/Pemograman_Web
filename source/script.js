// Validasi Form Login
function showError() {
    const form = document.querySelector("form");
    form.style.animation = "shake 0.3s";
    setTimeout(() => form.style.animation = "", 300);
}

function validasi() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");


    errorMsg.textContent = "";

    if (username === "" || password === "") {
        errorMsg.textContent = "Username dan Password wajib diisi!";
        showError();
        return false;    
    }

    if (password.length < 6) {
        errorMsg.textContent = "Password minimal 6 karakter!";
        showError();
        return false;
    }

    
    window.location.href = "/index.html";
    return false; 
}

// Form Hubungi Kami
const hubungiForm = document.querySelector('.hubungi');

if (hubungiForm) {
    hubungiForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const pesan = document.querySelector('.hubungi input[type="text"]').value.trim();

        if (pesan === '') {
            alert('Pesan tidak boleh kosong!');
            return;
        }

        alert('Pesan terkirim! Kami akan segera merespons.');
        hubungiForm.reset(); 
    });
}
