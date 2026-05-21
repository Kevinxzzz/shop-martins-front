module.exports = [
"[project]/src/mock/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categorias",
    ()=>categorias,
    "empresa",
    ()=>empresa,
    "produtos",
    ()=>produtos,
    "tokens",
    ()=>tokens,
    "vendedores",
    ()=>vendedores
]);
const empresa = {
    id: 'emp-001',
    nome: 'Shop Martins',
    numero: '5511999999999',
    cpfCnpj: '12.345.678/0001-90',
    linkGrupoDevenda: 'https://chat.whatsapp.com/abc123grupo'
};
const vendedorNomes = [
    {
        nome: 'Rafael Oliveira',
        email: 'rafael@shopmartins.com'
    },
    {
        nome: 'Lucas Santos',
        email: 'lucas@shopmartins.com'
    },
    {
        nome: 'Gabriel Costa',
        email: 'gabriel@shopmartins.com'
    },
    {
        nome: 'Matheus Ferreira',
        email: 'matheus@shopmartins.com'
    },
    {
        nome: 'Pedro Almeida',
        email: 'pedro@shopmartins.com'
    },
    {
        nome: 'Thiago Barbosa',
        email: 'thiago@shopmartins.com'
    },
    {
        nome: 'Bruno Nascimento',
        email: 'bruno@shopmartins.com'
    },
    {
        nome: 'Felipe Rodrigues',
        email: 'felipe@shopmartins.com'
    },
    {
        nome: 'André Gomes',
        email: 'andre@shopmartins.com'
    },
    {
        nome: 'Diego Martins',
        email: 'diego@shopmartins.com'
    }
];
const categorias = [
    {
        id: 'cat-001',
        nome: 'Chuteiras',
        slug: 'chuteiras'
    },
    {
        id: 'cat-002',
        nome: 'Camisas de Time',
        slug: 'camisas-de-time'
    },
    {
        id: 'cat-003',
        nome: 'Shorts Esportivos',
        slug: 'shorts-esportivos'
    },
    {
        id: 'cat-004',
        nome: 'Meias Esportivas',
        slug: 'meias-esportivas'
    },
    {
        id: 'cat-005',
        nome: 'Bolas de Futebol',
        slug: 'bolas-de-futebol'
    },
    {
        id: 'cat-006',
        nome: 'Luvas de Goleiro',
        slug: 'luvas-de-goleiro'
    },
    {
        id: 'cat-007',
        nome: 'Caneleiras',
        slug: 'caneleiras'
    },
    {
        id: 'cat-008',
        nome: 'Bolsas e Mochilas',
        slug: 'bolsas-e-mochilas'
    },
    {
        id: 'cat-009',
        nome: 'Acessórios',
        slug: 'acessorios'
    },
    {
        id: 'cat-010',
        nome: 'Agasalhos',
        slug: 'agasalhos'
    }
];
const avatarSeeds = [
    'Felix',
    'Aneka',
    'Jude',
    'Sasha',
    'Leo',
    'Milo',
    'Luna',
    'Zoe',
    'Max',
    'Aria'
];
const vendedores = vendedorNomes.map((v, i)=>({
        id: `ven-${String(i + 1).padStart(3, '0')}`,
        empresa_id: empresa.id,
        nome: v.nome,
        email: v.email,
        telefone_whatsapp: `5511${String(900000000 + i * 11111111)}`,
        foto_perfil: `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${avatarSeeds[i]}`,
        role: i === 0 ? 'ADMIN' : 'VENDEDOR',
        ativo: true
    }));
const produtoTitulos = {
    'cat-001': [
        'Nike Mercurial Vapor 15 Elite FG',
        'Adidas Predator Edge.1 FG',
        'Puma Future Z 1.4',
        'Nike Phantom GX Elite',
        'Adidas X Speedflow.1 FG',
        'Mizuno Morelia Neo III',
        'Nike Tiempo Legend 10 Elite',
        'Adidas Copa Pure II',
        'New Balance Furon v7+',
        'Puma King Ultimate FG',
        'Nike Mercurial Superfly 9',
        'Adidas Predator Accuracy.1',
        'Asics DS Light X-Fly 5',
        'Umbro Speciali Eternal',
        'Nike Phantom Luna 2 Elite',
        'Joma Propulsion Cup',
        'Diadora Brasil Elite',
        'Lotto Solista 200 FG',
        'Kelme Precision Elite',
        'Under Armour Magnetico Elite'
    ],
    'cat-002': [
        'Camisa Flamengo I 2024',
        'Camisa Brasil Home 2024',
        'Camisa Real Madrid 2024/25',
        'Camisa Barcelona 2024/25',
        'Camisa Manchester City Home',
        'Camisa PSG 2024/25',
        'Camisa Corinthians I 2024',
        'Camisa Palmeiras I 2024',
        'Camisa Liverpool FC 2024/25',
        'Camisa Bayern München Home',
        'Camisa São Paulo FC I 2024',
        'Camisa Juventus 2024/25',
        'Camisa Seleção Argentina 2024',
        'Camisa Boca Juniors 2024',
        'Camisa Inter de Milão Home',
        'Camisa AC Milan 2024/25',
        'Camisa Santos FC I 2024',
        'Camisa Grêmio I 2024',
        'Camisa Atlético MG I 2024',
        'Camisa Vasco I 2024'
    ],
    'cat-003': [
        'Short Nike Dri-FIT Strike',
        'Short Adidas Tiro 23',
        'Short Puma teamGOAL',
        'Short Under Armour Challenger',
        'Bermuda Nike Pro Compression',
        'Short Adidas Squadra 21',
        'Short Puma Liga Core',
        'Short Nike Academy Pro',
        'Bermuda Umbro TWR Diamond',
        'Short Kappa Ryder',
        'Short Asics Silver 5in',
        'Short Mizuno DryAeroFlow',
        'Bermuda New Balance Core Run',
        'Short Reebok CrossFit',
        'Short Fila Training',
        'Short Penalty X',
        'Short Topper Boleiro',
        'Short Kappa Kombat',
        'Short Diadora Equipo',
        'Short Joma Nobel'
    ],
    'cat-004': [
        'Meia Nike Grip Strike',
        'Meia Adidas Speed II',
        'Meia Puma teamFINAL',
        'Meia Under Armour Performance',
        'Meia Nike Classic II',
        'Meia Adidas Milano 23',
        'Meia Trusox 3.0 Mid-Calf',
        'Meia Nike Matchfit Crew',
        'Meia Joma Classic II',
        'Meia Umbro Diamond Top',
        'Pack 3 Meias Nike Everyday',
        'Meia Adidas Cushioned Crew',
        'Meia Stance NBA Crew',
        'Meia Puma Crew Training',
        'Meia Asics Kayano Classic',
        'Meia Mizuno Endura Trail',
        'Meia New Balance Run Flat Knit',
        'Meia Fila Tennis Crew',
        'Meia Penalty Storm VII',
        'Meia Topper Futsal Cano Alto'
    ],
    'cat-005': [
        'Bola Adidas Al Rihla Pro',
        'Bola Nike Flight Premier League',
        'Bola Puma Orbita 1',
        'Bola Adidas UCL Pro',
        'Bola Nike Academy Team',
        'Bola Penalty Bola de Ouro',
        'Bola Mikasa FT5',
        'Bola Select Brillant Super',
        'Bola Molten Vantaggio 5000',
        'Bola Nike Menor X Futsal',
        'Bola Adidas Tiro League',
        'Bola Puma KING ball',
        'Bola Penalty Max 1000',
        'Bola Topper Slick Cup',
        'Bola Nike Pitch',
        'Bola Adidas Starlancer Plus',
        'Bola Kappa Player 20.5',
        'Bola Umbro Neo Swerve',
        'Bola Joma Dali III',
        'Bola Diadora Zlatko'
    ],
    'cat-006': [
        'Luva Adidas Predator Pro',
        'Luva Nike GK Vapor Grip3',
        'Luva Puma Ultra Grip 1',
        'Luva Reusch Attrakt',
        'Luva Uhlsport Speed Contact',
        'Luva Nike GK Match',
        'Luva Adidas Predator Match',
        'Luva Sells Wrap Elite Aqua',
        'Luva Ho Soccer First Evolution',
        'Luva Rinat Xtreme Guard',
        'Luva Adidas X Training',
        'Luva Nike Phantom Elite',
        'Luva Puma Future Z Grip 1',
        'Luva New Balance Nforca Replica',
        'Luva Reusch Pure Contact Gold',
        'Luva T1TAN Spyne',
        'Luva Joma Premier',
        'Luva Penalty Delta Training',
        'Luva Umbro Neo Pro',
        'Luva Kappa GK Pro'
    ],
    'cat-007': [
        'Caneleira Nike Mercurial Lite',
        'Caneleira Adidas Predator SG',
        'Caneleira Puma Ultra Light',
        'Caneleira Under Armour Flex',
        'Caneleira Nike Charge',
        'Caneleira Adidas X SG League',
        'Caneleira Umbro Neo Shield',
        'Caneleira Penalty Delta VII',
        'Caneleira Topper Boleiro Shield',
        'Caneleira Puma King ES 2',
        'Caneleira Nike J Guard',
        'Caneleira Adidas Tiro SG',
        'Caneleira G-Form Pro-S Elite',
        'Caneleira Storelli BodyShield',
        'Caneleira Mitre Aircell Carbon',
        'Caneleira Diadora Equipo Guard',
        'Caneleira Kappa Kombat Pro',
        'Caneleira Joma J-Pro',
        'Caneleira New Balance Dispatch',
        'Caneleira Asics LegGuard Evo'
    ],
    'cat-008': [
        'Mochila Nike Academy Team',
        'Bolsa Adidas Tiro League Duffel',
        'Mochila Puma teamGOAL 23',
        'Bolsa Under Armour Undeniable 5.0',
        'Mochila Nike Brasilia XL',
        'Bolsa Adidas Essentials 3S Duffel',
        'Mochila Puma Plus Pro',
        'Mochila Penalty Matis IX',
        'Bolsa Topper Training III',
        'Mochila Umbro Pro Training',
        'Porta-Chuteira Nike Academy',
        'Bolsa Adidas Tiro SB',
        'Mochila Fila Classic',
        'Mochila Reebok Training Essentials',
        'Bolsa Nike Heritage Crossbody',
        'Mochila Joma Training III',
        'Bolsa Mizuno Team OGI',
        'Mochila Kappa Supino',
        'Porta-Chuteira Adidas Predator',
        'Bolsa Diadora Equipo Gym'
    ],
    'cat-009': [
        'Faixa Capitão Nike',
        'Apito Profissional Fox 40',
        'Garrafa Nike Hyperfuel',
        'Bomba de Ar Adidas DFL',
        'Fita Kinesio Tmax',
        'Munhequeira Nike Swoosh',
        'Testeira Adidas Alphaskin 2.0',
        'Cone de Treinamento Kit 20un',
        'Escada de Agilidade Pro',
        'Rede de Gol Oficial 7m',
        'Braçadeira GPS Playertek',
        'Colete de Treinamento Kit 10un',
        'Headband Under Armour',
        'Protetor Bucal Shock Doctor',
        'Squeeze 1L Speedo',
        'Palmilha Nike Zoom Air',
        'Tornozeleira Elástica',
        'Joelheira de Vôlei Asics',
        'Bola Medicinal 3kg',
        'Mini Gol Dobrável 120cm'
    ],
    'cat-010': [
        'Agasalho Nike Dri-FIT Academy',
        'Agasalho Adidas Tiro 23 Training',
        'Jaqueta Puma teamRISE',
        'Agasalho Under Armour Sportstyle',
        'Jaqueta Nike Therma-FIT Repel',
        'Agasalho Adidas Condivo 22',
        'Jaqueta Puma teamCUP',
        'Agasalho Penalty Matis',
        'Jaqueta Corta-Vento Nike Run',
        'Blusa Térmica Adidas TechFit',
        'Jaqueta Topper Boleiro Classic',
        'Agasalho Fila Sport',
        'Moletom Nike Club Fleece',
        'Jaqueta Under Armour ColdGear',
        'Agasalho Kappa Ephesto',
        'Jaqueta Reebok Training Supply',
        'Agasalho Umbro Pro Training',
        'Jaqueta Mizuno BT Shield',
        'Moletom Puma ESS Big Logo',
        'Agasalho Joma Championship VI'
    ]
};
const descricoes = [
    'Produto premium com tecnologia de ponta para máxima performance em campo. Material de alta durabilidade com design moderno e inovador. Ideal para atletas que buscam o melhor desempenho.',
    'Desenvolvido com materiais sustentáveis de alta qualidade. Conforto excepcional com ajuste anatômico perfeito. Tecnologia exclusiva para melhor desempenho esportivo.',
    'Edição especial com design exclusivo e acabamento premium. Tecido respirável com tecnologia de secagem rápida. Excelente relação custo-benefício para atletas exigentes.',
    'Performance profissional com conforto casual. Tecnologia de absorção de impacto e estabilidade aprimorada. Perfeito para treinos intensos e jogos competitivos.',
    'Produto licenciado oficial com todas as especificações técnicas. Fabricado com os mais altos padrões de qualidade. Garante conforto, estilo e funcionalidade.'
];
function generateMidias(produtoId) {
    const baseUrl = 'https://picsum.photos/seed';
    const midias = [];
    for(let i = 1; i <= 3; i++){
        midias.push({
            id: `mid-${produtoId}-${i}`,
            url_arquivo: `${baseUrl}/${produtoId}-${i}/600/600`,
            tipo: 'imagem',
            ordem: i,
            produto_id: produtoId
        });
    }
    midias.push({
        id: `mid-${produtoId}-vid`,
        url_arquivo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        tipo: 'video',
        ordem: 4,
        produto_id: produtoId
    });
    return midias;
}
function gerarPreco() {
    const precos = [
        59.90,
        79.90,
        99.90,
        129.90,
        149.90,
        179.90,
        199.90,
        249.90,
        299.90,
        349.90,
        399.90,
        449.90,
        499.90,
        599.90,
        799.90,
        999.90,
        1299.90
    ];
    return precos[Math.floor(Math.random() * precos.length)];
}
const produtos = [];
vendedores.forEach((vendedor, vIdx)=>{
    const catKeys = Object.keys(produtoTitulos);
    for(let p = 0; p < 20; p++){
        const catId = catKeys[(vIdx + p) % catKeys.length];
        const titulos = produtoTitulos[catId];
        const titulo = titulos[p % titulos.length];
        const prodId = `prod-${String(vIdx + 1).padStart(2, '0')}-${String(p + 1).padStart(2, '0')}`;
        const categoria = categorias.find((c)=>c.id === catId);
        produtos.push({
            id: prodId,
            titulo,
            descricao: descricoes[p % descricoes.length],
            preco: gerarPreco(),
            categoria_id: catId,
            vendedor_id: vendedor.id,
            empresa_id: empresa.id,
            countViews: Math.floor(Math.random() * 5000) + 100,
            midias: generateMidias(prodId),
            categoria,
            vendedor,
            createdAt: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString()
        });
    }
});
const tokens = [
    {
        id: 'tok-001',
        token: 'sk_live_a1b2c3d4e5f6g7h8i9j0',
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        ativo: true
    },
    {
        id: 'tok-002',
        token: 'sk_live_k1l2m3n4o5p6q7r8s9t0',
        createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
        expiresAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        ativo: false
    }
];
}),
"[project]/src/mock/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateToken",
    ()=>generateToken,
    "getAdminStats",
    ()=>getAdminStats,
    "getCategories",
    ()=>getCategories,
    "getDashboardStats",
    ()=>getDashboardStats,
    "getEmpresa",
    ()=>getEmpresa,
    "getProductById",
    ()=>getProductById,
    "getProducts",
    ()=>getProducts,
    "getRelatedProducts",
    ()=>getRelatedProducts,
    "getTokens",
    ()=>getTokens,
    "getVendorById",
    ()=>getVendorById,
    "getVendors",
    ()=>getVendors,
    "searchGlobal",
    ()=>searchGlobal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/data.ts [app-ssr] (ecmascript)");
;
// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Mock API Service
// ═══════════════════════════════════════════════════════════════
const delay = (ms = 300)=>new Promise((r)=>setTimeout(r, ms));
async function getProducts(filters) {
    await delay(350);
    let filtered = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["produtos"]
    ];
    if (filters?.categoria) {
        filtered = filtered.filter((p)=>p.categoria_id === filters.categoria);
    }
    if (filters?.precoMin !== undefined) {
        filtered = filtered.filter((p)=>p.preco >= filters.precoMin);
    }
    if (filters?.precoMax !== undefined) {
        filtered = filtered.filter((p)=>p.preco <= filters.precoMax);
    }
    if (filters?.search) {
        const q = filters.search.toLowerCase();
        filtered = filtered.filter((p)=>p.titulo.toLowerCase().includes(q) || p.descricao.toLowerCase().includes(q));
    }
    if (filters?.vendedorId) {
        filtered = filtered.filter((p)=>p.vendedor_id === filters.vendedorId);
    }
    const total = filtered.length;
    const page = filters?.page || 1;
    const limit = filters?.limit || 20;
    const start = (page - 1) * limit;
    const paginated = filtered.slice(start, start + limit);
    return {
        products: paginated,
        total
    };
}
async function getProductById(id) {
    await delay(250);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["produtos"].find((p)=>p.id === id) || null;
}
async function getRelatedProducts(categoryId, excludeId) {
    await delay(200);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>p.categoria_id === categoryId && p.id !== excludeId).slice(0, 8);
}
async function getVendors() {
    await delay(300);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vendedores"].filter((v)=>v.role === 'VENDEDOR' || v.role === 'ADMIN');
}
async function getVendorById(id) {
    await delay(200);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vendedores"].find((v)=>v.id === id) || null;
}
async function getCategories() {
    await delay(150);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categorias"];
}
async function searchGlobal(query) {
    await delay(300);
    const q = query.toLowerCase();
    return {
        products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>p.titulo.toLowerCase().includes(q)).slice(0, 10),
        vendors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vendedores"].filter((v)=>v.nome.toLowerCase().includes(q))
    };
}
async function getDashboardStats(userId) {
    await delay(400);
    const userProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>p.vendedor_id === userId);
    const cats = [
        ...new Set(userProducts.map((p)=>p.categoria_id))
    ];
    return {
        totalProdutos: userProducts.length,
        totalViews: userProducts.reduce((sum, p)=>sum + p.countViews, 0),
        totalCategorias: cats.length,
        produtosPorCategoria: cats.map((catId)=>({
                categoria: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categorias"].find((c)=>c.id === catId)?.nome || '',
                total: userProducts.filter((p)=>p.categoria_id === catId).length
            })),
        viewsPorDia: Array.from({
            length: 7
        }, (_, i)=>({
                dia: [
                    'Seg',
                    'Ter',
                    'Qua',
                    'Qui',
                    'Sex',
                    'Sáb',
                    'Dom'
                ][i],
                views: Math.floor(Math.random() * 500) + 50
            }))
    };
}
async function getAdminStats(empresaId) {
    await delay(500);
    const empProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>p.empresa_id === empresaId);
    const cats = [
        ...new Set(empProducts.map((p)=>p.categoria_id))
    ];
    const activeVendors = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vendedores"].filter((v)=>v.ativo);
    return {
        totalProdutos: empProducts.length,
        totalViews: empProducts.reduce((sum, p)=>sum + p.countViews, 0),
        totalCategorias: cats.length,
        totalVendedores: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vendedores"].length,
        totalUsuariosAtivos: activeVendors.length,
        produtosPorCategoria: cats.map((catId)=>({
                categoria: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categorias"].find((c)=>c.id === catId)?.nome || '',
                total: empProducts.filter((p)=>p.categoria_id === catId).length
            })),
        viewsPorDia: Array.from({
            length: 7
        }, (_, i)=>({
                dia: [
                    'Seg',
                    'Ter',
                    'Qua',
                    'Qui',
                    'Sex',
                    'Sáb',
                    'Dom'
                ][i],
                views: Math.floor(Math.random() * 2000) + 200
            }))
    };
}
async function getTokens() {
    await delay(200);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"];
}
async function generateToken() {
    await delay(400);
    const newToken = {
        id: `tok-${Date.now()}`,
        token: `sk_live_${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        ativo: true
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].push(newToken);
    return newToken;
}
async function getEmpresa() {
    await delay(150);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["empresa"];
}
}),
"[project]/src/components/Navbar/Navbar.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Navbar-module-scss-module__N8yoJa__actions",
  "active": "Navbar-module-scss-module__N8yoJa__active",
  "centerNav": "Navbar-module-scss-module__N8yoJa__centerNav",
  "dashboardBtn": "Navbar-module-scss-module__N8yoJa__dashboardBtn",
  "drawer": "Navbar-module-scss-module__N8yoJa__drawer",
  "drawerClose": "Navbar-module-scss-module__N8yoJa__drawerClose",
  "drawerDashboard": "Navbar-module-scss-module__N8yoJa__drawerDashboard",
  "drawerHeader": "Navbar-module-scss-module__N8yoJa__drawerHeader",
  "drawerLabel": "Navbar-module-scss-module__N8yoJa__drawerLabel",
  "drawerLink": "Navbar-module-scss-module__N8yoJa__drawerLink",
  "drawerLinks": "Navbar-module-scss-module__N8yoJa__drawerLinks",
  "drawerOverlay": "Navbar-module-scss-module__N8yoJa__drawerOverlay",
  "drawerSearch": "Navbar-module-scss-module__N8yoJa__drawerSearch",
  "drawerSearchForm": "Navbar-module-scss-module__N8yoJa__drawerSearchForm",
  "drawerSearchIcon": "Navbar-module-scss-module__N8yoJa__drawerSearchIcon",
  "drawerSection": "Navbar-module-scss-module__N8yoJa__drawerSection",
  "dropdownItem": "Navbar-module-scss-module__N8yoJa__dropdownItem",
  "dropdownMenu": "Navbar-module-scss-module__N8yoJa__dropdownMenu",
  "fade-in": "Navbar-module-scss-module__N8yoJa__fade-in",
  "fade-in-up": "Navbar-module-scss-module__N8yoJa__fade-in-up",
  "iconBtn": "Navbar-module-scss-module__N8yoJa__iconBtn",
  "inner": "Navbar-module-scss-module__N8yoJa__inner",
  "logo": "Navbar-module-scss-module__N8yoJa__logo",
  "logoMark": "Navbar-module-scss-module__N8yoJa__logoMark",
  "logoText": "Navbar-module-scss-module__N8yoJa__logoText",
  "menuBtn": "Navbar-module-scss-module__N8yoJa__menuBtn",
  "navDropdown": "Navbar-module-scss-module__N8yoJa__navDropdown",
  "navDropdownIcon": "Navbar-module-scss-module__N8yoJa__navDropdownIcon",
  "navLink": "Navbar-module-scss-module__N8yoJa__navLink",
  "navbar": "Navbar-module-scss-module__N8yoJa__navbar",
  "searchBar": "Navbar-module-scss-module__N8yoJa__searchBar",
  "searchClose": "Navbar-module-scss-module__N8yoJa__searchClose",
  "searchForm": "Navbar-module-scss-module__N8yoJa__searchForm",
  "searchIcon": "Navbar-module-scss-module__N8yoJa__searchIcon",
  "searchInput": "Navbar-module-scss-module__N8yoJa__searchInput",
  "slide-in-right": "Navbar-module-scss-module__N8yoJa__slide-in-right",
});
}),
"[project]/src/components/Navbar/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Navbar/Navbar.module.scss [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
;
const navLinks = [
    {
        href: '/',
        label: 'Início',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        href: '/vendedores',
        label: 'Vendedores',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    }
];
function Navbar() {
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [drawerOpen, setDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategories"])().then(setCategories);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setDrawerOpen(false);
    }, [
        pathname
    ]);
    const handleSearch = (e)=>{
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchOpen(false);
            setDrawerOpen(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navbar,
                role: "navigation",
                "aria-label": "Navegação principal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                                "aria-label": "Martins Vendas - Página inicial",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoMark,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            size: 18,
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/index.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoText,
                                        children: [
                                            "Martins",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Vendas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar/index.tsx",
                                                lineNumber: 53,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/index.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerNav,
                                children: [
                                    navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink} ${pathname === link.href ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                            children: link.label
                                        }, link.href, false, {
                                            fileName: "[project]/src/components/Navbar/index.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navDropdown,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink,
                                                children: [
                                                    "Categorias",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 14,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navDropdownIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar/index.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownMenu,
                                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/?categoria=${cat.id}`,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                        children: cat.nome
                                                    }, cat.id, false, {
                                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar/index.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/index.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBtn,
                                        onClick: ()=>setSearchOpen(!searchOpen),
                                        "aria-label": "Buscar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/index.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBtn,
                                        onClick: toggleTheme,
                                        "aria-label": theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro',
                                        children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/index.tsx",
                                            lineNumber: 102,
                                            columnNumber: 36
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/index.tsx",
                                            lineNumber: 102,
                                            columnNumber: 57
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dashboardBtn,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar/index.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            "Dashboard"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuBtn,
                                        onClick: ()=>setDrawerOpen(true),
                                        "aria-label": "Abrir menu",
                                        "aria-expanded": drawerOpen,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/index.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/index.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar/index.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    searchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchBar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchForm,
                            onSubmit: handleSearch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 18,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchIcon,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/index.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInput,
                                    placeholder: "Buscar produtos, marcas, categorias...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    "aria-label": "Buscar produtos",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/index.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchClose,
                                    onClick: ()=>setSearchOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/index.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar/index.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar/index.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar/index.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            drawerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerOverlay,
                        onClick: ()=>setDrawerOpen(false),
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar/index.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawer,
                        role: "dialog",
                        "aria-label": "Menu de navegação",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoText,
                                        children: [
                                            "Martins",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Vendas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar/index.tsx",
                                                lineNumber: 150,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerClose,
                                        onClick: ()=>setDrawerOpen(false),
                                        "aria-label": "Fechar menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/index.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/index.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSearch,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerSearchForm,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerSearchIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "search",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerSearch,
                                        placeholder: "Buscar produtos...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/index.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerLabel,
                                        children: "Navegação"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerLinks,
                                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerLink,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this),
                                                    link.label
                                                ]
                                            }, link.href, true, {
                                                fileName: "[project]/src/components/Navbar/index.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/index.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerLabel,
                                        children: "Categorias"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerLinks,
                                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/?categoria=${cat.id}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerLink,
                                                children: cat.nome
                                            }, cat.id, false, {
                                                fileName: "[project]/src/components/Navbar/index.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/index.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerDashboard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/index.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    "Acessar Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/index.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar/index.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_0_28nv.._.js.map