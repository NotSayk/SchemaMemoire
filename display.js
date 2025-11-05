document.addEventListener('DOMContentLoaded', function() {
    fetch('liste_produit.json')
        .then(response => response.json())
        .then(products => {
            initializeProductDisplay(products);
        })
        .catch(error => {
            console.error('Error loading product data:', error);
        });
});

function initializeProductDisplay(products) {
    const productContainer = document.querySelector('.produit-liste');
    const categoryTabs = document.querySelectorAll('.categorie-tab');
    
    productContainer.innerHTML = '';
    
    renderProducts(products, productContainer);
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.getAttribute('data-category');
            
            if (category === 'all') {
                renderProducts(products, productContainer);
            } else {
                const filteredProducts = products.filter(product => 
                    product.category === category || 
                    (product.tags && Array.isArray(product.tags) && 
                     product.tags.some(tag => tag.toLowerCase() === category))
                );
                renderProducts(filteredProducts, productContainer);
            }
        });
    });
}

function createTagsHTML(tags) {
    if (!tags || !Array.isArray(tags)) return '';
    
    return tags.map(tag => {
        const tagClass = tag.toLowerCase();
        return `<span class="tag tag-${tagClass}">${tag}</span>`;
    }).join('');
}

function seeMoreInfo(productId) {
    const url = `infoProd.html?id=${productId}`;
    window.location.href = url;
}

function renderProducts(products, container) {
    container.innerHTML = '';
    
    products.forEach(product => {
        const productElement = document.createElement('article');
        productElement.classList.add('produit');
        productElement.setAttribute('data-category', product.category);
        
        if (product.tags && Array.isArray(product.tags)) {
            product.tags.forEach(tag => {
                productElement.setAttribute(`data-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`, 'true');
            });
        }
        
        productElement.innerHTML = `
            <div class="produit-image-container">
                <img src="${product.image}" alt="${product.alt}" loading="lazy" />
                <div class="produit-overlay">
                    <a class="btn-savoir-plus" data-product-id="${product.id}">En savoir plus</a>
                </div>
            </div>
            <div class="produit-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="produit-tags">
                    ${createTagsHTML(product.tags)}
                </div>
            </div>
        `;
        
        container.appendChild(productElement);
        
        const seeMoreBtn = productElement.querySelector('.btn-savoir-plus');
        seeMoreBtn.addEventListener('click', () => seeMoreInfo(product.id));
    });
}