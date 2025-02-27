function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.project-wrapper', {
        loop: true,
        pagination: { 
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints:{
            0: {
                slidesPerView: 1
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 20,
            }

        }
    });
});

