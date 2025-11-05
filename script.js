document.addEventListener('DOMContentLoaded', () => {
  // Burger menu functionality
  const burgerContainer = document.querySelector('.burger-container');
  const navLinks = document.querySelector('.nav-links');
  const header = document.getElementById('header');
  
  burgerContainer.addEventListener('click', () => {
    burgerContainer.classList.toggle('active');
    navLinks.classList.toggle('active');
    header.classList.toggle('nav-active');
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      burgerContainer.classList.remove('active');
      navLinks.classList.remove('active');
      header.classList.remove('nav-active');
    });
  });
  
  document.addEventListener('click', (event) => {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnBurger = burgerContainer.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnBurger && navLinks.classList.contains('active')) {
      burgerContainer.classList.remove('active');
      navLinks.classList.remove('active');
      header.classList.remove('nav-active');
    }
  });

  // Category filtering functionality
  const categoryButtons = document.querySelectorAll('.categorie-tab');
  const products = document.querySelectorAll('.produit');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const category = button.getAttribute('data-category');
      
      products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });
});
