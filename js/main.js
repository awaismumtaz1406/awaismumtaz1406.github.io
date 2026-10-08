/* ============================================================
   js/main.js  —  Awais Mumtaz Developer Portfolio
   Minimal, Fast, Vanilla JavaScript
   ============================================================ */

(function () {
  'use strict';

  // Mobile navigation drawer toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('closeNav');

  function openMenu() {
    if (mobileNav) {
      mobileNav.classList.add('open');
      hamburger?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    if (mobileNav) {
      mobileNav.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  window.closeNav = closeMenu;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (certModal?.classList.contains('open')) {
        closeCertModal();
      }
      if (mobileNav?.classList.contains('open')) {
        closeMenu();
      }
    }
  });

  // ══════════════════════════════════════════════════════════════
  // Interactive Certificate / Document Modal Viewer
  // ══════════════════════════════════════════════════════════════
  const certModal = document.getElementById('certModal');
  const certModalBackdrop = document.getElementById('certModalBackdrop');
  const certModalClose = document.getElementById('certModalClose');
  const certModalDismiss = document.getElementById('certModalDismiss');
  const modalCertTitle = document.getElementById('modalCertTitle');
  const modalCertId = document.getElementById('modalCertId');
  const modalCertIdWrap = document.getElementById('modalCertIdWrap');
  const modalCertDate = document.getElementById('modalCertDate');
  const modalIssuerLabel = document.getElementById('modalIssuerLabel');
  const modalViewerContainer = document.getElementById('modalViewerContainer');
  const modalDocLink = document.getElementById('modalDocLink');
  const modalDocLinkTop = document.getElementById('modalDocLinkTop');
  const viewCertButtons = document.querySelectorAll('.btn-view-cert');

  function openCertModal(btn) {
    if (!certModal) return;

    const title = btn.getAttribute('data-cert-title') || 'Verified Credential';
    const certId = btn.getAttribute('data-cert-id') || '';
    const assetPath = btn.getAttribute('data-cert-img') || '';
    const date = btn.getAttribute('data-cert-date') || '';
    const issuer = btn.getAttribute('data-cert-issuer') || 'Verified Credential';

    if (modalCertTitle) modalCertTitle.textContent = title;
    if (modalIssuerLabel) modalIssuerLabel.textContent = issuer;

    if (modalCertId && modalCertIdWrap) {
      if (certId) {
        modalCertId.textContent = certId;
        modalCertIdWrap.style.display = 'inline';
      } else {
        modalCertIdWrap.style.display = 'none';
      }
    }

    if (modalCertDate) {
      modalCertDate.textContent = date;
    }

    if (modalDocLink) modalDocLink.href = assetPath;
    if (modalDocLinkTop) modalDocLinkTop.href = assetPath;

    // Render genuine asset: iframe for PDF, img for PNG/JPG
    if (modalViewerContainer) {
      const isPdf = assetPath.toLowerCase().endsWith('.pdf');
      if (isPdf) {
        modalViewerContainer.innerHTML = `<iframe src="${assetPath}" class="modal-cert-viewer" style="width: 100%; height: 500px; border: none; border-radius: 8px;"></iframe>`;
      } else {
        modalViewerContainer.innerHTML = `<img src="${assetPath}" alt="Verified Credential" class="modal-cert-viewer" style="width: 100%; max-height: 520px; object-fit: contain; border-radius: 8px;">`;
      }
    }

    certModal.classList.add('open');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    certModalClose?.focus();
  }

  function closeCertModal() {
    if (!certModal) return;
    certModal.classList.remove('open');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (modalViewerContainer) {
      modalViewerContainer.innerHTML = '';
    }
  }

  viewCertButtons.forEach((btn) => {
    btn.addEventListener('click', () => openCertModal(btn));
  });

  if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
  if (certModalDismiss) certModalDismiss.addEventListener('click', closeCertModal);
  if (certModalBackdrop) certModalBackdrop.addEventListener('click', closeCertModal);

  // Active navigation link tracking on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

})();
