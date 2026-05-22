/* ── 1. Product Data ─────────────────────────────────────── */

const PRODUCTS = [
    {
        id: 'CX-26-001',
        name: 'Sleeping Cat Plush Toy',
        category: 'toys-games',
        catLabel: 'Toys & Games',
        badge: 'deal',
        price: 249,
        pLabel: 'Now At',
        pDisplay: '₹249',
        pOld: '₹899',
        discount: 72,
        desc: 'A realistic sleeping cat plush toy with soft premium fur and calming breathing sound effects. Perfect as a stress-relief companion, cute desk decor, or a cozy gift for kids and cat lovers.',
        tags: ['Soft Toy', 'Cat Plush', 'Sound Effect', 'Stress Relief', 'Kids Gift', 'Desk Decor'],
        link: 'https://amzn.to/3PqDIub',
        publishDate: '2026-05-22'
    },
    {
        id: 'CX-26-002',
        name: 'Portronics Clamp M5 Car Phone Holder',
        category: 'mobile-accessories',
        catLabel: 'Mobile Accessories',
        badge: 'deal',
        price: 336,
        pLabel: 'Now At',
        pDisplay: '₹336',
        pOld: '₹999',
        discount: 66,
        desc: 'A sturdy shockproof car phone holder with powerful suction grip, 360° rotation, and single-hand operation. Keeps your smartphone secure and accessible even on rough drives.',
        tags: ['Car Mount', '360 Rotation', 'Shockproof', 'Strong Grip', 'Hands-Free', 'Portronics'],
        link: 'https://amzn.to/43lER9t',
        publishDate: '2026-05-22'
    },
    {
        id: 'CX-26-003',
        name: 'Portronics Car Power 16 Fast Car Charger',
        category: 'mobile-accessories',
        catLabel: 'Mobile Accessories',
        badge: 'deal',
        price: 377,
        pLabel: 'Now At',
        pDisplay: '₹377',
        pOld: '₹999',
        discount: 62,
        desc: 'A compact 51W dual-port fast car charger with 33W Type-C PD and 18W USB fast charging. Perfect for charging smartphones, tablets, and other devices quickly during travel or daily commutes.',
        tags: ['Fast Charging', '51W Output', 'Type-C PD', 'Dual Port', 'Car Charger', 'Portronics'],
        link: 'https://amzn.to/4wQ15hF',
        publishDate: '2026-05-22'
    },
    {
        id: 'CX-26-004',
        name: 'WOSCHER AutoVac Pro Car Vacuum Cleaner',
        category: 'car-accessories',
        catLabel: 'Car Accessories',
        badge: 'deal',
        price: 1550,
        pLabel: 'Now At',
        pDisplay: '₹1550',
        pOld: '₹2499',
        discount: 38,
        desc: 'A powerful 140W handheld car vacuum cleaner with 5000PA suction, washable HEPA filter, and multiple nozzle attachments for deep interior cleaning. Ideal for removing dust, pet hair, and debris from hard-to-reach areas.',
        tags: ['Car Vacuum', '5000PA Suction', 'HEPA Filter', 'Portable', 'Deep Cleaning', 'WOSCHER'],
        link: 'https://amzn.to/3Rqq5M2',
        publishDate: '2026-05-22'
    },
    {
        id: 'CX-26-005',
        name: 'APPUCOCO Mini Car Trash Bin',
        category: 'car-accessories',
        catLabel: 'Car Accessories',
        badge: 'deal',
        price: 180,
        pLabel: 'Now At',
        pDisplay: '₹180',
        pOld: '₹699',
        discount: 74,
        desc: 'A compact mini car trash bin designed to keep your car clean and organized. Fits easily in cup holders, car doors, or center consoles and can also be used as a desk organizer at home or office.',
        tags: ['Car Dustbin', 'Compact Design', 'Cup Holder Fit', 'Organizer', 'Travel Essential', 'Portable'],
        link: 'https://amzn.to/4v7iJMe',
        publishDate: '2026-05-22'
    },
    {
        id: 'CX-26-006',
        name: 'DETACHI Car Tissue Holder',
        category: 'car-accessories',
        catLabel: 'Car Accessories',
        badge: 'deal',
        price: 261,
        pLabel: 'Now At',
        pDisplay: '₹261',
        pOld: '₹999',
        discount: 74,
        desc: 'A premium faux leather car tissue holder designed to keep tissues easily accessible while driving. Clips securely onto sun visors, seat backs, or car doors for a cleaner and more organized interior.',
        tags: ['Tissue Holder', 'Car Organizer', 'Faux Leather', 'Space Saving', 'Car Interior', 'DETACHI'],
        link: 'https://amzn.to/3RA6R6H',
        publishDate: '2026-05-22'
    },
    {
        id: 'CX-26-007',
        name: 'Godrej aer O Hanging Car Air Freshener Pack',
        category: 'car-accessories',
        catLabel: 'Car Accessories',
        badge: 'hot',
        price: 245,
        pLabel: 'Now At',
        pDisplay: '₹245',
        pOld: '₹297',
        discount: 18,
        desc: 'A stylish hanging gel-based car air freshener pack with long-lasting fragrance for up to 30 days. Designed to keep your car fresh, odor-free, and pleasant during every drive.',
        tags: ['Air Freshener', 'Long Lasting', 'Car Interior', 'Odor Control', 'Gel Freshener', 'Godrej'],
        link: 'https://amzn.to/49iFcgO',
        publishDate: '2026-05-22'
    },
    {
        id: 'CX-26-008',
        name: 'Yuoyar Magnetic Sunglasses Holder for Car',
        category: 'car-accessories',
        catLabel: 'Car Accessories',
        badge: 'deal',
        price: 289,
        pLabel: 'Now At',
        pDisplay: '₹289',
        pOld: '₹999',
        discount: 71,
        desc: 'A premium magnetic leather sunglasses holder designed for car visors. Keeps your sunglasses secure, scratch-free, and easily accessible while driving with convenient single-hand operation.',
        tags: ['Sunglasses Holder', 'Magnetic Clip', 'Car Organizer', 'Leather Finish', 'Visor Accessory', 'Yuoyar'],
        link: 'https://amzn.to/4fzffNF',
        publishDate: '2026-05-22'
    }
];


/* ── Global Config ───────────────────────────────────────── */

/**
 * Set to true when you are able to maintain live product prices.
 * false → hides all price info (new price, old price, discount) across
 *         cards, modal, and share messages.
 */
const SHOW_PRODUCT_PRICE = false;


/* ── 2. App State ────────────────────────────────────────── */

const state = {
    search: '',
    categories: new Set(),
    badges: new Set(),
    tags: new Set(),
    sort: 'default',
    page: 0,
    perPage: 6,
    filtered: [...PRODUCTS],
};

// Lookup tables used by multiple functions
const CATEGORIES = [
    ...new Map(PRODUCTS.map(p => [p.category, { value: p.category, label: p.catLabel }])).values(),
];

const BADGES = [
    { value: 'hot', label: 'Hot' },
    { value: 'new', label: 'New' },
    { value: 'deal', label: 'Deal' },
    { value: 'none', label: 'No Badge' },
];

const ALL_TAGS = [...new Set(PRODUCTS.flatMap(p => p.tags))].sort();

// Maps used when removing chips
const PANEL_MAP = { categories: 'panel-category', badges: 'panel-badge', tags: 'panel-tag' };
const DD_MAP = { categories: 'dd-category', badges: 'dd-badge', tags: 'dd-tag' };


/* ── 3. Cursor ───────────────────────────────────────────── */
// Cursor and bigCursor() are initialised by common-script.js
// bigCursor() is available globally via window.bigCursor



/* ── 4. Dropdown Builder ─────────────────────────────────── */

/**
 * Build a filter dropdown panel with an inline search box.
 *
 * @param {string}  panelId   - ID of the `.fdd-panel` container
 * @param {Array}   items     - string[] or {value, label}[]
 * @param {Set}     stateSet  - which state Set to toggle
 * @param {string}  ddId      - parent `.filter-dropdown` ID (for badge sync)
 */
function buildDropdownPanel(panelId, items, stateSet, ddId) {
    const panel = document.getElementById(panelId);

    // ── Inline search box ──
    const searchWrap = document.createElement('div');
    searchWrap.className = 'fdd-search-wrap';
    searchWrap.innerHTML = `
    <span class="fdd-search-icon">⌕</span>
    <input class="fdd-search" type="text" placeholder="Search…" autocomplete="off" spellcheck="false">
  `;
    panel.appendChild(searchWrap);

    const searchInput = searchWrap.querySelector('.fdd-search');

    // ── No-results message ──
    const noResults = document.createElement('div');
    noResults.className = 'fdd-no-results';
    noResults.textContent = 'No results';
    panel.appendChild(noResults);

    // ── Scrollable options list ──
    const list = document.createElement('div');
    list.className = 'fdd-options-list';
    panel.appendChild(list);

    // Build each option row
    items.forEach(item => {
        const val = typeof item === 'string' ? item : item.value;
        const label = typeof item === 'string' ? item : item.label;

        const row = document.createElement('div');
        row.className = 'fdd-option';
        row.dataset.value = val;
        row.innerHTML = `<span class="opt-check">✓</span>${label}`;

        row.addEventListener('click', () => {
            if (stateSet.has(val)) {
                stateSet.delete(val);
                row.classList.remove('selected');
            } else {
                stateSet.add(val);
                row.classList.add('selected');
            }
            syncDropdownBadge(ddId);
            run();
        });

        bigCursor(row);
        list.appendChild(row);
    });

    // ── Inline search filter logic ──
    searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        list.querySelectorAll('.fdd-option').forEach(row => {
            const matches = row.dataset.value.toLowerCase().includes(q);
            row.classList.toggle('hidden', !matches);
            if (matches) visibleCount++;
        });

        noResults.classList.toggle('visible', visibleCount === 0);
    });

    // Stop click inside panel from closing the dropdown
    panel.addEventListener('click', e => e.stopPropagation());

    // Prevent cursor:none on the search input (it's a text field)
    searchInput.style.cursor = 'text';
}

buildDropdownPanel('panel-category', CATEGORIES, state.categories, 'dd-category');
buildDropdownPanel('panel-badge', BADGES, state.badges, 'dd-badge');
buildDropdownPanel('panel-tag', ALL_TAGS, state.tags, 'dd-tag');

/**
 * Highlight or un-highlight the dropdown trigger button
 * when its set has active selections.
 * @param {string} ddId
 */
function syncDropdownBadge(ddId) {
    const btn = document.querySelector(`#${ddId} .fdd-btn`);
    const setMap = {
        'dd-category': state.categories,
        'dd-badge': state.badges,
        'dd-tag': state.tags,
    };
    btn.classList.toggle('has-active', setMap[ddId].size > 0);
}


/* ── 5. Dropdown Toggle ──────────────────────────────────── */

function toggleDD(ddId) {
    const panel = document.querySelector(`#${ddId} .fdd-panel`);
    const btn = document.querySelector(`#${ddId} .fdd-btn`);
    const isOpen = panel.classList.contains('open');

    closeAllDropdowns();

    if (!isOpen) {
        panel.classList.add('open');
        btn.classList.add('open');
        // Auto-focus the inline search
        panel.querySelector('.fdd-search')?.focus();
    }
}

function closeAllDropdowns() {
    document.querySelectorAll('.fdd-panel').forEach(p => p.classList.remove('open'));
    document.querySelectorAll('.fdd-btn').forEach(b => b.classList.remove('open'));
}

// Close when clicking outside any dropdown
document.addEventListener('click', e => {
    if (!e.target.closest('.filter-dropdown')) closeAllDropdowns();
});

// Expose to HTML onclick attributes
window.toggleDD = toggleDD;


/* ── 6. Main Search ──────────────────────────────────────── */

const searchEl = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearch');

searchEl.addEventListener('input', () => {
    state.search = searchEl.value.trim().toLowerCase();
    clearBtn.style.display = state.search ? 'block' : 'none';
    run();
});

clearBtn.addEventListener('click', () => {
    searchEl.value = '';
    state.search = '';
    clearBtn.style.display = 'none';
    run();
});

bigCursor(clearBtn);


/* ── 7. Sort ─────────────────────────────────────────────── */

/**
 * Activate a sort button and re-run the filter+sort.
 * Called from HTML onclick attributes.
 * @param {HTMLButtonElement} btn
 */
function setSort(btn) {
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.sort = btn.dataset.sort;
    run();
}

window.setSort = setSort;


/* ── 8. Filter + Sort Runner ─────────────────────────────── */

/**
 * Apply all active filters and sort order, then refresh the grid.
 */
function run() {
    // ── Filter ──
    let result = PRODUCTS.filter(product => {
        // Full-text search across name and tags
        if (state.search) {
            const haystack = product.name.toLowerCase();
            if (!haystack.includes(state.search)) return false;
        }

        // Category filter
        if (state.categories.size && !state.categories.has(product.category)) {
            return false;
        }

        // Badge filter ('none' matches products without a badge)
        if (state.badges.size) {
            const b = product.badge || 'none';
            if (!state.badges.has(b)) return false;
        }

        // Tag filter (product must match at least one selected tag)
        if (state.tags.size) {
            const productTags = product.tags.map(t => t.toLowerCase());
            const hasMatch = [...state.tags].some(t => productTags.includes(t.toLowerCase()));
            if (!hasMatch) return false;
        }

        return true;
    });

    // ── Sort ──
    switch (state.sort) {
        case 'name-asc': result.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'name-desc': result.sort((a, b) => b.name.localeCompare(a.name)); break;
        case 'price-asc': result.sort((a, b) => a.price - b.price); break;
        case 'price-desc': result.sort((a, b) => b.price - a.price); break;
        default: break; // 'default' keeps original PRODUCTS order
    }

    state.filtered = result;
    state.page = 0;

    renderGrid(/* reset = */ true);
    renderChips();
    updateCounts();
}


/* ── 9. Grid Renderer ────────────────────────────────────── */

const grid = document.getElementById('productsGrid');
const emptyEl = document.getElementById('emptyState');
const spinner = document.getElementById('loadSpinner');

/**
 * Render the next page of filtered results into the grid.
 * @param {boolean} reset - if true, wipe existing cards first
 */
function renderGrid(reset) {
    if (reset) {
        // Remove all cards but keep the empty-state node in the DOM
        [...grid.children].forEach(child => {
            if (!child.classList.contains('empty-state')) child.remove();
        });
    }

    const start = state.page * state.perPage;
    const slice = state.filtered.slice(start, start + state.perPage);

    if (reset && state.filtered.length === 0) {
        emptyEl.classList.add('visible');
        spinner.classList.remove('active');
        return;
    }

    emptyEl.classList.remove('visible');

    slice.forEach((product, i) => {
        const card = buildCard(product);
        grid.appendChild(card);

        // Staggered entrance animation
        setTimeout(() => {
            card.classList.add('in-view');
            bigCursor(card.querySelector('.product-cta'));
        }, i * 55);
    });

    state.page++;
    spinner.classList.remove('active');
}


/* ── 10. Card Builder ────────────────────────────────────── */

const BADGE_LABELS = { hot: 'Hot', new: 'New', deal: 'Deal' };

const BADGE_ICONS = {
    hot: `<i class="fa-solid fa-fire"></i>`,
    new: `<i class="fa-solid fa-bolt"></i>`,
    deal: `<i class="fa-solid fa-tag"></i>`
};

/**
 * Build a product card DOM element.
 * @param {Object} p - product data object
 * @returns {HTMLElement}
 */
function buildCard(p) {
    const article = document.createElement('article');
    article.className = 'product-card';
    article.dataset.id = p.id;

    const imgPath = `assets/images/products/${p.id}.png`;

    const badgeHTML = p.badge
        ? `<span class="product-badge badge-${p.badge}">${BADGE_ICONS[p.badge]} ${BADGE_LABELS[p.badge]}</span>`
        : '';

    const tagsHTML = p.tags
        .map(t => `<span class="product-tag">${t}</span>`)
        .join('');

    const oldPriceHTML = (SHOW_PRODUCT_PRICE && p.pOld)
        ? `<span class="price-old">${p.pOld}</span>`
        : '';

    const discountHTML = (SHOW_PRODUCT_PRICE && p.discount)
        ? `<span class="price-discount">−${p.discount}%</span>`
        : '';

    const priceBlockHTML = SHOW_PRODUCT_PRICE
        ? `<div class="product-price">
            <span class="price-label">${p.pLabel}</span>
            <div class="price-row">
              <span class="price-value">${p.pDisplay}</span>
              ${oldPriceHTML}
              ${discountHTML}
            </div>
          </div>`
        : `<div class="product-price-hidden">
          </div>`;

    article.innerHTML = `
    <div class="product-img-wrap">
      <img class="product-img" src="${imgPath}" alt="${p.name}" loading="lazy">
    </div>
    <div class="product-body">
      <div class="product-meta">
        <span class="product-category">${p.catLabel}</span>
        ${badgeHTML}
      </div>
      <h2 class="product-name">${p.name}</h2>
      <p class="product-desc">${p.desc}</p>
      <div class="product-tags">${tagsHTML}</div>
    </div>
    <div class="product-footer">
      ${priceBlockHTML}
      <div class="product-actions">
        <button class="share-btn" data-id="${p.id}" title="Share product"><i class="fa-solid fa-share-nodes"></i></button>
        <a href="${p.link}" class="product-cta" target="_blank" rel="noopener noreferrer">Get It <span class="cta-arrow">→</span></a>
      </div>
    </div>
  `;

    // Share button
    const shareBtn = article.querySelector('.share-btn');
    shareBtn.addEventListener('click', e => { e.stopPropagation(); openShareSheet(p); });
    bigCursor(shareBtn);

    // Open modal on card click (but not when clicking CTA or share button)
    article.addEventListener('click', e => {
        if (e.target.closest('.product-cta') || e.target.closest('.share-btn')) return;
        openModal(p);
    });

    return article;
}


/* ── 11. Active-Filter Chips ─────────────────────────────── */

const chipsBar = document.getElementById('chipsBar');

/**
 * Re-render the active filter chip strip below the controls bar.
 */
function renderChips() {
    chipsBar.innerHTML = '';

    const allActive = [
        ...[...state.categories].map(v => ({
            type: 'categories', v,
            label: CATEGORIES.find(c => c.value === v)?.label || v,
        })),
        ...[...state.badges].map(v => ({
            type: 'badges', v,
            label: v === 'none' ? 'No Badge' : v.charAt(0).toUpperCase() + v.slice(1),
        })),
        ...[...state.tags].map(v => ({
            type: 'tags', v, label: v,
        })),
    ];

    if (!allActive.length) {
        chipsBar.classList.remove('visible');
        return;
    }

    chipsBar.classList.add('visible');

    allActive.forEach(f => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.innerHTML = `${f.label}<span class="chip-x">✕</span>`;

        chip.addEventListener('click', () => {
            state[f.type].delete(f.v);
            // Deselect the matching option row in the panel
            document.querySelector(`#${PANEL_MAP[f.type]} [data-value="${f.v}"]`)
                ?.classList.remove('selected');
            syncDropdownBadge(DD_MAP[f.type]);
            run();
        });

        bigCursor(chip);
        chipsBar.appendChild(chip);
    });

    const clearAllBtn = document.createElement('button');
    clearAllBtn.className = 'chips-clear';
    clearAllBtn.textContent = 'Clear All';
    clearAllBtn.addEventListener('click', resetAll);
    bigCursor(clearAllBtn);
    chipsBar.appendChild(clearAllBtn);
}

/**
 * Clear every filter, search, and sort back to defaults.
 */
function resetAll() {
    state.categories.clear();
    state.badges.clear();
    state.tags.clear();
    state.search = '';

    searchEl.value = '';
    clearBtn.style.display = 'none';

    // Clear all panel checkboxes and inline searches
    document.querySelectorAll('.fdd-option').forEach(o => o.classList.remove('selected'));
    document.querySelectorAll('.fdd-search').forEach(i => { i.value = ''; });
    document.querySelectorAll('.fdd-option').forEach(o => o.classList.remove('hidden'));
    document.querySelectorAll('.fdd-no-results').forEach(n => n.classList.remove('visible'));

    ['dd-category', 'dd-badge', 'dd-tag'].forEach(id => {
        document.querySelector(`#${id} .fdd-btn`).classList.remove('has-active');
    });

    run();
}


/* ── 12. Stat Counters ───────────────────────────────────── */

function updateCounts() {
    const n = state.filtered.length;
    document.getElementById('pickCount').textContent = n + ' Item' + (n !== 1 ? 's' : '');
    document.getElementById('stat-showing').textContent = n;
    document.getElementById('stat-total').textContent = PRODUCTS.length;
    document.getElementById('stat-categories').textContent = new Set(PRODUCTS.map(item => item.category)).size;
}


/* ── 13. Lazy-load Observer ──────────────────────────────── */

const sentinel = document.getElementById('loadSentinel');

new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;

    const loaded = state.page * state.perPage;
    if (loaded < state.filtered.length) {
        spinner.classList.add('active');
        setTimeout(() => renderGrid(false), 350);
    }
}, { rootMargin: '200px' }).observe(sentinel);


/* ── 14. Marquee ─────────────────────────────────────────── */

const MARQUEE_ITEMS = [
    'New Arrivals', 'Under the Radar', 'Before It Trends', 'Stranger Finds, Better Buys', 'Small Brands, Big Utility',
    'Low Key, High Utility', 'Always Exploring New Picks', 'Quietly Essential', 'Just the Good Stuff', 'Buried in Search Results'
];

const marqueeTrack = document.getElementById('marqueeTrack');

// Duplicate the list so the CSS scroll animation loops seamlessly
[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].forEach(text => {
    const span = document.createElement('span');
    span.className = 'marquee-item';
    span.innerHTML = `${text}<span class="dot">✦</span>`;
    marqueeTrack.appendChild(span);
});


/* ── 15. Scroll To Top ───────────────────────────────────── */
// Handled by common-script.js



/* ── 16. Product Modal ───────────────────────────────────── */

// Build modal DOM once
const modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay';
modalOverlay.innerHTML = `
  <div class="modal-card" id="modalCard">
    <button class="modal-close" id="modalClose">✕</button>
    <div class="modal-img-wrap">
      <img class="modal-img" id="modalImg" src="" alt="">
    </div>
    <div class="modal-body">
      <div class="modal-meta">
        <span class="modal-category" id="modalCategory"></span>
        <span class="modal-badge" id="modalBadge"></span>
      </div>
      <h2 class="modal-name" id="modalName"></h2>
      <p class="modal-desc" id="modalDesc"></p>
      <div class="modal-tags" id="modalTags"></div>
    </div>
    <div class="modal-footer">
      <div class="modal-price-wrap">
        <span class="modal-price-label" id="modalPriceLabel"></span>
        <div class="modal-price-row">
          <span class="modal-price-value" id="modalPrice"></span>
          <span class="modal-price-old" id="modalOldPrice"></span>
          <span class="modal-discount" id="modalDiscount"></span>
        </div>
      </div>
      <div class="modal-actions">
        <button class="modal-share-btn" id="modalShareBtn" title="Share product"><i class="fa-solid fa-share-nodes"></i> Share</button>
        <a class="modal-cta" id="modalCta" target="_blank" rel="noopener noreferrer">
          View on Amazon <span>→</span>
        </a>
      </div>
    </div>
  </div>
`;
document.body.appendChild(modalOverlay);

const modalCard    = document.getElementById('modalCard');
const modalClose   = document.getElementById('modalClose');
const modalShareBtn = document.getElementById('modalShareBtn');
bigCursor(modalClose);
bigCursor(document.getElementById('modalCta'));
bigCursor(modalShareBtn);

let _modalProduct = null;

modalShareBtn.addEventListener('click', () => {
    if (_modalProduct) openShareSheet(_modalProduct);
});

function openModal(p) {
    _modalProduct = p;
    const imgPath = `assets/images/products/${p.id}.png`;
    document.getElementById('modalImg').src = imgPath;
    document.getElementById('modalImg').alt = p.name;
    document.getElementById('modalCategory').textContent = p.catLabel;

    const badgeEl = document.getElementById('modalBadge');
    if (p.badge) {
        badgeEl.innerHTML = `${BADGE_ICONS[p.badge]} ${BADGE_LABELS[p.badge]}`;
        badgeEl.className = `modal-badge badge-${p.badge}`;
        badgeEl.style.display = '';
    } else {
        badgeEl.style.display = 'none';
    }

    document.getElementById('modalName').textContent = p.name;
    document.getElementById('modalDesc').textContent = p.desc;

    const modalPriceWrap = document.querySelector('.modal-price-wrap');
    if (SHOW_PRODUCT_PRICE) {
        modalPriceWrap.style.display = '';
        document.getElementById('modalPriceLabel').textContent = p.pLabel;
        document.getElementById('modalPrice').textContent = p.pDisplay;

        const oldEl = document.getElementById('modalOldPrice');
        oldEl.textContent = p.pOld || '';
        oldEl.style.display = p.pOld ? '' : 'none';

        const discEl = document.getElementById('modalDiscount');
        discEl.textContent = p.discount ? `−${p.discount}%` : '';
        discEl.style.display = p.discount ? '' : 'none';
    } else {
        modalPriceWrap.innerHTML = ``;
    }

    document.getElementById('modalCta').href = p.link;

    const tagsEl = document.getElementById('modalTags');
    tagsEl.innerHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

    // Open
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
    if (!e.target.closest('#modalCard')) closeModal();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});


/* ── 17. Share Sheet ─────────────────────────────────────── */

const shareSheet = document.createElement('div');
shareSheet.className = 'share-sheet';
shareSheet.innerHTML = `
  <div class="share-sheet-card">
    <div class="share-sheet-header">
      <span class="share-sheet-title">Share This Pick</span>
      <button class="share-sheet-close" id="shareSheetClose">✕</button>
    </div>
    <div class="share-copy-row">
      <input class="share-url-input" id="shareUrlInput" type="text" readonly>
      <button class="share-copy-btn" id="shareCopyBtn">Copy</button>
    </div>
    <p class="share-via-label">Share via</p>
    <div class="share-options">
      <a class="share-option whatsapp" id="shareWhatsapp" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-whatsapp"></i><span>WhatsApp</span>
      </a>
      <a class="share-option instagram" id="shareInstagram" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram"></i><span>Instagram</span>
      </a>
      <a class="share-option twitter" id="shareTwitter" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-x-twitter"></i><span>X / Twitter</span>
      </a>
      <a class="share-option telegram" id="shareTelegram" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-telegram"></i><span>Telegram</span>
      </a>
      <button class="share-option native" id="shareNative">
        <i class="fa-solid fa-arrow-up-from-bracket"></i><span>More</span>
      </button>
    </div>
  </div>
`;
document.body.appendChild(shareSheet);
bigCursor(document.getElementById('shareSheetClose'));
bigCursor(document.getElementById('shareCopyBtn'));

function openShareSheet(p) {
    const url = `${location.origin}${location.pathname}?product=${encodeURIComponent(p.id)}`;
    const text = SHOW_PRODUCT_PRICE
        ? `Check out "${p.name}" — ${p.pDisplay} on Codexael Finds!`
        : `Check out "${p.name}" on Codexael Finds!`;

    document.getElementById('shareUrlInput').value = url;
    document.getElementById('shareCopyBtn').textContent = 'Copy';

    document.getElementById('shareWhatsapp').href =
        `https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`;
    document.getElementById('shareTwitter').href =
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    document.getElementById('shareTelegram').href =
        `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;

    // Instagram doesn't support direct web share links — open profile instead
    document.getElementById('shareInstagram').href = `https://www.instagram.com/`;

    document.getElementById('shareNative').onclick = () => {
        if (navigator.share) {
            navigator.share({ title: p.name, text, url }).catch(() => {});
        } else {
            navigator.clipboard.writeText(url);
        }
    };

    shareSheet.classList.add('open');
}

function closeShareSheet() {
    shareSheet.classList.remove('open');
}

document.getElementById('shareSheetClose').addEventListener('click', closeShareSheet);
shareSheet.addEventListener('click', e => {
    if (!e.target.closest('.share-sheet-card')) closeShareSheet();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeShareSheet();
});

document.getElementById('shareCopyBtn').addEventListener('click', () => {
    const input = document.getElementById('shareUrlInput');
    navigator.clipboard.writeText(input.value).then(() => {
        const btn = document.getElementById('shareCopyBtn');
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy', 2000);
    });
});


/* ── 18. URL Deep-link Handler ───────────────────────────── */

(function handleDeepLink() {
    const params = new URLSearchParams(location.search);
    const rawId = params.get('product');
    if (!rawId) return;
    const product = PRODUCTS.find(p => p.id === rawId);

    if (!product) {
        // Invalid id — clean URL and stay on index
        history.replaceState(null, '', location.pathname);
        return;
    }

    // Valid — open modal directly after render
    setTimeout(() => openModal(product), 300);
})();


/* ── 19. Init ────────────────────────────────────────────── */

run();