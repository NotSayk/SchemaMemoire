document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            setTimeout(() => {
                contactForm.reset();
            }, 100);
        });
    }
});
