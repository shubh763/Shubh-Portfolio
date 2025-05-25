"use client";

import { useState, useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
  });
  const aboutRef = useRef();

  const skills = [
    { name: "HTML & CSS", level: 90, icon: "🎨" },
    { name: "JS & ReactJS", level: 85, icon: "⚛️" },
    { name: "Bootstrap", level: 80, icon: "🎯" },
    { name: "Linux", level: 75, icon: "🐧" },
    { name: "Git & Github", level: 88, icon: "📚" },
    { name: "NodeJS", level: 80, icon: "🟢" },
    { name: "ExpressJS", level: 75, icon: "🚂" },
    { name: "MySQL", level: 70, icon: "💾" },
  ];

  const achievements = [
    {
      number: 1,
      suffix: "+",
      label: "YEARS OF WORK EXPERIENCE",
      icon: "🚀",
    },
    { number: 5, suffix: "+", label: "PROJECTS COMPLETED", icon: "💼" },
    { number: 4, suffix: "+", label: "HAPPY CLIENTS", icon: "😊" },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".about-title, .about-sections");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            setIsVisible(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    achievements.forEach((achievement, index) => {
      let current = 0;
      const increment = achievement.number / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= achievement.number) {
          current = achievement.number;
          clearInterval(timer);
        }
        setCounters((prev) => ({
          ...prev,
          [index === 0 ? "experience" : index === 1 ? "projects" : "clients"]:
            Math.floor(current),
        }));
      }, stepDuration);
    });
  };

  return (
    <div id="about" className="about" ref={aboutRef}>
      {/* Background Elements */}
      <div className="about-background">
        <div className="floating-shapes">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`floating-shape shape-${i + 1}`} />
          ))}
        </div>
        <div className="gradient-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
      </div>

      {/* Section Title */}
      <div className={`about-title ${isVisible ? "animate" : ""}`}>
        <div className="title-wrapper">
          <span className="title-accent">Get to know more</span>
          <h1>About Me</h1>
          <div className="title-pattern">
            <svg viewBox="0 0 100 20" className="pattern-svg">
              <defs>
                <linearGradient
                  id="patternGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              <path
                d="M0,10 Q25,0 50,10 T100,10"
                stroke="url(#patternGradient)"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="20" cy="10" r="2" fill="#a855f7" />
              <circle cx="50" cy="10" r="2" fill="#3b82f6" />
              <circle cx="80" cy="10" r="2" fill="#10b981" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`about-sections ${isVisible ? "animate" : ""}`}>
        <div className="about-left">
          <div className="image-container">
            <div className="image-frame">
              <img
                src="/about.jpg"
                alt="Shubh Kumar"
                width={400}
                height={400}
                className="about-image"
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
            <div className="floating-icons">
              <div className="tech-icon icon-1">⚛️</div>
              <div className="tech-icon icon-2">🎨</div>
              <div className="tech-icon icon-3">🚀</div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-para">
            <div className="para-card">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="para-content">
                <p>
                  I have more than one year of experience as a Frontend
                  Developer, working in agile environments and following Scrum
                  methodology. I actively collaborate in sprint planning, daily
                  stand-ups, and retrospectives using tools like Jira.
                </p>
                <p>
                  My work is focused on building responsive and performant web
                  applications by understanding client requirements, providing
                  efficient solutions, and continuously improving UI/UX to meet
                  business goals.
                </p>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <div className="skills-header">
              <svg
                className="skills-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26" />
              </svg>
              <h3>Technical Expertise</h3>
            </div>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="about-skill"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        animationDelay: `${index * 0.2}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className={`about-achievements ${isVisible ? "animate" : ""}`}>
        <div className="achievements-header">
          <h3>Achievements & Milestones</h3>
          <p>Numbers that tell my story</p>
        </div>
        <div className="achievements-container">
          {achievements.map((achievement, index) => (
            <div key={index} className="about-achievement">
              <div className="achievement-icon">
                <span>{achievement.icon}</span>
              </div>
              <div className="achievement-number">
                <span className="number">
                  {index === 0
                    ? counters.experience
                    : index === 1
                    ? counters.projects
                    : counters.clients}
                </span>
                <span className="suffix">{achievement.suffix}</span>
              </div>
              <p className="achievement-label">{achievement.label}</p>
              <div className="achievement-glow" />
            </div>
          ))}
          <div className="achievements-separator">
            <div className="separator-line" />
            <div className="separator-dot" />
            <div className="separator-line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
