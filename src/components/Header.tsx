import React, { useState } from 'react';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header className="nav">
        <div className="wrap nav-inner">
          {/* Zone 1: Logo / Brand */}
          <a href="#hero" className="nav-brand" aria-label="Awais Mumtaz Home">
            <span className="brand-name">Awais Mumtaz</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav aria-label="Primary Navigation">
            <ul className="nav-links" role="list">
              <li>
                <a
                  href="#projects"
                  className={activeSection === 'projects' ? 'active' : ''}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#client-deliverables"
                  className={activeSection === 'client-deliverables' ? 'active' : ''}
                >
                  Client Work
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={activeSection === 'experience' ? 'active' : ''}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  className={activeSection === 'leadership' ? 'active' : ''}
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className={activeSection === 'certifications' ? 'active' : ''}
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeSection === 'contact' ? 'active' : ''}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Zone 3: Actions */}
          <div className="nav-actions">
            <button
              id="themeToggle"
              type="button"
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              <span className="theme-icon">
                {theme === 'light' ? '🌙' : '☀️'}
              </span>
            </button>

            <a
              href="resume.pdf"
              className="btn btn-primary"
              download
              aria-label="Download Resume PDF"
            >
              <span>&#x2193; Resume</span>
            </a>

            <button
              className="hamburger"
              id="hamburger"
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <rect y="0" width="22" height="2" rx="1" fill="currentColor" />
                <rect y="7" width="22" height="2" rx="1" fill="currentColor" />
                <rect y="14" width="22" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        id="mobileNav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Menu"
      >
        <button
          className="mobile-nav-close"
          id="closeNav"
          type="button"
          onClick={closeMobileMenu}
          aria-label="Close Mobile Menu"
        >
          &#x2715;
        </button>
        <a href="#projects" onClick={closeMobileMenu}>
          Projects
        </a>
        <a href="#client-deliverables" onClick={closeMobileMenu}>
          Client Work
        </a>
        <a href="#experience" onClick={closeMobileMenu}>
          Experience
        </a>
        <a href="#leadership" onClick={closeMobileMenu}>
          Leadership
        </a>
        <a href="#certifications" onClick={closeMobileMenu}>
          Certifications
        </a>
        <a href="#contact" onClick={closeMobileMenu}>
          Contact
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
          <a
            href="resume.pdf"
            download
            className="btn btn-primary"
            onClick={closeMobileMenu}
            style={{ justifyContent: 'center' }}
          >
            <span>&#x2193; Resume</span>
          </a>
        </div>
      </div>
    </>
  );
};
