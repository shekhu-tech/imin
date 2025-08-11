// Function to inject header
function injectHeader() {
  const headerContainer = document.getElementById('header-container');
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header id="main-header">
      <div class="logo">
        <a href="index.html">
          <img src="logo.png" alt="ShopEase" />
        </a>
      </div>

      <nav>
        <div class="nav-item"><a href="footwear.html">Footwear</a></div>
        <div class="nav-item"><a href="watches.html">Watches</a></div>
        <div class="nav-item"><a href="accessories.html">Accessories</a></div>
        <div class="nav-item"><a href="fashion.html">Fashion</a></div>
        <div class="nav-item"><a href="appliances.html">Appliances</a></div>
        <div class="nav-item"><a href="deals.html">Today's Deals</a></div>
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
            <img src="logo.png" alt="ShopEase Logo" />
          </a>
        </div>

        <ul>
          <li><a class="sidebar-button" href="footwear.html"><span><i class="fas fa-shoe-prints"></i>Footwear</span></a></li>
          <li><a class="sidebar-button" href="watches.html"><span><i class="fas fa-clock"></i>Watches</span></a></li>
          <li><a class="sidebar-button" href="accessories.html"><span><i class="fas fa-headphones"></i>Accessories</span></a></li>
          <li><a class="sidebar-button" href="fashion.html"><span><i class="fas fa-tshirt"></i>Fashion</span></a></li>
          <li><a class="sidebar-button" href="appliances.html"><span><i class="fas fa-blender"></i>Appliances</span></a></li>
          <li><a class="sidebar-button" href="deals.html"><span><i class="fas fa-tag"></i>Today's Deals</span></a></li>
        </ul>
      </div>
    </header>
  `;
}

// Function to inject footer
function injectFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  const style = `
    <style>
      .footer-header {
        text-align: center;
        margin-bottom: 25px;
        padding: 0 15px;
      }

      .footer-heading {
        font-size: 2.2rem;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.7);
        margin-bottom: 15px;
        font-weight: 700;
        letter-spacing: 0.5px;
        background: linear-gradient(to right, #ffd700, #ffaa00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
      }

      .footer-lines {
        color: #ffd700;
        line-height: 1.7;
        max-width: 600px;
        margin: 0 auto;
        font-size: 1.15rem;
        text-align: center;
        text-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
        font-weight: 500;
      }

      footer .footer-btn {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, #ff9000, #ff4b2b) !important;
        border-radius: 50% !important;
        color: white !important;
        text-decoration: none;
        font-size: 16px;
        border: none;
        box-shadow: 0 4px 10px rgba(255, 102, 0, 0.3);
        padding: 0;
        transition: all 0.3s ease;
      }

      .footer-buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap; 
        gap: 15px;
      }

      .social-links {
        margin: 2rem 0;
        display: flex;
        justify-content: center;
        gap: 20px;
      }

      .social-links a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 50%;
        color: #fff;
        font-size: 1.3rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .social-links a:hover {
        background: linear-gradient(45deg, #ff00cc, #ffd700);
        color: #333;
        transform: translateY(-8px) rotate(5deg);
        box-shadow: 0 8px 20px rgba(255, 0, 204, 0.4);
      }

      .social-nav {
        margin-top: 15px;
        display: flex;
        justify-content: center;
        gap: 15px;
      }

      .social-icon {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        font-size: 16px;
        border-radius: 50%;
        transition: all 0.3s ease;
      }

      .social-icon:hover {
        transform: translateY(-3px);
        opacity: 0.9;
      }

      .social-icon.facebook {
        background-color: #3b5998;
      }

      .social-icon.twitter {
        background-color: #1DA1F2;
      }

      .social-icon.instagram {
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
      }

      .copyright {
        margin-top: 2.5rem;
        text-align: center;
        opacity: 0.7;
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.6);
      }

      .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #ffd700, #ff00cc);
        color: #333;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
        z-index: 1000;
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
      }

      .scroll-to-top.active {
        opacity: 1;
        visibility: visible;
      }

      .scroll-to-top:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 8px 25px rgba(255, 215, 0, 0.6);
      }

      .sidebar-logo {
        text-align: center;
        padding: 0px 0;
        margin-bottom: 0px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .sidebar-logo img {
        max-width: auto;
        height: 45px;
        transition: all 0.3s ease;
      }

      @media (max-width: 768px) {
        .footer-buttons {
          gap: 12px;
        }
        .sidebar-logo img {
          max-width: auto;
        }
      }

      @media (max-width: 480px) {
        .footer-logo {
          font-size: 2.2rem;
        }

        .footer-description {
          font-size: 1rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
        }

        .scroll-to-top {
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
        }
        
        .sidebar-logo img {
          max-width: auto;
        }
      }
    </style>
  `;

  const html = `
    <footer id="site-footer">
      <div class="footer-container">
        <div class="sidebar-logo">
          <a href="index.html">
            <img src="logo.png" alt="ShopEase Logo" />
          </a>
        </div>
        <p class="footer-lines">
          Premium products across all categories<br>
          Fast shipping & secure payment options<br>
          24/7 customer support & easy returns<br>
          Join millions of satisfied customers today!
        </p>
        <div class="footer-buttons">
          <a href="footwear.html" class="footer-btn" title="Footwear"><i class="fas fa-shoe-prints"></i></a>
          <a href="watches.html" class="footer-btn" title="Watches"><i class="fas fa-clock"></i></a>
          <a href="accessories.html" class="footer-btn" title="Accessories"><i class="fas fa-headphones"></i></a>
          <a href="fashion.html" class="footer-btn" title="Fashion"><i class="fas fa-tshirt"></i></a>
          <a href="appliances.html" class="footer-btn" title="Appliances"><i class="fas fa-blender"></i></a>
          <a href="deals.html" class="footer-btn" title="Deals"><i class="fas fa-tag"></i></a>
          <a href="policy.html" class="footer-btn" title="Policy"><i class="fas fa-shield-alt"></i></a>
        </div>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} ShopEase.pro. All rights reserved.
        </div>
      </div>
      <div class="scroll-to-top" id="scrollToTop">
        <i class="fas fa-arrow-up"></i>
      </div>
    </footer>
  `;

  document.head.insertAdjacentHTML('beforeend', style);
  footerContainer.innerHTML = html;
}

// Function to inject product section
function injectProductSection() {
  const container = document.getElementById('product-section');
  if (!container) return;

  const style = `
     <style>
    .products-section {
      padding: 4rem 2rem;
      text-align: center;
      background: linear-gradient(135deg, #000000, #1a001f, #0c0012);
    }

    .section-title {
      font-size: 1.8rem;
      margin-bottom: 3rem;
      background: linear-gradient(90deg, #ffd700, #ff4b2b, #ff00cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

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

    .card-background {
      height: 50%;
      width: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.85;
      background-color: #000;
    }

    .card-content2 {
      height: 45%;
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
      .card-content2 h2 {
  color: #ffd700; /* bright golden */
  font-size: 1.1rem;
  margin: 6px 0;
  font-weight: bold;
  text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
}

    .price-tag {
     font-size: 1.1rem;
     color: goldenrod;
     text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
      margin-bottom: 8px;
      font-weight: bold;
     }

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

    .corner-ribbon {
      position: absolute;
      top: 0;
      left: 0;
      border-top: 60px solid #ff00cc;
      border-right: 60px solid transparent;
      z-index: 10;
    }

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

    @media (max-width: 1024px) {
      .cards-container1 > .card {
        width: calc(50% - 1rem);
      }
    }

    @media (max-width: 768px) {
      .cards-container1 > .card {
        width: 100%;
        max-width: 400px;
      }
    }

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
  <h2 class="section-title">Our Products</h2>
  <div class="cards-container1">

    <a href="proone.html" class="card">
      <div class="corner-ribbon"></div>
      <div class="card-category-badge">Footwear</div>
      <div class="card-background" style="background-image: url('dctsh1.jpg');"></div>
      <div class="card-content2">
        <h3>Nike SB Air Jorden 4</h3>
        <h2>₹21 for ₹21000</h2>
        <span class="btn">Participate Now</span>
      </div>
    </a>

    <a href="protwo.html" class="card">
      <div class="corner-ribbon"></div>
      <div class="card-category-badge">Watches</div>
      <div class="card-background" style="background-image: url('mw1.jpg');"></div>
      <div class="card-content2">
        <h3>Seiko Men New </h3>
        <h2>₹31 for ₹31000</h2>
        <span class="btn">Participate Now</span>
      </div>
    </a>

    <a href="prothree.html" class="card">
      <div class="corner-ribbon"></div>
      <div class="card-category-badge">Apple</div>
      <div class="card-background" style="background-image: url('app1.jpg');"></div>
      <div class="card-content2">
        <h3>Apple AirPods Max (ANC)</h3>
        <h2>₹59 for ₹59000</h2>
        <span class="btn">Participate Now</span>
      </div>
    </a>

    <a href="profour.html" class="card">
      <div class="corner-ribbon"></div>
      <div class="card-category-badge">Smarphones</div>
      <div class="card-background" style="background-image: url('nph2.jpg');"></div>
      <div class="card-content2">
        <h3>Nothing Phone 2A Gray</h3>
        <h2>₹34 for ₹34000</h2>
        <span class="btn">Participate Now</span>
      </div>
    </a>

    <a href="profifth.html" class="card">
      <div class="corner-ribbon"></div>
      <div class="card-category-badge">Smarphones</div>
      <div class="card-background" style="background-image: url('ph2.jpg');"></div>
      <div class="card-content2">
        <h3>OnePlus 13R </h3>
        <h2>₹41 for ₹41000</h2>
        <span class="btn">Participate Now</span>
      </div>
    </a>

    <a href="prosixth.html" class="card">
      <div class="corner-ribbon"></div>
      <div class="card-category-badge">Smarphones</div>
      <div class="card-background" style="background-image: url('ph1.jpg');"></div>
      <div class="card-content2">
        <h3>OnePlus 13s Elite </h3>
        <h2>₹54 for ₹54000</h2>
        <span class="btn">Participate Now</span>
      </div>
    </a>

    <a href="proseven.html" class="card">
      <div class="corner-ribbon"></div>
      <div class="card-category-badge">Gaming</div>
      <div class="card-background" style="background-image: url('ps5.jpg');"></div>
      <div class="card-content2">
        <h3>Sony PlayStation®5 Console Slim</h3>
        <h2>₹51 for ₹55000</h2>
        <span class="btn">Participate Now</span>
      </div>
    </a>

    <a href="proeight.html" class="card">
      <div class="corner-ribbon"></div>
      <div class="card-category-badge">Gaming</div>
      <div class="card-background" style="background-image: url('lapy.jpg');"></div>
      <div class="card-content2">
        <h3>Lenovo Smartchoice I7-13620H</h3>
        <h2>₹65 for ₹65000</h2>
        <span class="btn">Participate Now</span>
      </div>
    </a>

    <a href="pronine.html" class="card">
      <div class="corner-ribbon"></div>
      <div class="card-category-badge">Apple</div>
      <div class="card-background" style="background-image: url('iph16.jpg');"></div>
      <div class="card-content2">
        <h3>iPhone16 Pro Max 256GB</h3>
        <h2>₹159 for ₹159000</h2>
        <span class="btn">Participate Now</span>
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
        font-size: 1.rem;
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

      .highlight-badge {
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

      @media (max-width: 480px) {
        .features-section .section-title {
          font-size: 2rem; 
        }

        .feature-card {
          height: auto;
          padding: 25px 20px;
        }

        .card-icon {
          font-size: 3rem;
        }
          
        .card-content1 h3 {
          font-size: 1.1rem; 
        }

        .card-content1 p {
          font-size: 0.9rem; 
          line-height: 1.5;
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
            <span class="highlight-badge">Secure</span>
            <div class="card-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div class="card-content1">
              <h3>Secure Payments</h3>
              <p>All transactions protected with 256-bit SSL encryption and verified payment gateways for complete security.</p>
            </div>
          </div>

          <div class="feature-card">
            <span class="highlight-badge">Popular</span>
            <div class="card-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="card-content1">
              <h3>Top Rated Products</h3>
              <p>We offer only the highest quality products with verified customer reviews and ratings for your peace of mind.</p>
            </div>
          </div>

          <div class="feature-card">
            <span class="highlight-badge">Fast</span>
            <div class="card-icon">
              <i class="fas fa-shipping-fast"></i>
            </div>
            <div class="card-content1">
              <h3>Fast Delivery</h3>
              <p>Get your orders delivered quickly with our nationwide logistics network. Most orders arrive within 2-3 days!</p>
            </div>
          </div>

          <div class="feature-card">
            <span class="highlight-badge">Variety</span>
            <div class="card-icon">
              <i class="fas fa-boxes"></i>
            </div>
            <div class="card-content1">
              <h3>Wide Selection</h3>
              <p>From electronics to fashion, home appliances to accessories - we offer the widest selection of products anywhere.</p>
            </div>
          </div>

          <div class="feature-card">
            <span class="highlight-badge">Mobile</span>
            <div class="card-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <div class="card-content1">
              <h3>Mobile Friendly</h3>
              <p>Shop anywhere, anytime with our mobile-optimized website and app. Never miss a deal with push notifications.</p>
            </div>
          </div>

          <div class="feature-card">
            <span class="highlight-badge">Support</span>
            <div class="card-icon">
              <i class="fas fa-headset"></i>
            </div>
            <div class="card-content1">
              <h3>24/7 Support</h3>
              <p>Our customer service team is available round the clock to answer your questions and resolve any issues.</p>
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

  // Show scroll-to-top button when scrolling
  window.addEventListener('scroll', () => {
    const scrollToTop = document.getElementById('scrollToTop');
    if (scrollToTop) {
      if (window.scrollY > 300) {
        scrollToTop.classList.add('active');
      } else {
        scrollToTop.classList.remove('active');
      }
    }
  });

  // Add floating register button
  const buttonStyle = document.createElement('style');
  buttonStyle.textContent = `
  
  `;
  document.head.appendChild(buttonStyle);

  const button = document.createElement('a');
  button.href = 'register.html';
  button.className = 'floating-register-button';

  const innerDiv = document.createElement('div');
  innerDiv.className = 'register-button-inner';
  innerDiv.textContent = 'Sign Up';

  button.appendChild(innerDiv);
  document.body.appendChild(button);
}

// Single DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  injectProductSection(); // This function was missing from the DOMContentLoaded listener
  injectContainer1();     // This function was missing from the DOMContentLoaded listener
  initializeSite();
});







