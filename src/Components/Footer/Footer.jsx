"use client"

import { useState, useRef, useEffect } from "react"
import "./Footer.css"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)
  const footerRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubscribe = async () => {
    if (email && email.includes("@")) {
      setIsSubscribing(true)
      // Simulate subscription process
      setTimeout(() => {
        window.open("https://www.youtube.com/@ShubhKumar-y6l", "_blank")
        setEmail("")
        setIsSubscribing(false)
      }, 1000)
    } else {
      alert("Please enter a valid email address.")
    }
  }

  const handleConnectWithMe = () => {
    window.open("https://www.instagram.com/devshubh.25/", "_blank")
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/shubh763",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@ShubhKumar-y6l",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/devshubh.25/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Projects", href: "https://github.com/shubh763" },
  ]

  return (
    <footer className="footer" ref={footerRef}>
      {/* Background Elements */}
      <div className="footer-background">
        <div className="floating-elements">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`floating-element element-${i + 1}`} />
          ))}
        </div>
        <div className="gradient-mesh">
          <div className="mesh-gradient mesh-1" />
          <div className="mesh-gradient mesh-2" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={`footer-content ${isVisible ? "animate" : ""}`}>
        {/* Footer Top Section */}
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-brand">
              <h2>Shubh Kumar</h2>
              <div className="brand-tagline">
                <span>Frontend Developer</span>
                <div className="tagline-decoration">
                  <div className="decoration-dot" />
                  <div className="decoration-line" />
                </div>
              </div>
            </div>
            <p className="footer-description">
              My passion for frontend development is not only reflected in my extensive experience but also in the
              enthusiasm and dedication I bring to each project. Let's create something amazing together.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {social.icon}
                  <span className="social-tooltip">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-top-right">
            <div className="newsletter-section">
              <h3>Stay Updated</h3>
              <p>Subscribe to get notified about my latest projects and updates.</p>
              <div className="newsletter-form">
                <div className="email-input-wrapper">
                  <svg className="email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                    className="email-input"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className={`subscribe-btn ${isSubscribing ? "subscribing" : ""}`}
                  disabled={isSubscribing}
                >
                  {isSubscribing ? (
                    <>
                      <div className="loading-spinner" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <svg
                        className="subscribe-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="quick-links">
              <h3>Quick Links</h3>
              <div className="links-grid">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="quick-link"
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                  >
                    <span>{link.name}</span>
                    <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider">
          <div className="divider-line" />
          <div className="divider-decoration">
            <div className="decoration-circle" />
            <div className="decoration-circle" />
            <div className="decoration-circle" />
          </div>
          <div className="divider-line" />
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright">© 2024 Shubh Kumar. All rights reserved.</p>
            <p className="made-with">
              Made with{" "}
              <span className="heart">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>{" "}
              using React & Next.js
            </p>
          </div>

          <div className="footer-bottom-right">
            <a href="#" className="footer-link">
              Terms of Service
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <button onClick={handleConnectWithMe} className="connect-btn">
              Connect with me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer
