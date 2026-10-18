import React from 'react';
import { EducationItem, CertificationItem, ActiveCertModal } from '../types';

interface CertificationsProps {
  education: EducationItem[];
  certifications: CertificationItem[];
  onOpenCertModal: (cert: ActiveCertModal) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({
  education,
  certifications,
  onOpenCertModal,
}) => {
  const edu = education[0];

  const getCertIcon = (id: string) => {
    if (id === 'XM6Z75V7J34J') {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#4285F4" />
          <path d="M2 17l10 5 10-5" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12l10 5 10-5" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    if (id === 'BO37C0OKD2CL') {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" opacity="0.3" />
          <path d="M12 9v6m0 0l-2.5-2.5M12 15l2.5-2.5" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" stroke="#38bdf8" strokeWidth="1.5" />
        </svg>
      );
    }
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#4285F4" strokeWidth="1.8" />
        <path d="M12 7v5l3 3" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" fill="#FBBC05" />
        <path d="M8 12h-2m12 0h-2m-6-6V4m0 16v-2" stroke="#34A853" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  };

  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <div className="sec-header">
          <p className="sec-tag">Academics &amp; Credentials</p>
          <h2 className="sec-title">Formal Education &amp; Verified Certifications</h2>
          <p className="sec-subtitle">
            Formal computer science engineering foundation backed by rigorous Google credentials in Artificial Intelligence architectures and production app deployment.
          </p>
        </div>

        <div className="edu-certs-grid">
          {/* Education Card */}
          {edu && (
            <div className="edu-card-wrap">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px' }}>
                Degree Program
              </h3>
              <div className="edu-box">
                <div className="edu-box-header">
                  <div className="edu-univ-badge" aria-hidden="true">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-bronze)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="edu-institution">{edu.institution}</h4>
                    <p className="edu-degree">{edu.degree}</p>
                    <p className="edu-period">{edu.period}</p>
                  </div>
                </div>

                <div className="edu-cgpa-pill">
                  <span className="edu-cgpa-label">Cumulative GPA:</span>
                  <span className="edu-cgpa-value tabular-nums">{edu.cgpa}</span>
                </div>

                {edu.metrics && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px', padding: '12px', backgroundColor: 'var(--bg-card-sub)', borderRadius: '6px', border: '1px solid var(--border-card)' }}>
                    {edu.metrics.map((m, idx) => (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="font-mono text-lg font-bold tabular-nums" style={{ color: 'var(--text-primary)' }}>{m.value}</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                    Highlighted Engineering Coursework
                  </h5>
                  <div className="edu-course-tags">
                    {edu.coursework.map((course, idx) => (
                      <span key={idx} className="edu-course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    Specialization
                  </h5>
                  <p className="edu-focus-text">{edu.keyFocus}</p>
                </div>
              </div>
            </div>
          )}

          {/* Verified Google Certifications */}
          <div className="certs-card-wrap">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px' }}>
              Google Verified AI Credentials
            </h3>
            <div className="certs-list">
              {certifications.map((cert) => (
                <div key={cert.id} className="cert-badge-card">
                  <div className="cert-svg-badge" aria-hidden="true">
                    {getCertIcon(cert.id)}
                  </div>

                  <div className="cert-details">
                    <div className="cert-title-row">
                      <h4 className="cert-name">{cert.title}</h4>
                      <span className="cert-verified-pill">&#x2713; Google Verified</span>
                    </div>
                    <p className="cert-id">
                      Credential ID: <strong>{cert.id}</strong>
                    </p>
                    <p className="cert-date">
                      Issued {cert.date} &middot; {cert.issuer}
                    </p>

                    <div>
                      <button
                        type="button"
                        className="btn-view-cert"
                        onClick={() =>
                          onOpenCertModal({
                            title: cert.title,
                            certId: cert.id,
                            assetPath: cert.file,
                            date: cert.date,
                            issuer: cert.issuer,
                          })
                        }
                        aria-label={`View ${cert.title} Certificate`}
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
                        <span>View Verified Document &#x2197;</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
