/* ── common-script.js — shared across ALL pages ───────────── */

(function () {

    /* ── 1. Header & Footer Injection ────────────────────────── */

    const PAGE_ID = document.body.dataset.page || 'index';

    function navLink(href, id, label) {
        const active = PAGE_ID === id ? ' style="color:var(--accent)"' : '';
        return `<a href="${href}" class="nav-link"${active}>${label}</a>`;
    }

    const AFFILIATE_NOTICE = `
        <div class="affiliate-notice">
            ✦ Codexael Finds is a participant in the Amazon Services LLC Associates Program — we earn a commission at no extra cost to you ✦ &nbsp;|&nbsp; <a href="disclosure.html" class="notice-link">Full Disclosure</a> ✦
        </div>`;

    const HEADER = `
        <header class="top-bar">
            <div class="logo-wrap">
                <a href="index.html" style="text-decoration:none;">
                    <div class="logo-mark">Codex<span>ael</span></div>
                    <span class="logo-sub">// Finds</span>
                </a>
            </div>
            <nav class="top-bar-right">
                ${navLink('about.html',   'about',   'About')}
                ${navLink('contact.html', 'contact', 'Contact')}
                <div class="status-pill">
                    <span class="status-dot"></span>
                    Recently Added
                </div>
            </nav>
        </header>`;

    const FOOTER = `
        <footer class="bottom-bar">
            <div class="footer-top">
                <p class="footer-disclosure">Codexael Finds is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
                <p class="footer-image-notice">✦ Images may be digitally enhanced for promotional presentation purposes.</p>
            </div>
            <div class="footer-bottom">
                <span class="copyright">© 2025 Codexael. All rights reserved.</span>
                <nav class="footer-links">
                    <a href="index.html"          class="social-link">Finds</a>
                    <a href="about.html"          class="social-link">About</a>
                    <a href="contact.html"        class="social-link">Contact</a>
                    <a href="privacy-policy.html" class="social-link">Privacy Policy</a>
                    <a href="disclosure.html"     class="social-link">Affiliate Disclosure</a>
                    <a href="mailto:contact@codexael.com" class="social-link">Email</a>
                </nav>
                <span class="tagline">The Overlooked Shelf</span>
            </div>
        </footer>`;

    const pageWrap = document.querySelector('.page-wrap');
    pageWrap.insertAdjacentHTML('afterbegin', HEADER);
    pageWrap.insertAdjacentHTML('afterbegin', AFFILIATE_NOTICE);
    pageWrap.insertAdjacentHTML('beforeend', FOOTER);


    /* ── 2. Custom Cursor ────────────────────────────────────── */

    const curEl  = document.getElementById('cursor');
    const ringEl = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
        curEl.style.left = mx + 'px';
        curEl.style.top  = my + 'px';
    });

    (function animateRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ringEl.style.left = rx + 'px';
        ringEl.style.top  = ry + 'px';
        requestAnimationFrame(animateRing);
    })();

    // Expose bigCursor globally so script.js can use it for dynamic elements
    window.bigCursor = function (el) {
        el.addEventListener('mouseenter', () => {
            curEl.style.width    = '20px'; curEl.style.height   = '20px';
            ringEl.style.width   = '56px'; ringEl.style.height  = '56px';
            ringEl.style.opacity = '0.9';
        });
        el.addEventListener('mouseleave', () => {
            curEl.style.width    = '10px'; curEl.style.height   = '10px';
            ringEl.style.width   = '38px'; ringEl.style.height  = '38px';
            ringEl.style.opacity = '0.5';
        });
    };

    document.querySelectorAll('a, button').forEach(window.bigCursor);


    /* ── 3. Scroll To Top ────────────────────────────────────── */

    const sBtn = document.createElement('button');
    sBtn.className = 'scroll-top-btn';
    sBtn.innerHTML = '↑';
    sBtn.title     = 'Back to top';
    document.body.appendChild(sBtn);
    window.bigCursor(sBtn);

    window.addEventListener('scroll', () => {
        sBtn.classList.toggle('visible', window.scrollY > 300);
    });

    sBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

})();
