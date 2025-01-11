document.addEventListener('DOMContentLoaded', () => {
    const cart = []; // Array to store cart items
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');
    const gallery = document.getElementById('gallery');

    // Add click event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach((button) => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            const product = { id: productId, name: productName, price: productPrice };
            cart.push(product);

            alert(`${productName} has been added to your cart!`);
            console.log('Cart:', cart);
        });
    });

    // Toggle grid view
    gridView.addEventListener('click', () => {
        gallery.classList.remove('list-view');
        gallery.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3');
    });

    // Toggle list view
    listView.addEventListener('click', () => {
        gallery.classList.remove('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3');
        gallery.classList.add('list-view', 'flex', 'flex-col');
    });
});
