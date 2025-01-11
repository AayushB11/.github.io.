// JavaScript for handling the Marketplace redirection
document.addEventListener('DOMContentLoaded', () => {
    const marketplaceLink = document.getElementById('marketplace-link');

    if (marketplaceLink) {
        marketplaceLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            window.location.href = 'collab-digital.html'; // Redirect to the target page
        });
    }
});





