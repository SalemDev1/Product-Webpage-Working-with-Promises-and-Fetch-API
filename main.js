//Task 2- Fetch Products from the API Using Fetch and Promises
// Get the container element to display the products
const productContainer = document.getElementById('product-container');

// Fetch products from the API website link seen below 
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => response.json()) 
    .then(data => displayProducts(data)) 
    .catch(error => {
        console.error('Error fetching products:', error);   // Log any errors in the console for debugging
        productContainer.textContent = "Failed to load furniture items. Please vist us later and try again , no furnishing today :-(  ."; //Display an error message in the case there is an issue with the fetch request 
    });

