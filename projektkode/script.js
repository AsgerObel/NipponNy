const heroImages = document.querySelectorAll('.hero-images img');
let currentImageIndex = 0;

function rotateImage() {
    heroImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroImages[currentImageIndex].classList.add('active');
}

setInterval(rotateImage, 5000);



/* Menu siden med hjerte ikon animation */ 

const heartIcons = document.querySelectorAll('.heart-icon');
        
        heartIcons.forEach(heartIcon => {
            heartIcon.addEventListener('click', function() {
                this.classList.add('active');
                this.classList.add('fade');
                setTimeout(() => {
                    this.classList.remove('active');
                    this.classList.remove('fade');
                }, 500); 
            });
        });


    
        document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            const toggleSignup = document.getElementById('toggleSignup');
            const toggleLogin = document.getElementById('toggleLogin');
        
            toggleSignup.addEventListener('click', (e) => {
                e.preventDefault();
                loginForm.style.display = 'none';
                signupForm.style.display = 'block';
            });
        
            toggleLogin.addEventListener('click', (e) => {
                e.preventDefault();
                signupForm.style.display = 'none';
                loginForm.style.display = 'block';
            });
        
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                alert('Log ind-funktionalitet skal implementeres');
            });
        
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                alert('Tilmeld dig-funktionalitet skal implementeres');
            });
        });


        document.addEventListener('DOMContentLoaded', () => {
            const cartCount = document.querySelector('.cart-count');
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            const likeButtons = document.querySelectorAll('.like-btn');
        
            let count = 0;
        
            addToCartButtons.forEach(button => {
                button.addEventListener('click', () => {
                    count++;
                    cartCount.textContent = count;
                    
                   
                    button.classList.add('bounce');
                    setTimeout(() => button.classList.remove('bounce'), 500);
        
                    // Forsøg på animation på +1 i kurv // 
                    const plusOne = document.createElement('span');
                    plusOne.textContent = '+1';
                    plusOne.style.position = 'absolute';
                    plusOne.style.top = '0';
                    plusOne.style.right = '0';
                    plusOne.style.color = 'green';
                    plusOne.style.fontWeight = 'bold';
                    plusOne.style.animation = 'bounce 0.5s';
                    button.style.position = 'relative';
                    button.appendChild(plusOne);
                    
                    setTimeout(() => button.removeChild(plusOne), 500);
                });
            });
        
            likeButtons.forEach(button => {
                button.addEventListener('click', () => {
                    button.classList.toggle('active');
                });
            });
        });
        

