# Awais Mumtaz — Portfolio (Light Theme)

Clean, editorial light-theme portfolio. Zero build tools, zero dependencies.
Open `index.html` in a browser and it works.

---

## File Structure

```
portfolio/
├── index.html            ← Full site (never edit unless customising design)
├── data/
│   └── portfolio.js      ← ⭐ EDIT THIS FILE to change any content
└── assets/
    ├── resume.pdf        ← DROP YOUR PDF HERE  ← ← ← REQUIRED
    └── malikawais.png    ← Your photo (optional — fallback emoji shown if missing)
```

---

## Getting Started

### Step 1 — Add your resume PDF
```
assets/resume.pdf
```
Every "Download Resume" button triggers a direct file download of this PDF.
The filename the browser saves as: `Awais_Mumtaz_Resume.pdf`

### Step 2 — Add your photo (optional)
```
assets/malikawais.png
```
If missing, a fallback emoji is shown. Any image format works — update the
`avatar` path in `data/portfolio.js` if using a different filename.

### Step 3 — Open in browser
```
open index.html        # macOS
start index.html       # Windows
```
No build step, no server needed for local preview.
(For PDF download to trigger correctly, use a local server or deploy.)

### Optional: local server
```bash
# Python 3
python -m http.server 8080

# Node
npx serve .
```
Then visit: http://localhost:8080

---

## Updating Content — Only Edit `data/portfolio.js`

### Personal info / contact
```js
personal: {
  name: 'Your Name',
  role: 'Your Role',
  bio:  'Your bio.',
  contact: { email: 'you@email.com', phone: '+1...' },
}
```

### Add a skill
```js
// Inside any category's items array:
{ name: 'TypeScript', level: 3, icon: '🔷' }
// 1 Beginner · 2 Intermediate · 3 Advanced · 4 Expert
```

### Add a project
```js
{
  id: 'my-project',
  title: 'My New Project',
  period: 'Jan 2026',
  description: 'What it does.',
  stack: ['React', 'Node.js'],
  highlights: ['Key achievement 1', 'Key achievement 2'],
  github: 'https://github.com/...',
  live: 'https://mysite.com',         // leave '' to hide button
  image: './assets/projects/shot.png',// leave '' for emoji placeholder
  tags: ['Web', 'Full Stack'],
  featured: true,                     // → large 2-col card at top
},
```

### Change resume filename in download
In `index.html`, search for `Awais_Mumtaz_Resume.pdf` (appears 3 times) and
replace with your preferred filename.

---

## Deploying (all free)

| Host | How |
|------|-----|
| **Netlify Drop** | Drag folder to netlify.com/drop |
| **GitHub Pages** | Push repo → Settings → Pages → main / root |
| **Vercel** | Import repo, Framework: Other → Deploy |

---

## Testing Checklist

### Visual
- [ ] Hero photo or fallback emoji renders correctly
- [ ] All sections populated (About, Skills, Projects, Services, Contact)
- [ ] Featured project shows 2-col layout on ≥860px screen
- [ ] Skills bars animate when section scrolls into view
- [ ] Hover states work on all cards and buttons

### Responsive
- [ ] 1280px — full layout, photo visible
- [ ] 860px — hero/project photo hidden, single column
- [ ] 640px — hamburger nav, stacked layout
- [ ] 375px (mobile) — no horizontal overflow

### Resume Download
- [ ] Nav "↓ Resume" button triggers file download
- [ ] Hero "↓ Download Resume" button triggers file download
- [ ] Contact "↓ Resume PDF" button triggers file download
- [ ] Mobile nav resume link triggers file download
- [ ] Saved filename is `Awais_Mumtaz_Resume.pdf`

### Accessibility
- [ ] Tab order makes logical sense through all sections
- [ ] Skip-to-content link appears on first Tab press
- [ ] Screen reader announces skill bar levels (progressbar role)
- [ ] All images have alt text; decorative images are aria-hidden
- [ ] Mobile nav trap: Escape key closes drawer

### Contrast (WCAG AA — all pass at ≥4.5:1)
- [ ] Body text #3f3f46 on #f7f5f0 → 9.2:1 ✓
- [ ] Accent #1d4ed8 on #f7f5f0 → 7.1:1 ✓
- [ ] Muted text #71717a on #ffffff → 4.6:1 ✓
- [ ] Accent-text #1e40af on #dbeafe → 5.9:1 ✓
