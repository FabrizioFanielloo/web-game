document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    const modal = document.getElementById("gameModal");
    const startBtn = document.getElementById("startGame");
    const closeBtn = document.querySelector(".close");

    if (modal) {
        window.onload = () => {
            modal.style.display = "block";
        };

        closeBtn.onclick = () => {
            modal.style.display = "none";
        };

        startBtn.onclick = () => {
            modal.style.display = "none";
        };

        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }

    const moreInfo = document.getElementById("moreInfo");
    const showMoreBtn = document.getElementById("showMore");

    if (showMoreBtn) {
        showMoreBtn.onclick = () => {
            if (moreInfo.style.display === "none") {
                moreInfo.style.display = "block";
                showMoreBtn.textContent = "Show Less";
            } else {
                moreInfo.style.display = "none";
                showMoreBtn.textContent = "Show More";
            }
        };
    }

    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});