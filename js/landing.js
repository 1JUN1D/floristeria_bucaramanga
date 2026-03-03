// ===================================
// LANDING PAGE JS - Larosset Bucaramanga
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    // Rosas en Caja
    { id: 1, code: "001", category: "Rosas en Caja", tags: ["rosas", "arreglos", "cumpleaños"], name: "Amor en Caja", description: "Hermosa caja decorativa con rosas frescas y globo de corazón. Diseño romántico perfecto para sorprender y expresar amor verdadero.", price: 320000, image: "assets/flores_bucaramanga_1.webp" },
    { id: 2, code: "002", category: "Rosas", tags: ["rosas"], name: "Elegancia Blanca", description: "Ramo sofisticado de rosas con envoltorio blanco elegante. Transmite pureza y amor sincero en presentación atemporal.", price: 176000, image: "assets/flores_bucaramanga_2.webp" },
    { id: 9, code: "009", category: "Rosas en Caja", tags: ["rosas", "arreglos"], name: "Luz en Caja", description: "Caja elegante con rosas amarillas frescas radiantes. Transmite amistad, gratitud y alegría en presentación sofisticada.", price: 340000, image: "assets/flores_bucaramanga_9.webp" },
    { id: 10, code: "010", category: "Rosas en Caja", tags: ["rosas", "arreglos"], name: "Esencia Dorada", description: "Caja decorativa con rosas amarillas que irradian energía positiva. Perfecto para expresar cariño sincero y buenos deseos.", price: 260000, image: "assets/flores_bucaramanga_10.webp" },
    { id: 46, code: "046", category: "Rosas en Caja", tags: ["rosas", "arreglos", "cumpleaños"], name: "Corazón Premium", description: "Caja de rosas rosadas y blancas en forma de corazón. Diseño sofisticado que simboliza amor profundo y sincero.", price: 500000, image: "assets/flores_bucaramanga_46.webp" },

    // Rosas + Chocolates / Fresas
    { id: 3, code: "003", category: "Rosas + Chocolates", tags: ["rosas", "arreglos", "cumpleaños"], name: "Dulzura Dorada", description: "Arreglo exclusivo con rosas amarillas y rosadas acompañadas de chocolates selectos. La combinación perfecta entre belleza y sabor.", price: 600000, image: "assets/flores_bucaramanga_3.webp" },
    { id: 4, code: "004", category: "Rosas + Fresas", tags: ["rosas", "arreglos", "cumpleaños"], name: "Tentación Dorada", description: "Rosas amarillas frescas con fresas cubiertas de chocolate. Diseño gourmet que fusiona romance con sabor exquisito.", price: 350000, image: "assets/flores_bucaramanga_4.webp" },
    { id: 12, code: "012", category: "Rosas + Fresas", tags: ["rosas", "arreglos", "cumpleaños"], name: "Pasión Gourmet", description: "Caja de rosas rojas con fresas cubiertas de chocolate. La combinación perfecta entre romance intenso y sabor exquisito.", price: 340000, image: "assets/flores_bucaramanga_12.webp" },
    { id: 20, code: "020", category: "Rosas + Peluche", tags: ["rosas", "arreglos", "cumpleaños"], name: "Ternura Dulce", description: "Ramo de rosas rosadas con chocolates selectos y peluche. Combina romance, dulzura y ternura en regalo completo.", price: 360000, image: "assets/flores_bucaramanga_20.webp" },
    { id: 22, code: "022", category: "Rosas + Chocolates", tags: ["rosas", "arreglos"], name: "Energía Dulce", description: "Rosas naranjas con chocolates en base circular. Transmite vitalidad, alegría y sabor en combinación vibrante.", price: 260000, image: "assets/flores_bucaramanga_22.webp" },
    { id: 26, code: "026", category: "Rosas + Fresas", tags: ["rosas", "arreglos", "cumpleaños"], name: "Corazón Gourmet", description: "Ramo de rosas blancas y rosadas con fresas cubiertas de chocolate en forma de corazón. Romance y sabor unidos.", price: 370000, image: "assets/flores_bucaramanga_26.webp" },

    // Flores Mixtas
    { id: 5, code: "005", category: "Flores Mixtas", tags: ["girasoles", "arreglos"], name: "Jardín Solar", description: "Arreglo variado con girasol protagonista y flores complementarias frescas. Transmite alegría, luz y buenos deseos.", price: 300000, image: "assets/flores_bucaramanga_5.webp" },
    { id: 21, code: "021", category: "Flores Mixtas", tags: ["arreglos"], name: "Contraste Elegante", description: "Rosas rojas y claveles blancos en base circular sofisticada. Diseño que fusiona pasión con pureza.", price: 600000, image: "assets/flores_bucaramanga_21.webp" },
    { id: 23, code: "023", category: "Flores Variadas", tags: ["arreglos", "cumpleaños"], name: "Jardín Encantado", description: "Ramo variado con flores frescas en combinación armoniosa. Transmite alegría natural y buenos deseos.", price: 470000, image: "assets/flores_bucaramanga_23.webp" },
    { id: 24, code: "024", category: "Flores en Jarrón", tags: ["arreglos"], name: "Elegancia en Cristal", description: "Ramo variado en jarrón elegante incluido. Perfecto para decorar espacios con belleza natural.", price: 380000, image: "assets/flores_bucaramanga_24.webp" },
    { id: 33, code: "033", category: "Flores Mixtas", tags: ["arreglos", "cumpleaños"], name: "Jardín Rosa", description: "Ramo de flores rosadas variadas con rosas frescas. Transmite ternura y amor delicado.", price: 180000, image: "assets/flores_bucaramanga_33.webp" },
    { id: 34, code: "034", category: "Flores Variadas", tags: ["arreglos"], name: "Primavera Natural", description: "Ramo variado con flores frescas en combinación primaveral. Transmite alegría renovada y buenos deseos.", price: 360000, image: "assets/flores_bucaramanga_34.webp" },
    { id: 35, code: "035", category: "Flores Variadas", tags: ["arreglos"], name: "Pureza Mixta", description: "Ramo de flores blancas y rosadas en armonía delicada. Combina pureza con ternura.", price: 300000, image: "assets/flores_bucaramanga_35.webp" },
    { id: 40, code: "040", category: "Flores Variadas", tags: ["arreglos"], name: "Campo Alegre", description: "Ramo variado con flores frescas en combinación campestre. Transmite alegría natural y espontánea.", price: 170000, image: "assets/flores_bucaramanga_40.webp" },
    { id: 43, code: "043", category: "Flores Variadas", tags: ["arreglos"], name: "Serenidad Natural", description: "Ramo variado de flores lilas y blancas frescas. Transmite paz serena y amor tranquilo.", price: 160000, image: "assets/flores_bucaramanga_43.webp" },
    { id: 44, code: "044", category: "Flores Variadas", tags: ["arreglos", "cumpleaños"], name: "Frescura Primaveral", description: "Ramo variado con flores frescas en tonos primaverales. Transmite renovación y alegría natural.", price: 300000, image: "assets/flores_bucaramanga_44.webp" },

    // Premium / Arreglos en Base
    { id: 6, code: "006", category: "Arreglos Premium", tags: ["arreglos", "rosas"], name: "Abundancia Natural", description: "Ramo grande espectacular combinado con frutas frescas selectas. Diseño premium de máximo impacto visual.", price: 720000, image: "assets/flores_bucaramanga_6.webp" },
    { id: 7, code: "007", category: "Lirios", tags: ["lirios", "arreglos"], name: "Pureza Majestuosa", description: "Ramo abundante de lirios frescos aromáticos. Transmite elegancia, pureza y admiración profunda.", price: 700000, image: "assets/flores_bucaramanga_7.webp" },
    { id: 8, code: "008", category: "Rosas en Base", tags: ["rosas", "arreglos"], name: "Corona Imperial", description: "Ramo grande de rosas en base circular elegante. Diseño majestuoso que simboliza amor eterno.", price: 760000, image: "assets/flores_bucaramanga_8.webp" },
    { id: 11, code: "011", category: "Arreglos Premium", tags: ["rosas", "arreglos"], name: "Círculo de Amor", description: "Arreglo circular espectacular de rosas con hojas verdes frescas. Simboliza amor eterno y perfección natural.", price: 1100000, image: "assets/flores_bucaramanga_11.webp" },
    { id: 13, code: "013", category: "Arreglos en Base", tags: ["rosas", "arreglos"], name: "Dualidad Perfecta", description: "Rosas blancas y rojas en base circular elegante. Combina pureza con pasión en armonía perfecta.", price: 300000, image: "assets/flores_bucaramanga_13.webp" },
    { id: 14, code: "014", category: "Arreglos en Base", tags: ["rosas", "arreglos"], name: "Fusión Vibrante", description: "Rosas fucsia y rosadas en base circular decorativa. Diseño alegre que transmite amor juvenil.", price: 270000, image: "assets/flores_bucaramanga_14.webp" },
    { id: 45, code: "045", category: "Arreglos Premium", tags: ["rosas", "lirios", "arreglos"], name: "Corazón Monumental", description: "Ramo gigante en forma de corazón con base de rosas blancas, rosadas y lirios. El arreglo más espectacular.", price: 3200000, image: "assets/flores_bucaramanga_45.webp" },

    // Especiales
    { id: 15, code: "015", category: "Rosas + Champagne", tags: ["rosas", "arreglos", "cumpleaños"], name: "Celebración Rosa", description: "Rosas rosadas en caja elegante con champagne. Diseño sofisticado perfecto para celebrar momentos especiales.", price: 360000, image: "assets/flores_bucaramanga_15.webp" },
    { id: 25, code: "025", category: "Arreglos en Canasta", tags: ["rosas", "arreglos"], name: "Canasta Romántica", description: "Ramo de rosas con flores complementarias en canasta decorativa. Diseño campestre que transmite amor natural.", price: 600000, image: "assets/flores_bucaramanga_25.webp" },
    { id: 19, code: "019", category: "Regalo Espectacular", tags: ["girasoles", "arreglos", "cumpleaños"], name: "Grandeza Absoluta", description: "Ramo de girasoles + corazones rojos en forma de corazón + peluche tamaño persona. El regalo más espectacular.", price: 1744000, image: "assets/flores_bucaramanga_19.webp" },

    // Rosas Especiales / Ramos
    { id: 16, code: "016", category: "Rosas + Lirios", tags: ["rosas", "lirios"], name: "Armonía Celestial", description: "Rosas blancas combinadas con lirios aromáticos. Transmite pureza suprema y elegancia natural.", price: 400000, image: "assets/flores_bucaramanga_16.webp" },
    { id: 17, code: "017", category: "Ramos de Rosas", tags: ["rosas"], name: "Clásico Eterno", description: "Ramo tradicional de rosas frescas envuelto con elegancia. Belleza atemporal que nunca falla.", price: 400000, image: "assets/flores_bucaramanga_17.webp" },
    { id: 18, code: "018", category: "Rosas Especiales", tags: ["rosas"], name: "Cielo y Nube", description: "Ramo único de rosas blancas y azules. Combinación especial que transmite serenidad celestial.", price: 310000, image: "assets/flores_bucaramanga_18.webp" },
    { id: 41, code: "041", category: "Rosas Especiales", tags: ["rosas"], name: "Capullo Rosado", description: "Ramo de rosas blancas con puntas rosadas cerradas. Belleza delicada que simboliza amor floreciente.", price: 370000, image: "assets/flores_bucaramanga_41.webp" },
    { id: 39, code: "039", category: "Rosas Premium", tags: ["rosas", "arreglos"], name: "Sofisticación Rosa", description: "Ramo premium de rosas rosadas y blancas frescas. Diseño sofisticado que transmite amor refinado.", price: 600000, image: "assets/flores_bucaramanga_39.webp" },

    // Girasoles
    { id: 36, code: "036", category: "Girasoles", tags: ["girasoles"], name: "Luz Compacta", description: "Ramo de girasoles radiantes que iluminan cualquier espacio. Transmite alegría, esperanza y energía positiva.", price: 240000, image: "assets/flores_bucaramanga_36.webp" },
    { id: 37, code: "037", category: "Girasoles", tags: ["girasoles"], name: "Sol Radiante", description: "Ramo abundante de girasoles frescos luminosos. Diseño que desborda alegría y buenos deseos.", price: 300000, image: "assets/flores_bucaramanga_37.webp" },
    { id: 42, code: "042", category: "Girasoles Mixtos", tags: ["girasoles", "arreglos"], name: "Luz Mixta", description: "Ramo de girasoles con flores complementarias variadas. Transmite alegría luminosa y belleza natural diversa.", price: 180000, image: "assets/flores_bucaramanga_42.webp" },

    // Claveles
    { id: 38, code: "038", category: "Claveles", tags: ["arreglos"], name: "Tradición Eterna", description: "Ramo clásico de claveles frescos aromáticos. Belleza atemporal que representa amor duradero.", price: 250000, image: "assets/flores_bucaramanga_38.webp" },

    // Arreglos Fúnebres
    { id: 27, code: "027", category: "Arreglos Fúnebres", tags: ["funebres", "arreglos"], name: "Tributo Eterno", description: "Arreglo fúnebre elegante con flores blancas seleccionadas. Diseño respetuoso que honra la memoria.", price: 720000, image: "assets/flores_bucaramanga_27.webp" },
    { id: 28, code: "028", category: "Arreglos Fúnebres", tags: ["funebres", "arreglos"], name: "Memoria Sagrada", description: "Arreglo fúnebre sofisticado con flores frescas en tonos serenos. Transmite respeto profundo.", price: 620000, image: "assets/flores_bucaramanga_28.webp" },
    { id: 29, code: "029", category: "Arreglos Fúnebres", tags: ["funebres", "arreglos"], name: "Paz Eterna", description: "Arreglo fúnebre delicado con flores blancas puras. Simboliza descanso eterno y amor que trasciende.", price: 350000, image: "assets/flores_bucaramanga_29.webp" },
    { id: 30, code: "030", category: "Arreglos Fúnebres", tags: ["funebres", "arreglos"], name: "Recuerdo Eterno", description: "Arreglo fúnebre majestuoso con flores premium seleccionadas. Transmite honor supremo y respeto profundo.", price: 760000, image: "assets/flores_bucaramanga_30.webp" },
    { id: 31, code: "031", category: "Arreglos Fúnebres", tags: ["funebres", "arreglos"], name: "Amor Perpetuo", description: "Arreglo fúnebre elegante con flores en tonos suaves. Transmite amor que permanece más allá del tiempo.", price: 600000, image: "assets/flores_bucaramanga_31.webp" },
    { id: 32, code: "032", category: "Arreglos Fúnebres", tags: ["funebres", "arreglos"], name: "Serenidad Final", description: "Arreglo fúnebre sofisticado con flores blancas y verdes. Transmite paz profunda y descanso eterno.", price: 700000, image: "assets/flores_bucaramanga_32.webp" }
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

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.forEach(p => {
        if (p.tags && p.tags.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    // Dentro de cada grupo, ordenar por precio ascendente
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// --- FILTRAR PRODUCTOS ---
function getFilteredProducts(filter, priorityTag) {
    if (filter === 'priority' || filter === 'all') {
        return getSortedProducts(priorityTag);
    }
    return products.filter(p => 
        p.tags && p.tags.includes(filter) || p.category.toLowerCase().includes(filter)
    ).sort((a, b) => a.price - b.price);
}

// --- CREAR TARJETA DE PRODUCTO ---
function createCard(product) {
    const price = formatCOP(product.price);
    const div = document.createElement('div');
    div.className = 'product-card-landing';
    div.innerHTML = `
        <div class="product-img-wrap" onclick="openLB('../${product.image}', 'COD_${product.code} - ${product.name}', '${price}')">
            <img src="../${product.image}" alt="${product.name} - Flores a domicilio Bucaramanga" loading="lazy">
            <span class="product-code-badge">COD_${product.code}</span>
        </div>
        <div class="product-body">
            <h3>${product.name}</h3>
            <p class="desc">${product.description}</p>
            <div class="product-footer-landing">
                <div class="price-block">
                    <span class="label">Precio</span>
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
    window.open(`https://wa.me/573171984779?text=${encodeURIComponent(message)}`, '_blank');
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
    window.open(`https://wa.me/573171984779?text=${encodeURIComponent(msg)}`, '_blank');
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

// --- INIT ---
document.addEventListener('DOMContentLoaded', function() {
    renderCatalog('priority');
});
