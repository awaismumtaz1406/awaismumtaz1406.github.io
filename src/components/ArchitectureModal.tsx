import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'code' | 'metrics'>('pipeline');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project || !project.architecture) return null;

  const arch = project.architecture;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(arch.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div
      className="cert-modal open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="archModalTitle"
    >
      <div className="cert-modal-backdrop" onClick={onClose}></div>
      <div className="cert-modal-dialog" style={{ maxWidth: '960px' }}>
        <button
          className="cert-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close Architecture Modal"
        >
          &times;
        </button>

        <div className="cert-modal-header">
          <div className="cert-modal-badge-tag">
            <span>04. ENGINEERING ARCHITECTURE</span>
            <span>·</span>
            <span>{project.categoryBadge}</span>
          </div>
          <h3 id="archModalTitle" className="cert-modal-title">
            {project.title} &mdash; System Architecture &amp; Rationale
          </h3>
          <p className="cert-modal-id-line">
            {arch.headline}
          </p>
        </div>

        <div className="cert-modal-body">
          {/* Challenge & Decision Editorial Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div style={{ padding: '20px', backgroundColor: 'var(--bg-card-sub)', border: '1px solid var(--border-card)', borderRadius: '8px' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#f87171', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Technical Challenge
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {arch.challenge}
              </p>
            </div>

            <div style={{ padding: '20px', backgroundColor: 'var(--bg-card-sub)', border: '1px solid var(--border-card)', borderRadius: '8px' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-bronze)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Architectural Decision
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {arch.decision}
              </p>
            </div>
          </div>

          {/* Segmented Controls for Sub-views */}
          <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px', marginBottom: '20px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('pipeline')}
              className={`preview-tab-btn ${activeTab === 'pipeline' ? 'active' : ''}`}
              style={{ padding: '6px 14px', fontSize: '13px' }}
            >
              System Pipeline
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('code')}
              className={`preview-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
              style={{ padding: '6px 14px', fontSize: '13px' }}
            >
              Implementation Code
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('metrics')}
              className={`preview-tab-btn ${activeTab === 'metrics' ? 'active' : ''}`}
              style={{ padding: '6px 14px', fontSize: '13px' }}
            >
              Impact Benchmarks
            </button>
          </div>

          {/* Tab 1: System Pipeline */}
          {activeTab === 'pipeline' && (
            <div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '14px' }}>
                Sequential dataflow across architectural boundaries:
              </p>
              <div className="arch-pipeline-strip">
                {arch.systemPipeline.map((node, i) => (
                  <React.Fragment key={i}>
                    <span className="pipeline-node">{node}</span>
                    {i < arch.systemPipeline.length - 1 && (
                      <span className="pipeline-arrow">&rarr;</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div style={{ padding: '16px', backgroundColor: 'rgba(212, 163, 115, 0.05)', border: '1px solid rgba(212, 163, 115, 0.15)', borderRadius: '8px' }}>
                <p style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--accent-bronze)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                  Design Tradeoff Rationale:
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {arch.keyTradeoff}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Code Snippet */}
          {activeTab === 'code' && (
            <div className="code-snippet-box">
              <div className="code-snippet-topbar">
                <span className="code-snippet-title">{arch.codeSnippet.title}</span>
                <button
                  type="button"
                  className="code-copy-btn"
                  onClick={handleCopyCode}
                  aria-label="Copy code snippet"
                >
                  {copied ? '✓ Copied to clipboard' : 'Copy Code'}
                </button>
              </div>
              <pre className="code-snippet-content">
                <code>{arch.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Tab 3: Metrics & Benchmarks */}
          {activeTab === 'metrics' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {arch.metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '20px',
                    backgroundColor: 'var(--bg-card-sub)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span className="font-mono text-2xl font-bold tabular-nums" style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {m.value}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-bronze)', marginBottom: '2px' }}>
                    {m.label}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {m.detail}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cert-modal-footer">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Launch Live Platform &#x2197;
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            GitHub Repository &#x2325;
          </a>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
