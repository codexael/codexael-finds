/* ── 1. Product Data ─────────────────────────────────────── */

const PRODUCTS = [
    {
        id: 1,
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
        link: 'https://amzn.to/3PqDIub'
    }
];


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

    const oldPriceHTML = p.pOld
        ? `<span class="price-old">${p.pOld}</span>`
        : '';

    const discountHTML = p.discount
        ? `<span class="price-discount">−${p.discount}%</span>`
        : '';

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
      <div class="product-price">
        <span class="price-label">${p.pLabel}</span>
        <div class="price-row">
          <span class="price-value">${p.pDisplay}</span>
          ${oldPriceHTML}
          ${discountHTML}
        </div>
      </div>
      <a href="${p.link}" class="product-cta" target="_blank" rel="noopener noreferrer">Get It <span class="cta-arrow">→</span></a>
    </div>
  `;

    // Open modal on card click (but not when clicking the CTA button)
    article.addEventListener('click', e => {
        if (e.target.closest('.product-cta')) return;
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
      <a class="modal-cta" id="modalCta" target="_blank" rel="noopener noreferrer">
        View on Amazon <span>→</span>
      </a>
    </div>
  </div>
`;
document.body.appendChild(modalOverlay);

const modalCard    = document.getElementById('modalCard');
const modalClose   = document.getElementById('modalClose');
bigCursor(modalClose);
bigCursor(document.getElementById('modalCta'));

function openModal(p) {
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
    document.getElementById('modalPriceLabel').textContent = p.pLabel;
    document.getElementById('modalPrice').textContent = p.pDisplay;

    const oldEl = document.getElementById('modalOldPrice');
    oldEl.textContent = p.pOld || '';
    oldEl.style.display = p.pOld ? '' : 'none';

    const discEl = document.getElementById('modalDiscount');
    discEl.textContent = p.discount ? `−${p.discount}%` : '';
    discEl.style.display = p.discount ? '' : 'none';

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


/* ── 17. Init ────────────────────────────────────────────── */

run();