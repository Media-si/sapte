// ============================================
// MODIFICĂ AICI CHEIA TA SECRETĂ
// ============================================
const CHEIE_SECRETA = "GHEORGHEYT"; // <- SCHIMBĂ CU CE VREI TU

// Hash simplu pentru a nu stoca cheia în clar în sesiune
function hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = ((h << 5) - h) + str.charCodeAt(i);
        h |= 0;
    }
    return h.toString();
}

function verificaCheie() {
    const input = document.getElementById("cheie").value.trim();
    const eroare = document.getElementById("eroare");

    if (!input) {
        eroare.textContent = "⚠️ Te rog introdu o cheie!";
        return;
    }

    if (input === CHEIE_SECRETA) {
        // Salvăm în sessionStorage un token
        sessionStorage.setItem("acces_curs", hash(CHEIE_SECRETA));
        window.location.href = "curs.html";
    } else {
        eroare.textContent = "❌ Cheie incorectă! Încearcă din nou.";
        document.getElementById("cheie").value = "";
        // Mic efect de shake
        document.querySelector(".login-box").classList.add("shake");
        setTimeout(() => {
            document.querySelector(".login-box").classList.remove("shake");
        }, 500);
    }
}

// Permite Enter pentru submit
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("cheie");
    if (input) {
        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") verificaCheie();
        });
    }
});
