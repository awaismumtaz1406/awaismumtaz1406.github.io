import React from 'react';
import { ClientWork as ClientWorkType } from '../types';

interface ClientWorkProps {
  data: ClientWorkType;
}

export const ClientWork: React.FC<ClientWorkProps> = ({ data }) => {
  return (
    <section id="client-deliverables" className="section">
      <div className="wrap">
        <div className="sec-header">
          <p className="sec-tag">Client Deliverables</p>
          <h2 className="sec-title">Production Client Deliverables</h2>
          <p className="sec-subtitle">
            Demonstrated track record of delivering production-ready frontend code, strict milestone execution, and verified client satisfaction.
          </p>
        </div>

        <div className="client-section-card">
          {/* Left: Project Scope & Engineering Highlights */}
          <div className="client-work-info">
            <h3>{data.title}</h3>
            <p className="client-meta-line">
              Client: {data.client} &mdash; {data.clientRole} ({data.period})
            </p>

            <ul className="client-work-bullets">
              {data.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>

            {/* Tabular Client Impact Metrics */}
            {data.metrics && (
              <div className="client-metrics-row">
                {data.metrics.map((m, idx) => (
                  <div key={idx} className="client-metric-unit">
                    <span className="client-metric-val tabular-nums">{m.value}</span>
                    <span className="client-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            <a
              href={data.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>View Production Site &#x2197;</span>
            </a>
          </div>

          {/* Right: Authentic Testimonial Box */}
          <div className="client-quote-card">
            <div>
              <div className="quote-stars" aria-label="5 out of 5 stars client rating">
                &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
              </div>
              <p className="quote-text">
                &ldquo;{data.testimonial.quote}&rdquo;
              </p>
            </div>

            <div className="quote-author-block">
              <div className="quote-avatar" aria-hidden="true">
                WR
              </div>
              <div>
                <p className="quote-name">{data.testimonial.author}</p>
                <p className="quote-role">{data.testimonial.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
