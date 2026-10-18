import React, { useEffect } from 'react';
import { ActiveCertModal } from '../types';

interface CertModalProps {
  modal: ActiveCertModal | null;
  onClose: () => void;
}

export const CertModal: React.FC<CertModalProps> = ({ modal, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modal) {
        onClose();
      }
    };

    if (modal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modal, onClose]);

  if (!modal) return null;

  const isPdf = modal.assetPath.toLowerCase().endsWith('.pdf');

  return (
    <div
      id="certModal"
      className="cert-modal open"
      role="dialog"
      aria-modal="true"
      aria-hidden="false"
      aria-labelledby="modalCertTitle"
    >
      <div className="cert-modal-backdrop" id="certModalBackdrop" onClick={onClose}></div>
      <div className="cert-modal-dialog">
        <button
          className="cert-modal-close"
          id="certModalClose"
          type="button"
          onClick={onClose}
          aria-label="Close Preview"
        >
          &times;
        </button>

        <div className="cert-modal-header">
          <div className="cert-modal-badge-tag" id="modalBadgeTag">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#4285F4" />
              <path d="M2 17l10 5 10-5" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12l10 5 10-5" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span id="modalIssuerLabel">{modal.issuer || 'Verified Credential'}</span>
          </div>
          <h3 id="modalCertTitle" className="cert-modal-title">
            {modal.title}
          </h3>
          <p className="cert-modal-id-line" id="modalMetaLine">
            {modal.certId && (
              <span id="modalCertIdWrap">
                Credential ID: <strong id="modalCertId" className="cert-modal-id-code">{modal.certId}</strong>{' '}
                <span className="cert-modal-sep">&bull;</span>{' '}
              </span>
            )}
            {modal.date && (
              <span className="cert-modal-date" id="modalCertDate">
                {modal.date}
              </span>
            )}
          </p>
        </div>

        <div className="cert-modal-body">
          <div className="modal-viewer-action-bar">
            <a
              id="modalDocLinkTop"
              href={modal.assetPath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cert-direct"
            >
              Open Full Document ↗
            </a>
          </div>
          <div className="cert-modal-viewer-wrap" id="modalViewerContainer">
            {isPdf ? (
              <iframe
                src={`${modal.assetPath}#toolbar=0`}
                className="modal-cert-viewer"
                title="Verified Credential Document"
                style={{ width: '100%', height: '540px', border: 'none', borderRadius: '8px' }}
              />
            ) : (
              <img
                src={modal.assetPath}
                alt="Verified Credential"
                className="modal-cert-viewer"
                style={{ width: '100%', maxHeight: '540px', objectFit: 'contain', borderRadius: '8px' }}
              />
            )}
          </div>
        </div>

        <div className="cert-modal-footer">
          <a
            id="modalDocLink"
            href={modal.assetPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cert-direct"
          >
            Open Full Document ↗
          </a>
          <button
            type="button"
            className="btn btn-outline modal-cancel-btn"
            id="certModalDismiss"
            onClick={onClose}
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
