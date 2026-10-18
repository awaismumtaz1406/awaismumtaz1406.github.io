import React from 'react';
import { PersonalInfo } from '../types';

interface ContactProps {
  personal: PersonalInfo;
  resumeUrl: string;
}

export const Contact: React.FC<ContactProps> = ({ personal, resumeUrl }) => {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="contact-banner-card">
          <h2>Let&#39;s Build Something Impactful</h2>
          <p>
            Currently open to full-stack, frontend engineering, and machine learning roles. Whether you have a project in mind or want to connect, my inbox is open.
          </p>
          <div className="contact-social-bar">
            <a
              href="https://wa.me/923288421580?text=Hi%20Awais,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-contact btn-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.96 7.42C8.74 7.42 8.52 7.43 8.33 7.78C8.11 8.18 7.47 8.78 7.47 10.01C7.47 11.24 8.37 12.43 8.49 12.6C8.62 12.77 10.22 15.39 12.75 16.37C14.86 17.18 15.29 17.02 15.75 16.98C16.21 16.94 17.23 16.38 17.44 15.79C17.65 15.2 17.65 14.69 17.59 14.59C17.53 14.49 17.36 14.43 17.1 14.3C16.84 14.17 15.54 13.53 15.3 13.44C15.06 13.35 14.89 13.31 14.72 13.57C14.55 13.83 14.07 14.4 13.92 14.57C13.78 14.74 13.63 14.76 13.37 14.63C13.11 14.5 12.28 14.23 11.29 13.35C10.52 12.67 10 11.83 9.85 11.57C9.7 11.31 9.83 11.17 9.96 11.04C10.08 10.92 10.23 10.73 10.36 10.58C10.49 10.43 10.54 10.32 10.63 10.15C10.72 9.98 10.67 9.83 10.61 9.7C10.55 9.57 10.03 8.3 9.81 7.78C9.6 7.27 9.39 7.34 9.23 7.33L8.96 7.42Z"/>
              </svg>
              <span>Message on WhatsApp 💬</span>
            </a>
            <a href={`mailto:${personal.contact.email}`} className="btn btn-primary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Email: {personal.contact.email}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/awaismumtaz1406/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/awaismumtaz1406"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
            >
              GitHub
            </a>
            <a href={resumeUrl} download className="btn btn-outline btn-lg">
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
