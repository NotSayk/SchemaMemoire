document.getElementById("contactForm").addEventListener("submit", async function (e) {
    const form = e.target;
    const status = document.getElementById("formStatus");
    const data = new FormData(form);

    status.innerHTML = "Envoi en cours...";
    status.style.color = "black";

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            status.innerHTML = "Message envoyé avec succès !";
            status.style.color = "green";
            form.reset();
        } else {
            const result = await response.json();
            if (result.errors) {
                const emailError = result.errors.find(e => e.message.includes("should be an email"));
                if (emailError) {
                    status.innerHTML = "❌ L'adresse e-mail est invalide.";
                } else {
                    status.innerHTML = result.errors.map(e => e.message).join(", ");
                }
            } else {
                status.innerHTML = "❌ Une erreur est survenue.";
            }
            status.style.color = "red";
        }
    } catch (error) {
        status.innerHTML = "❌ Erreur réseau. Veuillez réessayer.";
        status.style.color = "red";
    }
});
