// Function to inject header
function injectHeader() {
  const headerContainer = document.getElementById('header-container');
  
  headerContainer.innerHTML = `
    <header id="main-header">
  <div class="logo">
    <a href="index.html">
      <img src="sti.png" alt="LuckyWin" />
    </a>
  </div>

  <!-- Top Navigation -->
  <nav>
    <div class="nav-item"><a href="register.html">Register</a></div>
    <div class="nav-item"><a href="electronics.html">Electronics</a></div>
    <div class="nav-item"><a href="footwear.html">Footwear</a></div>
    <div class="nav-item"><a href="smartphones.html">Smartphones</a></div>
    <div class="nav-item"><a href="pcs.html">Laptops & PCs</a></div>
    <div class="nav-item"><a href="fashion.html">Fashion & Accessories</a></div>
    <div class="nav-item"><a href="appliances.html">Home Appliances</a></div>
    <div class="nav-item"><a href="gaming.html">Gaming & Entertainment</a></div>
    <div class="nav-item"><a href="travel.html">Travel & Experiences</a></div>
    <div class="nav-item"><a href="cash.html">Cash & Gift Cards</a></div>
    <div class="nav-item"><a href="donate.html" class="donate-btn">Donate</a></div>
  </nav>

  <!-- Mobile Toggle -->
  <div class="menu-toggle" onclick="toggleSidebar()">
    <i class="fas fa-bars"></i>
  </div>

  <!-- Sidebar Menu -->
  <div class="sidebar" id="sidebar">
    <div class="close-btn" onclick="toggleSidebar()">
      <i class="fas fa-times"></i>
    </div>

    <div class="sidebar-logo">
      <a href="index.html">
        <img src="sti.png" alt="LuckyWin Logo" />
      </a>
    </div>

    <ul>
      <li><a class="sidebar-button" href="register.html"><span><i class="fas fa-user-plus"></i> Register</span></a></li>

      <li><a class="sidebar-button" href="electronics.html"><span><i class="fas fa-plug"></i> Electronics</span></a></li>
      <li><a class="sidebar-button" href="footwear.html"><span><i class="fas fa-shoe-prints"></i> Footwear</span></a></li>
      <li><a class="sidebar-button" href="smartphones.html"><span><i class="fas fa-mobile-alt"></i> Smartphones</span></a></li>
      <li><a class="sidebar-button" href="pcs.html"><span><i class="fas fa-laptop-code"></i> Laptops & PCs</span></a></li>
      <li><a class="sidebar-button" href="fashion.html"><span><i class="fas fa-tshirt"></i> Fashion & Accessories</span></a></li>
      <li><a class="sidebar-button" href="appliances.html"><span><i class="fas fa-blender"></i> Home Appliances</span></a></li>
      <li><a class="sidebar-button" href="gaming.html"><span><i class="fas fa-gamepad"></i> Gaming & Entertainment</span></a></li>
      <li><a class="sidebar-button" href="travel.html"><span><i class="fas fa-plane-departure"></i> Travel & Experiences</span></a></li>
      <li><a class="sidebar-button" href="cash.html"><span><i class="fas fa-money-bill-wave"></i> Cash & Gift Cards</span></a></li>

      <li><a class="sidebar-button" href="donate.html"><span><i class="fas fa-donate"></i> Donate</span></a></li>
      <li><a class="sidebar-button" href="user.html"><span><i class="fas fa-user"></i> User</span></a></li>
    </ul>
  </div>
</header>


  `;
}

// Function to inject footer
function injectFooter() {
  const footerContainer = document.getElementById('footer-container');
  
  footerContainer.innerHTML = `
    <footer id="site-footer">
      <div class="footer-container">
        <div class="footer-logo"></div>
        <p>
        </p>
        <div class="footer-buttons">
  <a href="electronics.html" class="footer-btn">Electronics</a>
  <a href="footwear.html" class="footer-btn">Footwear</a>
  <a href="smartphones.html" class="footer-btn">Smartphones</a>
  <a href="pcs.html" class="footer-btn">Laptops & PCs</a>
  <a href="fashion.html" class="footer-btn">Fashion & Accessories</a>
  <a href="appliances.html" class="footer-btn">Home Appliances</a>
  <a href="gaming.html" class="footer-btn">Gaming & Entertainment</a>
  <a href="travel.html" class="footer-btn">Travel & Experiences</a>
  <a href="cash.html" class="footer-btn">Cash & Gift Cards</a>

  <!-- Optional Useful Links -->
  <a href="register.html" class="footer-btn">Register</a>
  <a href="donate.html" class="footer-btn">Donate</a>
  <a href="policy.html" class="footer-btn">Privacy Policy</a>
</div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} LivFit.pro. All rights reserved.
        </div>
      </div>
      <!-- Scroll to Top Button -->
      <div class="scroll-to-top" id="scrollToTop">
        <i class="fas fa-arrow-up"></i>
      </div>
    </footer>
  `;
}

// Initialize all site functionality
function initializeSite() {
  // Header scroll effect
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu functionality
  window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  };

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close sidebar if open
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('active')) {
          toggleSidebar();
        }
      }
    });
  });
}

// Inject components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  initializeSite();
});

// Slider Functionality
   document.addEventListener('DOMContentLoaded', function() {
            const slider = document.getElementById('slider');
            const images = document.querySelectorAll('.slider-background img');
            const dots = document.querySelectorAll('.slider-controls .dot');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            let currentIndex = 0;
            const totalSlides = images.length;
            
            // Function to update slider
            function updateSlider(index) {
                // Remove active class from all images and dots
                images.forEach(img => img.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                // Add active class to current image and dot
                images[index].classList.add('active');
                dots[index].classList.add('active');
                currentIndex = index;
                
                // Update jackpot amount animation
                animateJackpot();
            }
            
            // Next slide function
            function nextSlide() {
                let nextIndex = (currentIndex + 1) % totalSlides;
                updateSlider(nextIndex);
            }
            
            // Previous slide function
            function prevSlide() {
                let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlider(prevIndex);
            }
            
            // Auto slide
            let slideInterval = setInterval(nextSlide, 5000);
            
            // Reset interval on user interaction
            function resetInterval() {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            }
            
            // Jackpot animation
            function animateJackpot() {
                const jackpot = document.querySelector('.jackpot-display');
                jackpot.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    jackpot.style.transform = 'scale(1)';
                }, 300);
            }
            
            // Event listeners
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
            
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });
            
            // Add click events to dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    updateSlider(index);
                    resetInterval();
                });
            });
            
            // Initialize slider
            updateSlider(0);
            
            // Button hover effect
            const playBtn = document.querySelector('.slider-btn');
            playBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 15px 35px rgba(193, 39, 45, 0.8)';
            });
            
            playBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 10px 25px rgba(193, 39, 45, 0.5)';
            });
        });


  // Create style element
  const style = document.createElement('style');
  style.textContent = `
    .floating-register-button {
      position: fixed;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-color: transparent;
      border: none;
      z-index: 1000;
    }

    .register-button-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 97px;
      width: 27px;
      background-color: #007BFF;
      color: white;
      text-decoration: none;
      font-weight: bold;
      border-radius: 0 10px 10px 0;
      box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s ease;
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }

    .register-button-inner:hover {
      background-color: #0056b3;
    }
  `;
  document.head.appendChild(style);

  // Create the anchor element
  const button = document.createElement('a');
  button.href = 'register.html';
  button.className = 'floating-register-button';

  // Create the inner div
  const innerDiv = document.createElement('div');
  innerDiv.className = 'register-button-inner';
  innerDiv.textContent = 'Register';

  // Nest the inner div inside the anchor
  button.appendChild(innerDiv);

  // Add the button to the body
  document.body.appendChild(button);
