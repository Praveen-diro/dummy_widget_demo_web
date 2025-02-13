import React, { useRef } from 'react';
import { WidgetDemo } from './components/WidgetDemo';
import CryptoChart from './components/CryptoChart';
import LiveVisitors from './components/LiveVisitors';
import { UploadWidget } from './components/UploadWidget';
import './App.css';

function App() {
  const widgetRef = useRef();
  const uploadWidgetRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-container">
          <div className="logo">TechInsight</div>
          <ul className="nav-links">
            <li><a href="#guides">Tutorials</a></li>
            <li><a href="#stories">News</a></li>
            <li><a href="#blogs">Reviews</a></li>
            <li><a href="#topics">AI/ML</a></li>
            <li><a href="#podcasts">Web3</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </nav>
      </header>

      <div className="hero-wrapper">
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="featured-tag">Featured Article</span>
            <h1>The Future of AI: Transforming Technology in 2025</h1>
            <p>Explore how artificial intelligence is revolutionizing various industries, from healthcare to finance. Discover the latest breakthroughs in machine learning and their real-world applications.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>

      <div className="content-container">
        <main className="main-content">
          <h2 className="section-title">Latest in Tech</h2>
          <div className="articles-grid">
            <article className="article-card">
              <div className="article-content">
                <h3>Quantum Computing Breakthrough: New Milestone in Processing Power</h3>
                <p>Scientists achieve unprecedented quantum coherence time, bringing us closer to practical quantum computers. The latest breakthrough at MIT demonstrates a stability of over 100 microseconds, potentially revolutionizing cryptography and drug discovery processes. This development marks a significant step toward quantum supremacy...</p>
                <div className="article-meta">
                  <span className="date">March 15, 2024</span>
                  <span className="category">Quantum Tech</span>
                </div>
                <a href="#read-more" className="read-more">Read More</a>
              </div>
            </article>

            <article className="article-card">
              <div className="article-content">
                <h3>Web3 Revolution: Decentralized Apps Transform Digital Economy</h3>
                <p>How blockchain technology and DeFi are reshaping the future of digital transactions and online interactions. New protocols emerge offering improved scalability and reduced environmental impact. The integration of AI with blockchain creates unprecedented opportunities for autonomous organizations...</p>
                <div className="article-meta">
                  <span className="date">March 14, 2024</span>
                  <span className="category">Blockchain</span>
                </div>
                <a href="#read-more" className="read-more">Read More</a>
              </div>
            </article>

            <article className="article-card">
              <div className="article-content">
                <h3>Green Tech Innovation: Sustainable Solutions for Tomorrow</h3>
                <p>Breakthrough developments in renewable energy and eco-friendly technology pave the way for a sustainable future. Novel solar cell technology achieves 40% efficiency, while new battery storage solutions promise to revolutionize grid stability. These innovations are crucial for meeting global climate goals...</p>
                <div className="article-meta">
                  <span className="date">March 13, 2024</span>
                  <span className="category">Green Tech</span>
                </div>
                <a href="#read-more" className="read-more">Read More</a>
              </div>
            </article>

            <article className="article-card">
              <div className="article-content">
                <h3>Neural Interfaces: Bridging Mind and Machine</h3>
                <p>Latest developments in brain-computer interfaces show promising results in restoring mobility to paralyzed patients. Researchers have successfully demonstrated two-way communication between neural implants and external devices, opening new possibilities for human-machine interaction...</p>
                <div className="article-meta">
                  <span className="date">March 12, 2024</span>
                  <span className="category">Neurotechnology</span>
                </div>
                <a href="#read-more" className="read-more">Read More</a>
              </div>
            </article>

            <article className="article-card">
              <div className="article-content">
                <h3>5G Evolution: The Next Wave of Connectivity</h3>
                <p>As 5G networks mature, new use cases emerge in industrial automation and smart cities. Enhanced mobile broadband capabilities enable real-time holographic communications, while network slicing technology provides dedicated bandwidth for critical applications. The integration with edge computing creates new possibilities...</p>
                <div className="article-meta">
                  <span className="date">March 11, 2024</span>
                  <span className="category">Telecommunications</span>
                </div>
                <a href="#read-more" className="read-more">Read More</a>
              </div>
            </article>

            <article className="article-card">
              <div className="article-content">
                <h3>Cybersecurity in the Age of Quantum Computing</h3>
                <p>Organizations race to implement quantum-resistant encryption as quantum computing threatens traditional security measures. New post-quantum cryptography standards are being developed and tested. The emergence of AI-powered security systems provides dynamic threat detection and response capabilities...</p>
                <div className="article-meta">
                  <span className="date">March 10, 2024</span>
                  <span className="category">Cybersecurity</span>
                </div>
                <a href="#read-more" className="read-more">Read More</a>
              </div>
            </article>
          </div>
        </main>
        
        <aside className="sidebar">
          <div className="widget-card ">
            <h3>Verify Your Identity</h3>
            <p>Quick and secure verification process</p>
            <WidgetDemo ref={widgetRef} />
          </div>

          <div className="widget-card-upload">
            <h4>Verify Your Documents</h4>
            <p>Securely upload and verify your documents</p>
            <UploadWidget ref={uploadWidgetRef} />
          </div>

          <div className="trending-card">
            <h3>Trending in Tech</h3>
            <ul>
              <li>
                <span className="trend-number">01</span>
                <span className="trend-text">AI & Machine Learning</span>
              </li>
              <li>
                <span className="trend-number">02</span>
                <span className="trend-text">Blockchain & Web3</span>
              </li>
              <li>
                <span className="trend-number">03</span>
                <span className="trend-text">Cloud Computing</span>
              </li>
            </ul>
          </div>

          <div className="newsletter-card">
            <h3>Stay Updated</h3>
            <p>Get the latest tech insights and innovations in your inbox</p>
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>

          <div className="popular-tags">
            <h3>Tech Topics</h3>
            <div className="tags-container">
              <span className="tag">AI/ML</span>
              <span className="tag">Web3</span>
              <span className="tag">Cloud</span>
              <span className="tag">DevOps</span>
              <span className="tag">Cybersecurity</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App; 