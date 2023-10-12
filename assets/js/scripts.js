document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listeners to store items
    var storeItems = document.querySelectorAll('.store-item');
    storeItems.forEach(item => {
        item.addEventListener('click', function() {
            var url = item.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
});
