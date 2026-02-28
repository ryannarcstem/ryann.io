// ===== Data Storage =====
const products = [
    {
        id: 1,
        name: "Minimalist Oak Chair",
        category: "furniture",
        price: 495,
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500",
        featured: true,
        badge: "New"
    },
    {
        id: 2,
        name: "Ceramic Vase Collection",
        category: "decor",
        price: 145,
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500",
        featured: true
    },
    {
        id: 3,
        name: "Brass Arc Lamp",
        category: "lighting",
        price: 685,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        featured: true,
        badge: "Popular"
    },
    {
        id: 4,
        name: "Linen Throw Blanket",
        category: "textiles",
        price: 125,
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500",
        featured: true
    },
    {
        id: 5,
        name: "Walnut Coffee Table",
        category: "furniture",
        price: 895,
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500"
    },
    {
        id: 6,
        name: "Glass Pendant Light",
        category: "lighting",
        price: 345,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500"
    },
    {
        id: 7,
        name: "Marble Bookends",
        category: "decor",
        price: 95,
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500"
    },
    {
        id: 8,
        name: "Wool Area Rug",
        category: "textiles",
        price: 645,
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=500",
        badge: "New"
    },
    {
        id: 9,
        name: "Rattan Lounge Chair",
        category: "furniture",
        price: 745,
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500"
    },
    {
        id: 10,
        name: "Table Lamp Set",
        category: "lighting",
        price: 235,
        image: "https://images.unsplash.com/photo-1534105615216-e995ed4a5ecd?w=500"
    },
    {
        id: 11,
        name: "Botanical Print Set",
        category: "decor",
        price: 165,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500"
    },
    {
        id: 12,
        name: "Cotton Cushion Set",
        category: "textiles",
        price: 85,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500"
    }
];

const blogPosts = [
    {
        id: 1,
        title: "The Art of Slow Living",
        excerpt: "Discover how mindful consumption and intentional design choices can transform your daily routine into moments of quiet luxury.",
        date: "March 15, 2024",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        featured: true
    },
    {
        id: 2,
        title: "Sustainable Materials in Modern Design",
        excerpt: "Exploring the intersection of sustainability and aesthetics in contemporary furniture making.",
        date: "March 10, 2024",
        category: "Design",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800"
    },
    {
        id: 3,
        title: "Creating a Mindful Morning Routine",
        excerpt: "Simple rituals and thoughtful spaces that set the tone for intentional living.",
        date: "March 5, 2024",
        category: "Wellness",
        image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800"
    },
    {
        id: 4,
        title: "The Beauty of Handcrafted Objects",
        excerpt: "Why artisan-made pieces bring soul and story to our living spaces.",
        date: "February 28, 2024",
        category: "Craft",
        image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800"
    },
    {
        id: 5,
        title: "Minimalism as a Lifestyle Choice",
        excerpt: "How embracing less can lead to a richer, more fulfilling life experience.",
        date: "February 20, 2024",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800"
    },
    {
        id: 6,
        title: "Natural Light and Interior Design",
        excerpt: "Harnessing sunlight to create warm, inviting spaces throughout the day.",
        date: "February 15, 2024",
        category: "Design",
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800"
    }
];

// ===== Cart Management =====
let cart = JSON.parse(localStorage.getItem('meridianCart')) || [];

function updateCartCount() {
    const cartCounts = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCounts.forEach(count => {
        count.textContent = totalItems;
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('meridianCart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('meridianCart', JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('meridianCart', JSON.stringify(cart));
            loadCartItems();
        }
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2c2416;
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ===== Product Display =====
function displayProducts(productsToShow, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">$${product.price}</p>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Blog Display =====
function displayBlogPosts() {
    const featuredContainer = document.getElementById('featuredPost');
    const blogGrid = document.getElementById('blogGrid');
    
    if (featuredContainer) {
        const featured = blogPosts.find(post => post.featured);
        featuredContainer.innerHTML = `
            <div class="featured-post-card">
                <div class="featured-post-image">
                    <div class="image-placeholder" style="background-image: url('${featured.image}'); background-size: cover; background-position: center;"></div>
                </div>
                <div class="story-text">
                    <span class="story-label">${featured.category}</span>
                    <h2 class="story-title">${featured.title}</h2>
                    <p class="story-excerpt">${featured.excerpt}</p>
                    <div class="blog-meta">
                        <span>${featured.date}</span>
                    </div>
                    <a href="#" class="blog-link">Read Full Story →</a>
                </div>
            </div>
        `;
    }
    
    if (blogGrid) {
        const regularPosts = blogPosts.filter(post => !post.featured);
        blogGrid.innerHTML = regularPosts.map(post => `
            <article class="blog-card">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="blog-meta">
                    <span>${post.category}</span>
                    <span>${post.date}</span>
                </div>
                <h2 class="blog-title">${post.title}</h2>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="blog-link">Read More →</a>
            </article>
        `).join('');
    }
}

// ===== Cart Page Functions =====
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartContainer = document.querySelector('.cart-container');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        if (cartContainer) cartContainer.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'flex';
        return;
    }
    
    if (cartContainer) cartContainer.style.display = 'grid';
    if (emptyCart) emptyCart.style.display = 'none';
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="cart-item-category">${item.category}</p>
                <p class="cart-item-price">$${item.price}</p>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 500 ? 0 : 'Free';
    const total = subtotal;
    
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : shipping;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// ===== Filter and Sort Functions =====
function filterProducts(category) {
    const allProducts = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(allProducts, 'productsGrid');
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sortedProducts = [...products];
    
    switch(sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    const activeCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
    const filteredProducts = activeCategory === 'all' ? sortedProducts : sortedProducts.filter(p => p.category === activeCategory);
    displayProducts(filteredProducts, 'productsGrid');
}

// ===== Mobile Navigation =====
function setupMobileNav() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ===== Newsletter Form =====
function setupNewsletterForm() {
    const forms = document.querySelectorAll('#newsletterForm');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            showNotification('Thank you for subscribing!');
            form.reset();
        });
    });
}

// ===== Checkout Button =====
function setupCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            showNotification('Checkout functionality coming soon!');
        });
    }
}

// ===== Scroll Effects =====
function setupScrollEffects() {
    const nav = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
}

// ===== Initialize Page =====
document.addEventListener('DOMContentLoaded', () => {
    // Update cart count on all pages
    updateCartCount();
    
    // Setup mobile navigation
    setupMobileNav();
    
    // Setup newsletter forms
    setupNewsletterForm();
    
    // Setup scroll effects
    setupScrollEffects();
    
    // Page-specific initialization
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        // Homepage - display featured products
        const featuredProducts = products.filter(p => p.featured);
        displayProducts(featuredProducts, 'featuredProducts');
    }
    
    if (currentPage === 'shop.html') {
        // Shop page - display all products and setup filters
        displayProducts(products, 'productsGrid');
        
        // Setup filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                filterProducts(btn.dataset.category);
            });
        });
        
        // Set first button as active
        document.querySelector('.filter-btn')?.classList.add('active');
        
        // Setup sort dropdown
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', sortProducts);
        }
    }
    
    if (currentPage === 'blog.html') {
        // Blog page - display blog posts
        displayBlogPosts();
    }
    
    if (currentPage === 'cart.html') {
        // Cart page - load cart items
        loadCartItems();
        setupCheckout();
    }
});

// ===== Add CSS animations =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
