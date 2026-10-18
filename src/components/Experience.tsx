import React, { useState } from 'react';
import { ExperienceItem, Leadership, ActiveCertModal } from '../types';

interface ExperienceProps {
  experience: ExperienceItem[];
  leadership: Leadership;
  onOpenCertModal: (cert: ActiveCertModal) => void;
}

export const Experience: React.FC<ExperienceProps> = ({
  experience,
  leadership,
  onOpenCertModal,
}) => {
  const [ambassadorImgError, setAmbassadorImgError] = useState(false);

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="sec-header">
          <p className="sec-tag">Career &amp; Leadership</p>
          <h2 className="sec-title">Work Experience &amp; Campus Leadership</h2>
          <p className="sec-subtitle">
            Professional internships in software quality assurance, mobile test engineering, and developer advocacy, paired with university campus leadership.
          </p>
        </div>

        <div className="exp-leadership-grid">
          {/* Experience Timeline */}
          <div className="experience-column">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px' }}>
              Engineering Internships
            </h3>

            <div className="timeline-list">
              {experience.map((item, idx) => (
                <div key={idx} className="timeline-card">
                  <div className="timeline-top">
                    <h4 className="timeline-role">
                      {item.role} &middot;{' '}
                      <span className="timeline-company">{item.company}</span>
                    </h4>
                    <span className="timeline-period">{item.period}</span>
                  </div>

                  {/* Highlight Tabular Metric */}
                  {item.metric && (
                    <div className="timeline-metric-badge">
                      <span className="timeline-metric-val tabular-nums">{item.metric.value}</span>
                      <span>{item.metric.label}</span>
                    </div>
                  )}

                  {item.bullets && item.bullets.length > 0 ? (
                    <ul className="timeline-bullets">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}

                  <div className="timeline-actions-row">
                    {item.certificate && (
                      <button
                        type="button"
                        className="btn-view-cert"
                        onClick={() =>
                          onOpenCertModal({
                            title: `${item.company} — ${item.role} Certificate`,
                            assetPath: item.certificate!,
                            issuer: item.company,
                            date: item.period.split('|')[0].trim(),
                          })
                        }
                        aria-label={`View ${item.company} Certificate`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span>View Verified Certificate &#x2197;</span>
                      </button>
                    )}

                    {item.recommendation && (
                      <button
                        type="button"
                        className="btn-view-cert btn-view-cert-secondary"
                        onClick={() =>
                          onOpenCertModal({
                            title: `${item.company} — Letter of Recommendation`,
                            assetPath: item.recommendation!,
                            issuer: item.company,
                            date: 'Sep 2026',
                          })
                        }
                        aria-label={`View ${item.company} Recommendation Letter`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <span>Letter of Recommendation &#x2197;</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Spotlight Card */}
          <div className="leadership-column" id="leadership">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px' }}>
              Campus Ambassadorship
            </h3>

            <div className="leadership-card">
              <div>
                <p className="leadership-badge-tag">Devstranauts 3.0 Program</p>
                <h4 className="leadership-title">{leadership.role}</h4>
                <p className="leadership-campus">{leadership.institution}</p>
                <p className="leadership-desc">{leadership.detail}</p>
              </div>

              {/* Devsinc Leadership Image Container with Fallback */}
              <div className="ambassador-media-wrap">
                {!ambassadorImgError && (
                  <img
                    src={leadership.image}
                    alt="Devsinc Campus Ambassador - Devstranauts 3.0"
                    className="ambassador-img"
                    onError={() => setAmbassadorImgError(true)}
                  />
                )}
                {ambassadorImgError && (
                  <div className="ambassador-badge-fallback">
                    <svg
                      className="fallback-insignia"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="30"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        opacity="0.6"
                      />
                      <path d="M32 10L42 32H22L32 10Z" fill="var(--accent-sky)" opacity="0.9" />
                      <path d="M22 36L14 46L24 44L28 36H22Z" fill="var(--accent-emerald)" />
                      <path d="M42 36L50 46L40 44L36 36H42Z" fill="var(--accent-emerald)" />
                      <circle cx="32" cy="24" r="4" fill="#0f172a" />
                    </svg>
                    <p className="fallback-badge-title">DEVSTRANAUTS 3.0</p>
                    <p className="fallback-badge-sub">Devsinc HQ &times; UMT Lahore</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
