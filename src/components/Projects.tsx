import React from 'react';
import { Project } from '../types';
import { SalesMatrixPreview } from './SalesMatrixPreview';

interface ProjectsProps {
  projects: Project[];
  onOpenArchitecture: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onOpenArchitecture,
}) => {
  const flagship = projects.find((p) => p.isFlagship) || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== flagship.id);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="sec-header">
          <p className="sec-tag">Featured Engineering</p>
          <h2 className="sec-title">Flagship Systems &amp; Architecture</h2>
          <p className="sec-subtitle">
            Curated selection of production-grade platforms spanning enterprise business intelligence, bilingual vector RAG copilots, predictive machine learning, and decentralized smart contract marketplaces.
          </p>
        </div>

        <div className="projects-editorial-container">
          {/* 1. Flagship Hero Card: SalesMatrix Studio */}
          <article className="flagship-hero-card" aria-label="Flagship Project: SalesMatrix Studio">
            {/* Left Column: Scope & Decisions */}
            <div className="flagship-left">
              <div>
                <p className="flagship-kicker">01. Flagship Enterprise Architecture</p>
                <h3 className="flagship-title">{flagship.title}</h3>
                <p className="flagship-desc">{flagship.description}</p>

                {/* Unboxed Metadata & Tech Tags with Typographic Separators */}
                <div className="unboxed-tags-row" aria-label="Technology Stack">
                  {flagship.tags.map((tag, idx) => (
                    <React.Fragment key={idx}>
                      <span className="unboxed-tag">{tag}</span>
                      {idx < flagship.tags.length - 1 && (
                        <span className="tag-separator" aria-hidden="true">&middot;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Tabular Performance Metrics */}
                {flagship.architecture && (
                  <div className="card-metrics-grid">
                    {flagship.architecture.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="metric-unit">
                        <span className="metric-val tabular-nums">{m.value}</span>
                        <span className="metric-lbl">{m.label}</span>
                        <span className="metric-sub">{m.detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flagship-actions">
                <a
                  href={flagship.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Launch Live System &#x2197;
                </a>
                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  GitHub Repository &#x2325;
                </a>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => onOpenArchitecture(flagship)}
                  style={{ borderColor: 'var(--accent-bronze)', color: 'var(--accent-bronze)' }}
                >
                  Deep Dive Architecture &darr;
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Live Sandbox */}
            <div>
              <SalesMatrixPreview />
            </div>
          </article>

          {/* 2. Secondary Projects: Split-Pane Asymmetric Grid */}
          <div>
            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                02. Specialized Production Deliverables
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                3 Additional Shipped Systems
              </span>
            </div>

            <div className="secondary-projects-grid">
              {secondaryProjects.map((project, idx) => (
                <article key={project.id} className="secondary-project-card">
                  <div>
                    <p className="secondary-card-kicker">
                      0{idx + 2}. {project.categoryBadge}
                    </p>
                    <h3 className="secondary-card-title">{project.title}</h3>
                    <p className="secondary-card-desc">{project.description}</p>

                    {/* Unboxed Metadata */}
                    <div className="unboxed-tags-row" style={{ marginBottom: '18px' }}>
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="unboxed-tag" style={{ fontSize: '12px' }}>{tag}</span>
                          {tIdx < Math.min(project.tags.length, 4) - 1 && (
                            <span className="tag-separator" aria-hidden="true">&middot;</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Tabular metric teaser */}
                    {project.architecture && (
                      <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-card-sub)', border: '1px solid var(--border-card)', borderRadius: '6px', marginBottom: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                          {project.architecture.metrics[0].label}:
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '14px', color: 'var(--accent-bronze)' }}>
                          {project.architecture.metrics[0].value}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="secondary-card-actions">
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Live Demo &#x2197;
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        Repo &#x2325;
                      </a>
                    </div>

                    <button
                      type="button"
                      className="btn-architecture-peek"
                      onClick={() => onOpenArchitecture(project)}
                      title="Inspect architectural decisions and code"
                    >
                      Architecture &amp; Code
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
