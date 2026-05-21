(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/mock/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/VendorCard/VendorCard.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "VendorCard-module-scss-module__2FYIMG__avatar",
  "button": "VendorCard-module-scss-module__2FYIMG__button",
  "card": "VendorCard-module-scss-module__2FYIMG__card",
  "meta": "VendorCard-module-scss-module__2FYIMG__meta",
  "name": "VendorCard-module-scss-module__2FYIMG__name",
});
}),
"[project]/src/components/VendorCard/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VendorCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VendorCard$2f$VendorCard$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/VendorCard/VendorCard.module.scss [app-client] (css module)");
;
;
;
;
;
;
function VendorCard({ vendor }) {
    const productCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>p.vendedor_id === vendor.id).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/vendedor/${vendor.id}`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VendorCard$2f$VendorCard$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VendorCard$2f$VendorCard$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: vendor.foto_perfil,
                    alt: vendor.nome,
                    width: 80,
                    height: 80,
                    unoptimized: true
                }, void 0, false, {
                    fileName: "[project]/src/components/VendorCard/index.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/VendorCard/index.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VendorCard$2f$VendorCard$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                children: vendor.nome
            }, void 0, false, {
                fileName: "[project]/src/components/VendorCard/index.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VendorCard$2f$VendorCard$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                        size: 14,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/VendorCard/index.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    productCount,
                    " produtos"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VendorCard/index.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VendorCard$2f$VendorCard$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                children: [
                    "Ver loja ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/VendorCard/index.tsx",
                        lineNumber: 32,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VendorCard/index.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VendorCard/index.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = VendorCard;
var _c;
__turbopack_context__.k.register(_c, "VendorCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/mock/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/data.ts [app-client] (ecmascript)");
;
// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Mock API Service
// ═══════════════════════════════════════════════════════════════
const delay = (ms = 300)=>new Promise((r)=>setTimeout(r, ms));
async function getProducts(filters) {
    await delay(350);
    let filtered = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produtos"]
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produtos"].find((p)=>p.id === id) || null;
}
async function getRelatedProducts(categoryId, excludeId) {
    await delay(200);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>p.categoria_id === categoryId && p.id !== excludeId).slice(0, 8);
}
async function getVendors() {
    await delay(300);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vendedores"].filter((v)=>v.role === 'VENDEDOR' || v.role === 'ADMIN');
}
async function getVendorById(id) {
    await delay(200);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vendedores"].find((v)=>v.id === id) || null;
}
async function getCategories() {
    await delay(150);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categorias"];
}
async function searchGlobal(query) {
    await delay(300);
    const q = query.toLowerCase();
    return {
        products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>p.titulo.toLowerCase().includes(q)).slice(0, 10),
        vendors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vendedores"].filter((v)=>v.nome.toLowerCase().includes(q))
    };
}
async function getDashboardStats(userId) {
    await delay(400);
    const userProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>p.vendedor_id === userId);
    const cats = [
        ...new Set(userProducts.map((p)=>p.categoria_id))
    ];
    return {
        totalProdutos: userProducts.length,
        totalViews: userProducts.reduce((sum, p)=>sum + p.countViews, 0),
        totalCategorias: cats.length,
        produtosPorCategoria: cats.map((catId)=>({
                categoria: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categorias"].find((c)=>c.id === catId)?.nome || '',
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
    const empProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>p.empresa_id === empresaId);
    const cats = [
        ...new Set(empProducts.map((p)=>p.categoria_id))
    ];
    const activeVendors = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vendedores"].filter((v)=>v.ativo);
    return {
        totalProdutos: empProducts.length,
        totalViews: empProducts.reduce((sum, p)=>sum + p.countViews, 0),
        totalCategorias: cats.length,
        totalVendedores: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vendedores"].length,
        totalUsuariosAtivos: activeVendors.length,
        produtosPorCategoria: cats.map((catId)=>({
                categoria: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categorias"].find((c)=>c.id === catId)?.nome || '',
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"];
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
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].push(newToken);
    return newToken;
}
async function getEmpresa() {
    await delay(150);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["empresa"];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(public)/vendedores/page.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "page-module-scss-module__S6KsBq__container",
  "grid": "page-module-scss-module__S6KsBq__grid",
  "header": "page-module-scss-module__S6KsBq__header",
  "headerIcon": "page-module-scss-module__S6KsBq__headerIcon",
  "skeleton-shimmer": "page-module-scss-module__S6KsBq__skeleton-shimmer",
  "skeletonCard": "page-module-scss-module__S6KsBq__skeletonCard",
  "subtitle": "page-module-scss-module__S6KsBq__subtitle",
  "title": "page-module-scss-module__S6KsBq__title",
});
}),
"[project]/src/app/(public)/vendedores/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VendorsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VendorCard$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VendorCard/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$vendedores$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(public)/vendedores/page.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function VendorsPage() {
    _s();
    const [vendors, setVendors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VendorsPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVendors"])().then({
                "VendorsPage.useEffect": (v)=>{
                    setVendors(v);
                    setLoading(false);
                }
            }["VendorsPage.useEffect"]);
        }
    }["VendorsPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$vendedores$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$vendedores$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$vendedores$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/vendedores/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/vendedores/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$vendedores$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            "Nossos ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Vendedores"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/vendedores/page.tsx",
                                lineNumber: 27,
                                columnNumber: 45
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/vendedores/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$vendedores$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Conheça os vendedores da plataforma e explore seus produtos exclusivos."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/vendedores/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/vendedores/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$vendedores$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: Array.from({
                    length: 6
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$vendedores$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skeletonCard
                    }, i, false, {
                        fileName: "[project]/src/app/(public)/vendedores/page.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/vendedores/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$vendedores$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: vendors.map((vendor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VendorCard$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        vendor: vendor
                    }, vendor.id, false, {
                        fileName: "[project]/src/app/(public)/vendedores/page.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/vendedores/page.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(public)/vendedores/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(VendorsPage, "G2fV7I12JGxfZz3X+862n/+zQWc=");
_c = VendorsPage;
var _c;
__turbopack_context__.k.register(_c, "VendorsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0ye~5x2._.js.map