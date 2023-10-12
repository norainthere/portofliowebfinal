document.addEventListener('DOMContentLoaded', (event) => {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // Add click event listeners to store items
    var storeItems = document.querySelectorAll('.store-item');
    storeItems.forEach(item => {
        item.addEventListener('click', function() {
            var url = item.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
});
