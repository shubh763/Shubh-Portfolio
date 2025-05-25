"use client"

import { useState, useRef, useEffect } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [navbarStyle, setNavbarStyle] = useState("light")
  const menuRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / documentHeight) * 100

      setScrollPercentage(scrollPercent)

      const heroSection = document.getElementById("home")
      const aboutSection = document.getElementById("about")

      if (heroSection && aboutSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        if (scrollTop >= heroBottom - 100) {
          setNavbarStyle("dark")
        } else {
          setNavbarStyle("light")
        }
      } else {
        setNavbarStyle(scrollPercent < 25 ? "light" : "dark")
      }
    }

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMenu(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll("#home, #about, #contact")
    sections.forEach((section) => observer.observe(section))

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const openMenu = () => {
    setIsMenuOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = "unset"
  }

  const handleMenuClick = (menuItem, event) => {
    event.preventDefault()
    setMenu(menuItem)
    closeMenu()
    const targetSection = document.getElementById(menuItem)
    if (targetSection) {
      const navbarHeight = 80
      const targetPosition = targetSection.offsetTop - navbarHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <nav className={`navbar ${navbarStyle} scroll-${Math.round(scrollPercentage)}`}>
        <div className="nav-logo">
          <h1 className="white-text">
            <span className="logo-highlight">PRO</span> CODER
          </h1>
        </div>

        <ul className="nav-menu desktop-menu">
          {["home", "about", "contact"].map((item) => (
            <li key={item} className={menu === item ? "active" : ""}>
              <a href={`#${item}`} onClick={(e) => handleMenuClick(item, e)} className="nav-link white-text">
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <div className="nav-underline" />
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-connect">
          <a href="#contact" onClick={(e) => handleMenuClick("contact", e)} className="connect-btn">
            <span>Connect With Me</span>
            <svg className="connect-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={isMenuOpen ? closeMenu : openMenu} aria-label="Toggle menu">
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span className="white-bar"></span>
            <span className="white-bar"></span>
            <span className="white-bar"></span>
          </div>
        </button>

        <div className="scroll-progress">
          <div className="scroll-progress-bar" style={{ width: `${scrollPercentage}%` }} />
        </div>
      </nav>

      <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu} />

      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
        <div className="mobile-menu-header">
          <h2>Navigation</h2>
          <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="mobile-nav-menu">
          {["home", "about", "contact"].map((item) => (
            <li key={item} className={menu === item ? "active" : ""}>
              <a href={`#${item}`} onClick={(e) => handleMenuClick(item, e)} className="mobile-nav-link">
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <svg className="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-connect">
          <a href="#contact" onClick={(e) => handleMenuClick("contact", e)} className="mobile-connect-btn">
            <span>Let's Connect</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar