// SLIDER BLOG
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.blog__slider', {
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10, 
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                if (index < 3) {
                    return `<span class="${className}"></span>`;
                }
                return '';
            },
        },
        navigation: {
            nextEl: '.slider-button.next',
            prevEl: '.slider-button.prev',
        },
        on: {
            slideChange: function () {
                const bullets = document.querySelectorAll('.swiper-pagination-bullet');
                const activeIndex = this.realIndex % 3;
                bullets.forEach((bullet, index) => {
                    bullet.classList.toggle('swiper-pagination-bullet-active', index === activeIndex);
                });
            },
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 15, 
            },
            1351: {
                slidesPerView: 3, 
                spaceBetween: 20, 
            },
        },
    });
});

// MODAL ADRESS
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalAdress");
    const btn = document.getElementById("openModalAdress");
    const closeBtn = modal.querySelector(".close__adress");
    
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) { 
            modal.style.display = "none";
        }
    });
});


// MODAL SIGN/REG
document.addEventListener("DOMContentLoaded", () => {
    function setupModal(modalId, btnId, closeClass, otherModalId = null) {
        const modal = document.getElementById(modalId);
        const btn = document.getElementById(btnId);
        const closeBtn = modal.querySelector(closeClass);

        if (!modal || !btn || !closeBtn) return;
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
            if (otherModalId) {
                const otherModal = document.getElementById(otherModalId);
                if (otherModal) otherModal.style.display = "none";
            }
        });
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
    setupModal("modalSign", "openModalSign", ".close__sign", "modalReg");
    setupModal("modalReg", "openModalReg", ".close__reg", "modalSign");
});


// CATALOG
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".egg__button");
    const catalogs = document.querySelectorAll(".catalog__list"); 
    const expandAllBtn = document.createElement("button"); 

    expandAllBtn.textContent = "Раскрыть все";
    expandAllBtn.classList.add("expand-all-btn");
    document.body.appendChild(expandAllBtn);
    expandAllBtn.style.display = "none"; 

    function updateButtonVisibility() {
        const activeCount = document.querySelectorAll(".catalog__list.active").length;
        expandAllBtn.style.display = activeCount >= 2 ? "block" : "none";
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            catalogs[index].classList.toggle("active");
            updateButtonVisibility();
        });
    });

    expandAllBtn.addEventListener("click", () => {
        catalogs.forEach((catalog) => catalog.classList.add("active"));
        expandAllBtn.style.display = "none"; 
    });
});







document.querySelectorAll(".catalog__item-buy-text a").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        
        let cartIcon = this.previousElementSibling; 

        cartIcon.classList.add("fly"); 

        setTimeout(() => {
            cartIcon.classList.remove("fly"); 
        }, 500);
    });
});

document.querySelectorAll(".buy").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        
        let svgPath = this.querySelector("path"); 

        svgPath.classList.add("fly2"); 

        setTimeout(() => {
            svgPath.classList.remove("fly2");
        }, 300);
    });
});
