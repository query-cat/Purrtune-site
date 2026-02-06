document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL REVEAL ANIMATION
    // Logic: Pas element masuk layar, tambahin class 'active' biar animasi jalan
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Cukup animasi sekali aja
            }
        });
    }, observerOptions);

    // Target semua elemen yg punya class 'reveal'
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // 2. SMOOTH SCROLL FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. CONSOLE EASTER EGG (Buat sesama developer yg iseng inspect element)
    console.log(
        "%c PurrTune v1.0 %c by Query Cat ",
        "background:#22D3EE; color:#000; font-weight:bold; padding:4px; border-radius:4px 0 0 4px",
        "background:#05050A; color:#22D3EE; padding:4px; border-radius:0 4px 4px 0; border: 1px solid #22D3EE"
    );
    console.log("Meow! Looking for bugs? We ate them. 🐱");
});
