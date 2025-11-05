document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data
        });

        if (response.ok) {
            await new Promise(resolve => setTimeout(resolve, 1500));
            form.reset();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
