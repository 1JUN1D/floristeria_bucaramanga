// ===================================
// LANDING PAGE JS - Larosset Bucaramanga
// Catálogo con prioridad por categoría + Conversiones Google Ads
// Precios actualizados con descuento del 20%
// ===================================

// Cada producto tiene precio actual (price) y precio anterior (oldPrice = price * 1.20)
const products = [
    { id: 10, code: "010", category: "Mini Ramo",       tags: ["arreglos","cumpleaños"],                          name: "Mini Encanto Lila",        description: "Mini bouquet con crisantemos lila, claveles rosados y rosas crema en papel rosa. Perfecto para detalles inesperados que dejan huella.",                       price: 107500, oldPrice: 129000, image: "assets/foto10.webp" },
    { id: 12, code: "012", category: "Flores Mixtas",   tags: ["arreglos","cumpleaños"],                          name: "Primavera Rosa",           description: "Mix vibrante de rosas, gerberas y crisantemos en tonos rosa, verde y crema. Energía floral para alegrar cualquier día especial.",                              price: 107500, oldPrice: 129000, image: "assets/foto12.webp" },
    { id: 9,  code: "009", category: "Rosas Pastel",    tags: ["rosas","arreglos","aniversario"],                 name: "Brisa Romántica",          description: "Rosas pastel, gerberas blancas, gypsophila y un tulipán envueltos en papel rosa con lazo. Frescura y ternura para sorprender a quien amas.",                price: 112500, oldPrice: 135000, image: "assets/foto9.webp"  },
    { id: 13, code: "013", category: "Girasoles",       tags: ["girasoles","arreglos","cumpleaños"],              name: "Girasol Rosa Pastel",      description: "Girasoles con gypsophila y rosas pastel envueltos en papel rosa con lazos blancos. Ternura y alegría reunidas en un mismo ramo.",                              price: 112500, oldPrice: 135000, image: "assets/foto13.webp" },
    { id: 14, code: "014", category: "Rosas Amarillas", tags: ["rosas","arreglos","cumpleaños"],                  name: "Sol Amarillo Rústico",     description: "Rosas amarillas con eucalipto y flores blancas envueltas en papel craft natural. Estilo rústico ideal para celebrar la amistad y la alegría.",                price: 118750, oldPrice: 142500, image: "assets/foto14.webp" },
    { id: 6,  code: "006", category: "Rosas Mixtas",    tags: ["rosas","arreglos","amor"],                        name: "Rojo y Blanco Eterno",     description: "Ramo clásico con rosas rojas y blancas, follaje fresco y tarjeta dedicada. La combinación atemporal que nunca falla para conquistar.",                        price: 125000, oldPrice: 150000, image: "assets/foto6.webp"  },
    { id: 15, code: "015", category: "Rosas Pastel",    tags: ["rosas","arreglos","aniversario"],                 name: "Tulipán Pastel",           description: "Tulipán rosa, gerberas naranja y rosas pastel envueltos en papel rosado con lazo satinado. Elegancia romántica y delicada para fechas inolvidables.",         price: 127500, oldPrice: 153000, image: "assets/foto15.webp" },
    { id: 16, code: "016", category: "Rosas Rojas",     tags: ["rosas","arreglos","amor","aniversario"],          name: "Love You Forever",         description: "Rosas rojas envueltas en papel impreso 'Love You Forever' con eucalipto y tarjeta dedicada. Una declaración eterna en cada pétalo y palabra.",                price: 143750, oldPrice: 172500, image: "assets/foto16.webp" },
    { id: 11, code: "011", category: "Girasoles",       tags: ["girasoles","rosas","arreglos","cumpleaños","amor"], name: "Girasol Black & Red",    description: "Girasol grande con rosas rojas y papel negro, terminado con un lazo rojo brillante. Estilo audaz y luminoso para regalos con carácter.",                     price: 150000, oldPrice: 180000, image: "assets/foto11.webp" },
    { id: 8,  code: "008", category: "Flores Mixtas",   tags: ["arreglos","cumpleaños"],                          name: "Jardín Primaveral",        description: "Mix abundante de gerberas, crisantemos, claveles y rosas en tonos rosa, lila y verde. Un jardín completo cuidadosamente compuesto en un solo ramo.",          price: 156250, oldPrice: 187500, image: "assets/foto8.webp"  },
    { id: 5,  code: "005", category: "Caja Premium",    tags: ["rosas","arreglos","aniversario","chocolates"],    name: "Caja Lirio y Rosas Rosadas", description: "Caja blanca con rosas rosadas, lirio fresco, Ferrero Rocher y tarjeta personalizada. Lujo floral diseñado para fechas verdaderamente especiales.",            price: 167500, oldPrice: 201000, image: "assets/foto5.webp"  },
    { id: 3,  code: "003", category: "Rosas Rojas",     tags: ["rosas","arreglos","aniversario","amor"],          name: "Elegancia Negra y Oro",   description: "Ramo de rosas rojas envuelto en papel negro y dorado con gypsophila blanca. Diseño sofisticado ideal para aniversarios y momentos memorables.",                price: 168750, oldPrice: 202500, image: "assets/foto3.webp"  },
    { id: 4,  code: "004", category: "Girasoles",       tags: ["girasoles","arreglos","cumpleaños","chocolates"], name: "Sol y Chocolate",          description: "Girasoles vibrantes con rosas rojas y bombones Ferrero envueltos en papel negro y lazo dorado. Alegría floral con un toque dulce irresistible.",              price: 176250, oldPrice: 211500, image: "assets/foto4.webp"  },
    { id: 1,  code: "001", category: "Rosas Rojas",     tags: ["rosas","arreglos","amor","aniversario"],          name: "Pasión en Rojo",           description: "Bouquet abundante con más de veinticinco rosas rojas y una rosa dorada al centro. Detalles en perlas, follaje verde y envoltura negra elegante.",                price: 180000, oldPrice: 216000, image: "assets/foto1.webp"  },
    { id: 17, code: "017", category: "Lirios y Rosas",  tags: ["rosas","lirios","arreglos","aniversario"],        name: "Lirio y Rosas Crema",      description: "Lirios blancos con rosas crema y gypsophila envueltos en papel rosa y dorado. Suavidad y elegancia reunidas en una sola pieza inolvidable.",                  price: 180000, oldPrice: 216000, image: "assets/foto17.webp" },
    { id: 7,  code: "007", category: "Rosas Pastel",    tags: ["rosas","arreglos","aniversario"],                 name: "Dulce Pastel con Orquídea", description: "Rosas pastel y una orquídea cymbidium envueltas en papel dorado translúcido. Romanticismo en su forma más fina y sofisticada.",                              price: 185000, oldPrice: 222000, image: "assets/foto7.webp"  },
    { id: 2,  code: "002", category: "Caja con Chocolates", tags: ["rosas","arreglos","amor","cumpleaños","chocolates"],  name: "Caja Amor Ferrero",       description: "Caja negra con rosas rojas, hypericum y bombones Ferrero Rocher. Detalle gourmet con lazo rojo perfecto para enamorar.",                                       price: 193750, oldPrice: 232500, image: "assets/foto2.webp"  }
];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'priority'; // 'priority' = orden por defecto de la landing
let LANDING_PRIORITY_TAG = ''; // Se establece por cada landing

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: siempre de menor a mayor precio (asc) ---
function getSortedProducts(priorityTag) {
    // Ignoramos priorityTag: el orden global es por precio ascendente
    return [...products].sort((a, b) => a.price - b.price);
}

// --- FILTRAR PRODUCTOS ---
function getFilteredProducts(filter, priorityTag) {
    if (filter === 'priority' || filter === 'all') {
        return getSortedProducts(priorityTag);
    }
    return products.filter(p =>
        (p.tags && p.tags.includes(filter)) || (p.category && p.category.toLowerCase().includes(filter))
    ).sort((a, b) => a.price - b.price);
}

// --- CREAR TARJETA DE PRODUCTO ---
function createCard(product) {
    const price = formatCOP(product.price);
    const oldPrice = product.oldPrice ? formatCOP(product.oldPrice) : '';
    const div = document.createElement('div');
    div.className = 'product-card-landing';
    div.innerHTML = `
        <div class="product-img-wrap" onclick="openLB('../${product.image}', 'COD_${product.code} - ${product.name}', '${price}')">
            <img src="../${product.image}" alt="${product.name} - Flores a domicilio Bucaramanga" loading="lazy">
            <span class="product-code-badge">COD_${product.code}</span>
            ${oldPrice ? '<span class="product-discount-badge">-20%</span>' : ''}
        </div>
        <div class="product-body">
            <h3>${product.name}</h3>
            <p class="desc">${product.description}</p>
            <div class="product-footer-landing">
                <div class="price-block">
                    ${oldPrice ? `<span class="price-old-landing">Antes: ${oldPrice}</span>` : ''}
                    <span class="label">Ahora</span>
                    <span class="price">${price}</span>
                </div>
                <a href="#" class="btn-order-landing" onclick="orderWA('COD_${product.code}', '${product.name.replace(/'/g, "\\'")}', ${product.price}); return false;">
                    🛒 Pedir
                </a>
            </div>
        </div>
    `;
    return div;
}

// --- RENDER CATÁLOGO ---
function renderCatalog(filter) {
    const grid = document.getElementById('landingProductsGrid');
    const counter = document.getElementById('landingResultsCount');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = getFilteredProducts(filter || currentLandingFilter, LANDING_PRIORITY_TAG);

    if (counter) {
        counter.innerHTML = `Mostrando <strong>${filtered.length}</strong> productos`;
    }

    filtered.forEach(p => grid.appendChild(createCard(p)));
}

// --- FILTRAR ---
function filterLanding(filter, el) {
    currentLandingFilter = filter;
    document.querySelectorAll('.filter-btn-landing').forEach(b => b.classList.remove('active'));
    if (el) el.classList.add('active');
    renderCatalog(filter);
}

// --- WHATSAPP ORDER + GOOGLE ADS CONVERSION ---
function orderWA(code, name, price) {
    // Google Ads conversion tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17698830352/lUbcCLGa3YEcEJDwuvdB',
            'value': price,
            'currency': 'COP'
        });
    }

    // GA4 event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'value': price,
            'product_name': name
        });
    }

    const formattedPrice = formatCOP(price);
    const message = `Hola, me interesa el ramo *${code} - ${name}* con un precio de ${formattedPrice}. ¿Podrían darme más información?`;
    window.open(`https://wa.me/573170518077?text=${encodeURIComponent(message)}`, '_blank');
}

// --- WHATSAPP GENÉRICO + CONVERSIÓN ---
function contactWA(source, customMsg) {
    // Google Ads conversion
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17698830352/lUbcCLGa3YEcEJDwuvdB'
        });
    }

    // GA4 event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'Contact',
            'event_label': source,
            'value': 1
        });
    }

    const msg = customMsg || `Hola, estoy interesado/a en sus arreglos florales. Me podrían dar más información?`;
    window.open(`https://wa.me/573170518077?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- LIGHTBOX ---
function openLB(img, title, price) {
    const lb = document.getElementById('landingLightbox');
    if (!lb) return;
    document.getElementById('lbImg').src = img;
    document.getElementById('lbTitle').textContent = title;
    document.getElementById('lbPrice').textContent = price;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLB() {
    const lb = document.getElementById('landingLightbox');
    if (!lb) return;
    lb.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });

// --- BÚSQUEDA EN CATÁLOGO LANDING ---
function searchLanding(query) {
    const grid = document.getElementById('landingProductsGrid');
    const counter = document.getElementById('landingResultsCount');
    if (!grid) return;

    const norm = (s) => (s || '').toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const q = norm(query);
    const isNumeric = /^\d{1,3}$/.test((query || '').trim());
    const paddedCode = isNumeric ? (query || '').trim().padStart(3, '0') : null;

    const matches = products.filter(p => {
        if (!q) return true;
        if (paddedCode && p.code === paddedCode) return true;
        const haystack = norm([p.name, p.description, p.category, (p.tags || []).join(' '), p.code].join(' '));
        return haystack.includes(q);
    });

    grid.innerHTML = '';
    if (counter) counter.innerHTML = `Mostrando <strong>${matches.length}</strong> productos`;
    matches.forEach(p => grid.appendChild(createCard(p)));
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', function() {
    renderCatalog('priority');
    const searchEl = document.getElementById('landingSearchInput');
    if (searchEl) {
        searchEl.addEventListener('input', e => searchLanding(e.target.value));
    }
});
