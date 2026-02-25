function toggleCheckout(title = '', imgSrc = '') {
    const modal = document.getElementById('checkoutGamer');
    const display = modal.style.display === 'flex' ? 'none' : 'flex';
    modal.style.display = display;

    if (title) {
        document.getElementById('checkout-title').textContent = title;
        document.getElementById('checkout-img').src = imgSrc;
    }
}
