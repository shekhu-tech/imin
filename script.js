// Function to inject header
function injectHeader() {
  const headerContainer = document.getElementById('header-container');
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header id="main-header">
      <div class="logo">
        <a href="index.html">
          <img src="sti.png" alt="LuckyWin" />
        </a>
      </div>

      <nav>
        <div class="nav-item"><a href="electronics.html">Electronics</a></div>
        <div class="nav-item"><a href="footwear.html">Footwear</a></div>
        <div class="nav-item"><a href="smartphones.html">Smartphones</a></div>
        <div class="nav-item"><a href="pcs.html">Laptops & PCs</a></div>
        <div class="nav-item"><a href="fashion.html">Fashion & Accessories</a></div>
        <div class="nav-item"><a href="appliances.html">Home Appliances</a></div>
      </nav>

      <div class="menu-toggle" onclick="toggleSidebar()">
        <i class="fas fa-bars"></i>
      </div>

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
          <li><a class="sidebar-button" href="electronics.html"><span><i class="fas fa-plug"></i> Electronics</span></a></li>
          <li><a class="sidebar-button" href="footwear.html"><span><i class="fas fa-shoe-prints"></i> Footwear</span></a></li>
          <li><a class="sidebar-button" href="smartphones.html"><span><i class="fas fa-mobile-alt"></i> Smartphones</span></a></li>
          <li><a class="sidebar-button" href="pcs.html"><span><i class="fas fa-laptop-code"></i> Laptops & PCs</span></a></li>
          <li><a class="sidebar-button" href="fashion.html"><span><i class="fas fa-tshirt"></i> Fashion & Accessories</span></a></li>
          <li><a class="sidebar-button" href="appliances.html"><span><i class="fas fa-blender"></i> Home Appliances</span></a></li>
        </ul>
      </div>
    </header>
  `;
}

// Function to inject footer
function injectFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer id="site-footer">
      <div class="footer-container">
        <div class="footer-logo">LivFit.pro</div>
        <p class="footer-description">
          Where Wellness Meets Lifestyle. Unlock your healthiest, most vibrant self with LivFit.pro — your ultimate destination for holistic fitness, mindful living, and powerful transformation.
        </p>
        <div class="footer-buttons">
          <a href="electronics.html" class="footer-btn">Electronics</a>
          <a href="footwear.html" class="footer-btn">Footwear</a>
          <a href="smartphones.html" class="footer-btn">Smartphones</a>
          <a href="pcs.html" class="footer-btn">Laptops & PCs</a>
          <a href="fashion.html" class="footer-btn">Fashion & Accessories</a>
          <a href="appliances.html" class="footer-btn">Home Appliances</a>
          <a href="policy.html" class="footer-btn">Privacy Policy</a>
        </div>

        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} LivFit.pro. All rights reserved.
        </div>
      </div>
      <div class="scroll-to-top" id="scrollToTop">
        <i class="fas fa-arrow-up"></i>
      </div>
    </footer>
  `;
}

// Function to inject product section
function injectProductSection() {
  const container = document.getElementById('product-section');
  if (!container) return;

  const style = `
    <style>
      /* ======= Main Section ======= */
      .products-section {
        padding: 4rem 2rem;
        text-align: center;
        background: linear-gradient(135deg, #000000, #1a001f, #0c0012);
      }

      /* ======= Title Gradient ======= */
      .section-title {
        font-size: 2.5rem;
        margin-bottom: 3rem;
        background: linear-gradient(90deg, #ffd700, #ff4b2b, #ff00cc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* ======= Card Layout ======= */
      .cards-container1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .cards-container1 > .card {
        width: calc(33.333% - 1.34rem);
        box-sizing: border-box;
        text-decoration: none;
      }

      /* ======= Card Styling ======= */
      .card {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        height: 270px;
        max-width: 399px;
        width: 100%;
        background: linear-gradient(145deg, #1a001f, #0d0d0d);
        border: 2px solid rgba(255, 215, 0, 0.2);
        box-shadow: 0 0 25px rgba(255, 215, 0, 0.15), 0 0 10px #ff4b2b33;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        backdrop-filter: blur(10px);
      }

      .card:hover {
        transform: scale(1.07);
        border-color: #ffd700;
        box-shadow: 0 0 40px #ffd700, 0 0 15px #ff0080;
      }

      /* ======= Background Image Area ======= */
      .card-background {
        height: 65%;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.85;
        background-color: #000;
      }

      /* ======= Card Content ======= */
      .card-content2 {
        height: 35%;
        background: linear-gradient(to right, #190033, #0d001a);
        color: white;
        padding: 0.6rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #ff00cc;
        text-align: center;
      }

      .card-content2 h3 {
        font-size: 1.2rem;
        margin-bottom: 6px;
        color: #ffffff;
        text-shadow: 0 0 8px rgba(255, 0, 255, 0.2);
        letter-spacing: 0.5px;
      }

      /* ======= Button Style ======= */
      .btn {
        display: block;
        width: 100%;
        font-size: 0.95rem;
        padding: 10px 0;
        border-radius: 999px;
        background: linear-gradient(90deg, #ff9000, #ff4b2b, #ff0080);
        color: white;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 0 18px rgba(255, 105, 180, 0.4);
        transition: all 0.3s ease;
      }

      .btn:hover {
        background: linear-gradient(90deg, #ffd700, #ff0080);
        color: #000;
        box-shadow: 0 0 24px #ffd700;
      }

      /* ======= Top Corner Ribbon ======= */
      .corner-ribbon {
        position: absolute;
        top: 0;
        left: 0;
        border-top: 60px solid #ff00cc;
        border-right: 60px solid transparent;
        z-index: 10;
      }

      /* ======= Top Badge ======= */
      .card-category-badge {
        position: absolute;
        top: 12px;
        right: 12px;
        background: linear-gradient(135deg, #ffd700, #ff8c00);
        color: #000;
        font-weight: bold;
        padding: 6px 14px;
        border-radius: 999px;
        font-size: 0.9rem;
        z-index: 10;
        box-shadow: 0 2px 8px rgba(255, 200, 0, 0.5);
      }

      /* ======= Tablet ======= */
      @media (max-width: 1024px) {
        .cards-container1 > .card {
          width: 100%;
          max-width: 90%;
        }
        .card {
          height: 270px;
        }
      }

      /* ======= Mobile ======= */
      @media (max-width: 480px) {
        .products-section {
          padding: 2rem 1rem;
        }
        .section-title {
          font-size: 1.8rem;
        }
        .corner-ribbon {
          border-top: 40px solid #ff00cc;
          border-right: 40px solid transparent;
        }
        .btn {
          font-size: 0.85rem;
          padding: 8px 0;
        }
      }
    </style>
  `;

  const html = `
    <section class="products-section">
      <h2 class="section-title">Win-Amazing-Prizes</h2>
      <div class="cards-container1">
        <a href="proone.html" class="card">
          <div class="corner-ribbon"></div>
          <div class="card-category-badge">Footwear</div>
          <div class="card-background" style="background-image: url('dctsh2.jpg');"></div>
          <div class="card-content2">
            <h3>Decathlon Shoes</h3>
            <span class="btn">Enroll Now</span>
          </div>
        </a>

        <a href="gold.html" class="card">
          <div class="corner-ribbon"></div>
          <div class="card-category-badge">Gold & Bullion</div>
          <div class="card-background" style="background-image: url('rn.png');"></div>
          <div class="card-content2">
            <h3>Activate Yourself</h3>
            <span class="btn">Stretching</span>
          </div>
        </a>

        <a href="gold.html" class="card">
          <div class="corner-ribbon"></div>
          <div class="card-category-badge">Gold & Bullion</div>
          <div class="card-background" style="background-image: url('rn.png');"></div>
          <div class="card-content2">
            <h3>Activate Yourself</h3>
            <span class="btn">Stretching</span>
          </div>
        </a>

        <a href="gold.html" class="card">
          <div class="corner-ribbon"></div>
          <div class="card-category-badge">Gold & Bullion</div>
          <div class="card-background" style="background-image: url('rn.png');"></div>
          <div class="card-content2">
            <h3>Activate Yourself</h3>
            <span class="btn">Stretching</span>
          </div>
        </a>

        <a href="gold.html" class="card">
          <div class="corner-ribbon"></div>
          <div class="card-category-badge">Gold & Bullion</div>
          <div class="card-background" style="background-image: url('rn.png');"></div>
          <div class="card-content2">
            <h3>Activate Yourself</h3>
            <span class="btn">Stretching</span>
          </div>
        </a>

        <a href="gold.html" class="card">
          <div class="corner-ribbon"></div>
          <div class="card-category-badge">Gold & Bullion</div>
          <div class="card-background" style="background-image: url('rn.png');"></div>
          <div class="card-content2">
            <h3>Activate Yourself</h3>
            <span class="btn">Stretching</span>
          </div>
        </a>
      </div>
    </section>
  `;

  document.head.insertAdjacentHTML('beforeend', style);
  container.innerHTML = html;
}

// Function to inject Container1
function injectContainer1() {
  const container = document.getElementById('Container1');
  if (!container) return;

  const style = `
    <style>
       .container1 {
            text-align: center;
            background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 20px;
            color: #fff;
        }

        /* Section Title Styling */
        .section-title {
            font-size: 2.2rem;
            margin-bottom: 50px;
            background: linear-gradient(to right, #FFD700, #FFA500);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-weight: 800;
            letter-spacing: 1.5px;
            position: relative;
            display: inline-block;
            text-transform: uppercase;
        }

        .section-title:after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 5px;
            background: linear-gradient(to right, #FFD700, #FFA500);
            border-radius: 3px;
        }

        /* Features Section */
        .features-section {
            padding: 60px 0;
        }

        .cards-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            max-width: 1400px;
            margin: 0 auto;
            justify-content: center;
        }

        /* Feature Card Styling */
        .feature-card {
            background: rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transition: all 0.4s ease;
            height: 380px;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255, 215, 0, 0.3);
            padding: 40px 30px;
            text-align: center;
        }

        .feature-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 20px 40px rgba(255, 215, 0, 0.25);
            border-color: #FFD700;
            background: rgba(26, 26, 46, 0.6);
        }

        /* Card Icon Styling */
        .card-icon {
            font-size: 4.5rem;
            color: #FFD700;
            margin-bottom: 25px;
            position: relative;
            display: inline-block;
            transition: all 0.3s ease;
        }

        .feature-card:hover .card-icon {
            transform: scale(1.1);
            color: #FFA500;
        }

        .card-icon:after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(to right, #FFD700, #FFA500);
            border-radius: 3px;
        }

        /* Card Content */
        .card-content1 {
            padding: 20px 0;
            color: #fff;
            position: relative;
            z-index: 2;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }

        .card-content1 h3 {
            font-size: 1rem;
            margin-bottom: 25px;
            color: #FFD700;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .card-content1 p {
            font-size: 1.2rem;
            line-height: 1.7;
            opacity: 0.9;
            max-width: 350px;
            margin: 0 auto;
        }

        /* Glowing Effect */
        .feature-card:before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #ffd700, #ffa500, #ffd700, #ffa500);
            z-index: -1;
            border-radius: 22px;
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        .feature-card:hover:before {
            opacity: 0.4;
        }

        /* Jackpot Badge */
        .jackpot-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #C1272D, #8E1E23);
            color: #FFD700;
            padding: 8px 20px;
            border-radius: 30px;
            font-size: 0.9rem;
            font-weight: bold;
            z-index: 3;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
            .cards-container {
                gap: 30px;
            }

            .feature-card {
                height: 360px;
                padding: 30px 25px;
            }

            .card-icon {
                font-size: 4rem;
            }

            .card-content1 h3 {
                font-size: 1.8rem;
            }
        }

        @media (max-width: 992px) {
            .cards-container {
                grid-template-columns: repeat(2, 1fr);
            }

            .section-title {
                font-size: 2.8rem;
            }
        }

        @media (max-width: 768px) {
            .section-title {
                font-size: 2.4rem;
            }

            .cards-container {
                grid-template-columns: 1fr;
                max-width: 600px;
            }

            .feature-card {
                height: 320px;
                max-width: 500px;
                margin: 0 auto;
            }

            .card-content1 h3 {
                font-size: 1.7rem;
            }
        }

        /* For small devices like iPhone 12 Mini and others */
@media (max-width: 480px) {
    .features-section .section-title {
        /* फॉन्ट साइज को पढ़ने लायक बनाया गया */
        font-size: 2rem; 
    }

    .feature-card {
        height: auto; /* ऊंचाई को ऑटो किया ताकि कंटेंट फिट हो सके */
        padding: 25px 20px;
    }

    .card-icon {
        font-size: 3rem; /* आइकन को थोड़ा छोटा किया */
    }
    
    .card-content1 h3 {
        /* सिंटैक्स ठीक किया गया और साइज एडजस्ट किया गया */
        font-size: 1.1rem; 
    }

    .card-content1 p {
        /* फॉन्ट साइज को पढ़ने लायक बनाया गया */
        font-size: 0.9rem; 
        line-height: 1.5; /* लाइनों के बीच स्पेस बढ़ाया */
    }
}
    </style>
  `;

  const html = `
  <div class="container1">
        <section class="features-section">
            <h2 class="section-title">Why Choose Us?</h2>
            <div class="cards-container">
                <div class="feature-card">
                    <span class="jackpot-badge">Top Rated</span>
                    <div class="card-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="card-content1">
                        <h3>Trusted & Secure</h3>
                        <p>Licensed and regulated lottery platform with bank-level security to protect your transactions and personal information. Your safety is our top priority.</p>
                    </div>
                </div>

                <div class="feature-card">
                    <span class="jackpot-badge">Massive Wins</span>
                    <div class="card-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div class="card-content1">
                        <h3>Life-Changing Jackpots</h3>
                        <p>We offer the biggest jackpots in the industry with record-breaking prizes. Join millions of players chasing life-changing winnings every day.</p>
                    </div>
                </div>

                <div class="feature-card">
                    <span class="jackpot-badge">Fast Cash</span>
                    <div class="card-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div class="card-content1">
                        <h3>Instant Payouts</h3>
                        <p>Get your winnings instantly with our lightning-fast payment system. No waiting periods - your money is transferred within minutes of winning!</p>
                    </div>
                </div>

                <div class="feature-card">
                    <span class="jackpot-badge">Endless Fun</span>
                    <div class="card-icon">
                        <i class="fas fa-dice"></i>
                    </div>
                    <div class="card-content1">
                        <h3>Endless Game Variety</h3>
                        <p>From daily draws to massive jackpot games, scratch cards to number games - we offer the widest selection of lottery games anywhere.</p>
                    </div>
                </div>

                <div class="feature-card">
                    <span class="jackpot-badge">Play Anywhere</span>
                    <div class="card-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="card-content1">
                        <h3>Seamless Mobile Play</h3>
                        <p>Play your favorite lottery games anywhere, anytime with our award-winning mobile app. Never miss a draw with push notifications.</p>
                    </div>
                </div>

                <div class="feature-card">
                    <span class="jackpot-badge">24/7 Support</span>
                    <div class="card-icon">
                        <i class="fas fa-headset"></i>
                    </div>
                    <div class="card-content1">
                        <h3>Dedicated Support</h3>
                        <p>Our lottery experts are available 24/7 to answer your questions. Get instant help via live chat, phone, or email whenever you need it.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  `;

  document.head.insertAdjacentHTML('beforeend', style);
  container.innerHTML = html;
}

// Initialize site functionality
function initializeSite() {
  // Header scroll effect
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Toggle sidebar function
  window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('active');
  };

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('active')) toggleSidebar();
      }
    });
  });

  document.head.appendChild(buttonStyle);

  const button = document.createElement('a');
  button.href = 'register.html';
  button.className = 'floating-register-button';

  const innerDiv = document.createElement('div');
  innerDiv.className = 'register-button-inner';
  innerDiv.textContent = 'Register';

  button.appendChild(innerDiv);
  document.body.appendChild(button);
}

// Single DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  injectProductSection();
  injectContainer1(); // This line was corrected/added
  initializeSite();
});
