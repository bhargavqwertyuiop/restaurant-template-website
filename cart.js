// cart.js

document.addEventListener('DOMContentLoaded', function () {
    // Update cart item count
    updateCartItemCount();

    // Add event listener for "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            const productName = this.getAttribute('data-name');
            const productPrice = this.getAttribute('data-price');

            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            cart.push({ id: productId, name: productName, price: productPrice });
            sessionStorage.setItem('cart', JSON.stringify(cart));

            // Update cart item count after adding item to cart
            updateCartItemCount();
        });
    });

    // Function to update cart item count
    function updateCartItemCount() {
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        const cartItemCount = cart.length;
        document.getElementById('cart-item-count').textContent = cartItemCount;
    }
});


/*

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve cart data from session storage
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Get the container element to display cart items
    const cartItemsContainer = document.getElementById('cart-items');

    // Generate HTML for each cart item
    const cartItemsHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            </div>
        </div>
    `).join('');

    // Set the HTML content of the container to display cart items
    cartItemsContainer.innerHTML = cartItemsHTML;

    // Calculate total price
    const totalPriceValue = cart.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);
    document.getElementById('total-price-value').textContent = `$${totalPriceValue}`;

    // "Pay Now" button functionality
    const payNowButton = document.getElementById('pay-now');
    payNowButton.addEventListener('click', function (event) {
        event.preventDefault();
        // Add logic to process payment here
        alert('Payment processed successfully!');
    });
});
*/



document.addEventListener('DOMContentLoaded', function () {
    // Retrieve cart data from session storage
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Get the container element to display cart items
    const cartItemsContainer = document.getElementById('cart-items');

    // Generate HTML for each cart item
    const cartItemsHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            </div>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            
        </div>
    `).join('');

    // Set the HTML content of the container to display cart items
    cartItemsContainer.innerHTML = cartItemsHTML;

    // Calculate total price
    const totalPriceValue = cart.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);
    document.getElementById('total-price-value').textContent = `$${totalPriceValue}`;

    // "Pay Now" button functionality
    const payNowButton = document.getElementById('pay-now');
    payNowButton.addEventListener('click', function (event) {
        event.preventDefault();
        // Add logic to process payment here
        window.location.href = "payment.html"
    });

    // Add event listener for "Remove" buttons
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
    removeFromCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            // Remove the item from the cart based on its id
            cart = cart.filter(item => item.id !== productId);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            // Refresh the cart display
            window.location.reload();
        });
    });
});
