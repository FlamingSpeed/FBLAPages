import React from 'react';
import './style.css';

const VorifiPage = () => {
  return (
    <div>
      <header>
        <div className="logo">Vorifi</div>
        <nav>
          <ul className="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button>Sign Up</button>
          <a href="#" className="button">Login</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>Empower Your Financial Future with Vorifi</h1>
          <p>Manage Your Wealth Smarter with Expert Guidance and AI-Powered Insights. Make Confident Decisions for Your Financial Journey.</p>
          <div className="cta-buttons">
            <button className="cta-signup">Sign Up Now</button>
            <button className="cta-login">Login</button>
          </div>
        </section>

        <section className="value-proposition">
          <h2>Why Choose Vorifi?</h2>
          <div className="value-cards">
            <div className="value-card">
              <h3>AI-Powered Financial Insights</h3>
              <p>Personalized advice at your fingertips.</p>
            </div>
            <div className="value-card">
              <h3>Expert Management</h3>
              <p>Tailored solutions from experienced financial managers.</p>
            </div>
            <div className="value-card">
              <h3>Secure and Transparent</h3>
              <p>Your financial safety is our priority.</p>
            </div>
          </div>
        </section>

        <section className="features">
          <h2>Features Designed for Your Financial Success</h2>
          <div className="features-list">
            <div className="feature">
              <h3>Real-Time Financial Monitoring</h3>
              <p>Stay updated with live data.</p>
            </div>
            <div className="feature">
              <h3>Personalized Recommendations</h3>
              <p>Custom strategies tailored to you.</p>
            </div>
            <div className="feature">
              <h3>Seamless Integration</h3>
              <p>Connect all financial accounts effortlessly.</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to Transform Your Financial Future?</h2>
          <div className="cta-buttons">
            <button className="cta-signup">Sign Up Now</button>
            <button className="cta-learn-more">Learn More About Our AI Advisor</button>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default VorifiPage;