const prices = document.querySelectorAll('.price-value');
const toggle = document.getElementById('billing-period');

prices.forEach(price => {
    price.dataset.originalPrice = parseFloat(price.textContent);
});
toggle.addEventListener('change', () => {
    prices.forEach(price => {
        const originalPrice = parseFloat(price.dataset.originalPrice);
          const newPrice = toggle.checked
            ? Math.floor(originalPrice / 10 * 100) / 100
            : originalPrice;
        price.textContent = newPrice.toFixed(2);
    });
});
