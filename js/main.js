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
  // Interactive Certificate Modal / Lightbox Viewer
  // ══════════════════════════════════════════════════════════════
  const certModal = document.getElementById('certModal');
  const certModalBackdrop = document.getElementById('certModalBackdrop');
  const certModalClose = document.getElementById('certModalClose');
  const certModalDismiss = document.getElementById('certModalDismiss');
  const modalCertTitle = document.getElementById('modalCertTitle');
  const modalCertId = document.getElementById('modalCertId');
  const modalCertDate = document.getElementById('modalCertDate');
  const modalCertImg = document.getElementById('modalCertImg');
  const modalCertFallback = document.getElementById('modalCertFallback');
  const modalLoadingSpinner = document.getElementById('modalLoadingSpinner');
  const fallbackTitle = document.getElementById('fallbackTitle');
  const fallbackId = document.getElementById('fallbackId');
  const modalDocLink = document.getElementById('modalDocLink');
  const viewCertButtons = document.querySelectorAll('.btn-view-cert');

  function openCertModal(btn) {
    if (!certModal) return;

    const title = btn.getAttribute('data-cert-title') || 'Google Verified Certificate';
    const certId = btn.getAttribute('data-cert-id') || '';
    const imgSrc = btn.getAttribute('data-cert-img') || '';
    const date = btn.getAttribute('data-cert-date') || 'Issued Oct 2026';

    if (modalCertTitle) modalCertTitle.textContent = title;
    if (modalCertId) modalCertId.textContent = certId;
    if (modalCertDate) modalCertDate.textContent = date;
    if (fallbackTitle) fallbackTitle.textContent = title;
    if (fallbackId) fallbackId.textContent = certId;
    if (modalDocLink) modalDocLink.href = imgSrc;

    // Reset visual state
    if (modalCertImg) modalCertImg.style.display = 'none';
    if (modalCertFallback) modalCertFallback.style.display = 'none';
    if (modalLoadingSpinner) modalLoadingSpinner.style.display = 'flex';

    if (modalCertImg) {
      modalCertImg.onload = function () {
        if (modalLoadingSpinner) modalLoadingSpinner.style.display = 'none';
        modalCertImg.style.display = 'block';
        if (modalCertFallback) modalCertFallback.style.display = 'none';
      };

      modalCertImg.onerror = function () {
        if (modalLoadingSpinner) modalLoadingSpinner.style.display = 'none';
        modalCertImg.style.display = 'none';
        if (modalCertFallback) modalCertFallback.style.display = 'flex';
      };

      modalCertImg.src = imgSrc;
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
    if (modalCertImg) {
      modalCertImg.onload = null;
      modalCertImg.onerror = null;
      modalCertImg.src = '';
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
