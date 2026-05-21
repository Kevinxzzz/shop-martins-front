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
        nome: 'Neymar',
        slug: 'neymar'
    },
    {
        id: 'cat-002',
        nome: 'over 3200',
        slug: 'over-3200'
    },
    {
        id: 'cat-003',
        nome: 'messi blitz',
        slug: 'messi-blitz'
    },
    {
        id: 'cat-004',
        nome: 'Gullit',
        slug: 'gullit'
    },
    {
        id: 'cat-005',
        nome: 'Hazzard',
        slug: 'hazzard'
    },
    {
        id: 'cat-006',
        nome: 'Cruyff',
        slug: 'cruyff'
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
        'Neymar Jr. Al-Hilal Home 2024',
        'Chuteira Puma Future Neymar',
        'Boneco Neymar Jr Articulado',
        'Camisa Seleção Brasil Neymar 10',
        'Neymar Golden Edition Card',
        'Livro Neymar: O Caos Perfeito',
        'Camisa PSG Neymar Classic',
        'Neymar Santos FC 2011 Retro',
        'Meião Neymar Skills',
        'Bola de Futebol Neymar Grafite',
        'Jaqueta Corta-Vento Neymar',
        'Mochila Neymar JR',
        'Chuteira Futsal Neymar Future',
        'Boné NJR Black Edition',
        'Neymar World Cup 2022 Match Worn',
        'Poster Neymar Jr XL',
        'Caneca Neymar Brasil',
        'Pulseira Neymar Force',
        'Agasalho Neymar Puma',
        'Chuteira Campo Neymar Jr'
    ],
    'cat-002': [
        'Conta eFootball Over 3200 Força',
        'Pack Jogadores eFootball Premium',
        'Conta Full Epic over 3200',
        'Top Global eFootball Account',
        'Conta eFootball 2024 End Game',
        'Account eFootball Max Power 3200',
        'Time eFootball 3200+ Força',
        'Conta eFootball Legends Only',
        'eFootball Account 3200+ Strength',
        'Conta eFootball 2024 Full Legends',
        'Pack eFootball coins 3200',
        'Conta eFootball Meta Teams',
        'Account eFootball 3200 Squad',
        'Conta eFootball Full Epic/BT',
        'Time eFootball 3200+ Power',
        'Conta eFootball 2024 Pro',
        'eFootball Account 3200 Skill',
        'Conta eFootball End Game 2024',
        'Time eFootball 3200 Force',
        'Account eFootball 3200+'
    ],
    'cat-003': [
        'Lionel Messi Blitz Curler eFootball',
        'Messi 2022 Argentina Edition',
        'Chuteira Adidas Messi Inter Miami',
        'Camisa Messi Argentina 2024',
        'Messi Blitz Curler Max Level',
        'Boneco Messi Inter Miami',
        'Camisa Barcelona Messi 10 Retro',
        'Messi Golden Ball Edition',
        'Bola Messi L10 Premium',
        'Jaqueta Messi Adidas',
        'Mochila Messi Logo',
        'Boné Messi Inter Miami',
        'Messi Argentina World Cup 10',
        'Livro Messi: O Rei',
        'Lionel Messi eFootball Pack',
        'Poster Messi GOAT XL',
        'Caneca Messi Argentina',
        'Pulseira Messi Force',
        'Agasalho Messi Adidas',
        'Messi Skills Ball'
    ],
    'cat-004': [
        'Ruud Gullit eFootball Epic Card',
        'Camisa Milan Gullit Retro',
        'Gullit Holland 1988 Jersey',
        'Gullit AC Milan 1990 Kit',
        'Ruud Gullit Max Level eFootball',
        'Gullit Legend Card eFootball',
        'Action Figure Gullit Milan',
        'Poster Gullit Legend',
        'Camisa Holanda Gullit 10',
        'Livro Ruud Gullit: My Life',
        'Gullit eFootball Epic/Big Time',
        'Gullit Milan Legend Edition',
        'Gullit Holland Classic Kit',
        'Gullit AC Milan Home 89',
        'Ruud Gullit eFootball Pro',
        'Action Figure Gullit Holland',
        'Caneca Gullit Milan',
        'Pulseira Gullit Legend',
        'Agasalho Gullit Retro',
        'Gullit Skills Pack'
    ],
    'cat-005': [
        'Eden Hazard Real Madrid Home',
        'Camisa Chelsea Hazard 10 Retro',
        'Hazard Seleção Bélgica 2022',
        'Chuteira Nike Hazard Edition',
        'Eden Hazard Chelsea 2012 Kit',
        'Hazard Real Madrid Away 20/21',
        'Action Figure Hazard Chelsea',
        'Poster Hazard Legend',
        'Camisa Bélgica Hazard 10',
        'Livro Eden Hazard: The Star',
        'Hazard Chelsea Champions League',
        'Hazard Real Madrid Pro',
        'Hazard Belgium Classic Kit',
        'Hazard Chelsea Home 15',
        'Eden Hazard eFootball Card',
        'Action Figure Hazard Belgium',
        'Caneca Hazard Chelsea',
        'Pulseira Hazard Star',
        'Agasalho Hazard Real Madrid',
        'Hazard Skills Pack'
    ],
    'cat-006': [
        'Johan Cruyff Barcelona Retro 14',
        'Cruyff Ajax 1971 Jersey',
        'Cruyff Holland 1974 World Cup',
        'Cruyff eFootball Epic Card',
        'Johan Cruyff Max Level eFootball',
        'Cruyff Legend Edition Card',
        'Action Figure Cruyff Barca',
        'Poster Cruyff Legend',
        'Camisa Holanda Cruyff 14',
        'Livro Cruyff: My Turn',
        'Cruyff eFootball Epic/Big Time',
        'Cruyff Ajax Legend Edition',
        'Cruyff Holland Classic Kit',
        'Cruyff Barcelona Home 74',
        'Johan Cruyff eFootball Pro',
        'Action Figure Cruyff Holland',
        'Caneca Cruyff Ajax',
        'Pulseira Cruyff Legend',
        'Agasalho Cruyff Retro',
        'Cruyff Skills Pack'
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
"[project]/src/app/dashboard/page.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "barChart": "page-module-scss-module__1LdAAW__barChart",
  "barFill": "page-module-scss-module__1LdAAW__barFill",
  "barItem": "page-module-scss-module__1LdAAW__barItem",
  "barLabel": "page-module-scss-module__1LdAAW__barLabel",
  "barTrack": "page-module-scss-module__1LdAAW__barTrack",
  "categoryBar": "page-module-scss-module__1LdAAW__categoryBar",
  "categoryCount": "page-module-scss-module__1LdAAW__categoryCount",
  "categoryFill": "page-module-scss-module__1LdAAW__categoryFill",
  "categoryInfo": "page-module-scss-module__1LdAAW__categoryInfo",
  "categoryItem": "page-module-scss-module__1LdAAW__categoryItem",
  "categoryList": "page-module-scss-module__1LdAAW__categoryList",
  "categoryName": "page-module-scss-module__1LdAAW__categoryName",
  "chartCard": "page-module-scss-module__1LdAAW__chartCard",
  "chartTitle": "page-module-scss-module__1LdAAW__chartTitle",
  "chartsRow": "page-module-scss-module__1LdAAW__chartsRow",
  "fade-in-up": "page-module-scss-module__1LdAAW__fade-in-up",
  "header": "page-module-scss-module__1LdAAW__header",
  "loading": "page-module-scss-module__1LdAAW__loading",
  "page": "page-module-scss-module__1LdAAW__page",
  "statCard": "page-module-scss-module__1LdAAW__statCard",
  "statIcon": "page-module-scss-module__1LdAAW__statIcon",
  "statInfo": "page-module-scss-module__1LdAAW__statInfo",
  "statLabel": "page-module-scss-module__1LdAAW__statLabel",
  "statValue": "page-module-scss-module__1LdAAW__statValue",
  "statsGrid": "page-module-scss-module__1LdAAW__statsGrid",
  "subtitle": "page-module-scss-module__1LdAAW__subtitle",
  "title": "page-module-scss-module__1LdAAW__title",
});
}),
"[project]/src/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/page.module.scss [app-ssr] (css module)");
'use client';
;
;
;
;
;
function DashboardPage() {
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDashboardStats"])('ven-001').then(setStats);
    }, []);
    if (!stats) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
            children: "Carregando..."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/page.tsx",
            lineNumber: 17,
            columnNumber: 12
        }, this);
    }
    const cards = [
        {
            label: 'Produtos',
            value: stats.totalProdutos,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
            color: '#0066FF'
        },
        {
            label: 'Views Totais',
            value: stats.totalViews.toLocaleString('pt-BR'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
            color: '#00d4aa'
        },
        {
            label: 'Categorias',
            value: stats.totalCategorias,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
            color: '#ffb020'
        },
        {
            label: 'Média Views',
            value: Math.round(stats.totalViews / (stats.totalProdutos || 1)),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: '#ff3b5c'
        }
    ];
    const maxViews = Math.max(...stats.viewsPorDia.map((d)=>d.views));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "Visão Geral"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Acompanhe as métricas da sua loja"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statsGrid,
                children: cards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        style: {
                            animationDelay: `${i * 80}ms`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statIcon,
                                style: {
                                    background: `${card.color}15`,
                                    color: card.color
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                        children: card.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: card.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartsRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartTitle,
                                children: "Views por dia"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barChart,
                                children: stats.viewsPorDia.map((day, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barTrack,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFill,
                                                    style: {
                                                        height: `${day.views / maxViews * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barLabel,
                                                children: day.dia
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartTitle,
                                children: "Produtos por categoria"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryList,
                                children: stats.produtosPorCategoria.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryName,
                                                        children: cat.categoria
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryCount,
                                                        children: cat.total
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryBar,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryFill,
                                                    style: {
                                                        width: `${cat.total / stats.totalProdutos * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Eye
]);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Eye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("eye", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eye",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Layers
]);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }
    ],
    [
        "path",
        {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }
    ],
    [
        "path",
        {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }
    ]
];
const Layers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("layers", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript) <export default as Layers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TrendingUp
]);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 7h6v6",
            key: "box55l"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.5 8.5-5-5L2 17",
            key: "1t1m79"
        }
    ]
];
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trending-up", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_0dqy--l._.js.map