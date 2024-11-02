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

// Task 3: Display Product Details Dynamically
function displayProducts(products) {
    products.forEach(product => {
        const { name, company, price, image } = product.fields; 

         // Create HTML elements to show product details such as price,picture,company,etc.
        const productElement = document.createElement('div'); 
        const productCompany = document.createElement('p');
        const productName = document.createElement('h2');
        const productPrice = document.createElement('p');
        const productImg = document.createElement('img');

         // Sets the actual info/content for each element that populates product data
        productCompany.textContent = `Company Name: ${company}`;
        productPrice.textContent = `Product Price: $${(price / 100).toFixed(2)}`;
        productName.textContent = `Product Name: ${name}`;
        productImg.src = image[0].url;
        productImg.alt = `${name} image`;

        // calls to the elements  
        productElement.appendChild(productCompany);
        productElement.appendChild(productPrice);
        productElement.appendChild(productName);
        productElement.appendChild(productImg);

        // calls to the products 
        productContainer.appendChild(productElement);
    });
}
