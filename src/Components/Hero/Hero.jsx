"use client";

import { useEffect, useState, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef();

  useEffect(() => {
    setIsLoaded(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Shubh_Experienced_Profile.pdf";
    link.download = "Shubh_Experienced_Profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero-container" ref={heroRef}>
      {/* Enhanced Animated Background */}
      <div className="hero-background">
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`floating-shape shape-${i + 1}`}
              style={{
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="gradient-mesh">
          <div className="mesh-gradient mesh-1" />
          <div className="mesh-gradient mesh-2" />
          <div className="mesh-gradient mesh-3" />
        </div>

        <div className="particle-system">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`particle particle-${i + 1}`}
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div
          className="mouse-follower"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>

      <div
        className={`hero ${isLoaded ? "loaded" : ""} ${
          isVisible ? "visible" : ""
        }`}
      >
        {/* Profile Image Section */}
        <div className="hero-image-container">
          <div className="image-wrapper">
            <div className="image-frame">
              <img
                src="/hero2.jpg"
                alt="Shubh Kumar"
                width={320}
                height={320}
                className="hero-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <svg
                    className="code-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="16,18 22,12 16,6" />
                    <polyline points="8,6 2,12 8,18" />
                  </svg>
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </div>
            <div className="image-glow" />
            <div className="image-ring" />

            <div className="floating-icons">
              <div className="tech-icon icon-1">⚛️</div>
              <div className="tech-icon icon-2">🎨</div>
              <div className="tech-icon icon-3">🚀</div>
              <div className="tech-icon icon-4">💻</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="hero-content">
          {/* Title Section */}
          <div className="hero-title-section">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name-highlight">
                Shubh
                <div className="name-decoration">
                  <div className="decoration-line" />
                  <div className="decoration-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </span>
              <div className="title-subtitle">
                <svg
                  className="sparkle-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                </svg>
                <span className="typing-text">
                  an aspiring Software Developer
                </span>
              </div>
            </h1>
          </div>

          {/* Description Section */}
          <div className="hero-description-wrapper">
            <p className="hero-description">
              I hold a Master's degree in Computer Applications from Chandigarh
              University. With over one year of professional experience as a
              React Developer, I specialize in building responsive, dynamic, and
              user-friendly web applications. I’m passionate about turning
              complex problems into intuitive digital solutions, and I
              consistently focus on writing clean, maintainable code using
              modern frontend technologies.
            </p>

            {/* Stats Grid */}
            <div className="description-stats">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Action Buttons Grid */}
          <div className="hero-actions">
            <a
              href="https://github.com/shubh763"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>View Projects</span>
              <svg
                className="btn-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <button onClick={handleDownload} className="btn btn-secondary">
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Links Grid */}
          <div className="hero-social-grid">
            <h3>Connect with me</h3>
            <div className="social-buttons-grid">
              <a
                href="https://github.com/shubh763"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                onClick={(e) => e.preventDefault()}
                href="https://www.linkedin.com/in/shubh-kumar-09aa40236/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>Linkedin</span>
              </a>
              <a
                href="https://www.instagram.com/devshubh.25/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <div className="scroll-line" />
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
