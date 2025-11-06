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
                    product.category === category
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

function renderProducts(products, container) {
    container.innerHTML = '';
    
    products.forEach(product => {
        const productElement = document.createElement('article');
        productElement.classList.add('produit');
        productElement.setAttribute('data-category', product.category);
        
        const variantsHTML = product.variants.map((variant, index) => `
            <button class="color-dot" data-index="${index}" style="background-color: ${getColorCode(variant.color)}" title="${variant.color}" aria-label="Couleur ${variant.color}"></button>
        `).join('');
        
        const firstVariant = product.variants[0];
        
        productElement.innerHTML = `
            <div class="produit-image-container">
                <img src="${firstVariant.image}" alt="${firstVariant.alt}" loading="lazy" class="produit-img" />
            </div>
            <div class="produit-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="produit-colors">
                    ${variantsHTML}
                </div>
                <div class="produit-price">${product.price.toFixed(2)}€</div>
            </div>
        `;
        
        container.appendChild(productElement);
        
        const colorDots = productElement.querySelectorAll('.color-dot');
        colorDots[0].classList.add('active');
        
        colorDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const variant = product.variants[index];
                const img = productElement.querySelector('.produit-img');
                
                img.src = variant.image;
                img.alt = variant.alt;
                
                colorDots.forEach(d => d.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
}

function getColorCode(colorName) {
    const colors = {
        'noir': '#1a1a1a',
        'blanc': '#ffffff',
        'rouge': '#ef4444',
        'bleu': '#3b82f6',
        'jaune': '#fbbf24',
        'orange': '#f97316'
    };
    return colors[colorName.toLowerCase()] || '#cccccc';
}