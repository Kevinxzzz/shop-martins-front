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
"[project]/src/app/dashboard/shared.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtn": "shared-module-scss-module__UlCoHW__actionBtn",
  "actionBtns": "shared-module-scss-module__UlCoHW__actionBtns",
  "active": "shared-module-scss-module__UlCoHW__active",
  "addBtn": "shared-module-scss-module__UlCoHW__addBtn",
  "badge": "shared-module-scss-module__UlCoHW__badge",
  "cancelBtn": "shared-module-scss-module__UlCoHW__cancelBtn",
  "configCard": "shared-module-scss-module__UlCoHW__configCard",
  "configSection": "shared-module-scss-module__UlCoHW__configSection",
  "configTitle": "shared-module-scss-module__UlCoHW__configTitle",
  "danger": "shared-module-scss-module__UlCoHW__danger",
  "form": "shared-module-scss-module__UlCoHW__form",
  "formActions": "shared-module-scss-module__UlCoHW__formActions",
  "formGrid": "shared-module-scss-module__UlCoHW__formGrid",
  "formGroup": "shared-module-scss-module__UlCoHW__formGroup",
  "full": "shared-module-scss-module__UlCoHW__full",
  "header": "shared-module-scss-module__UlCoHW__header",
  "inactive": "shared-module-scss-module__UlCoHW__inactive",
  "input": "shared-module-scss-module__UlCoHW__input",
  "label": "shared-module-scss-module__UlCoHW__label",
  "loading": "shared-module-scss-module__UlCoHW__loading",
  "page": "shared-module-scss-module__UlCoHW__page",
  "previewGrid": "shared-module-scss-module__UlCoHW__previewGrid",
  "previewItem": "shared-module-scss-module__UlCoHW__previewItem",
  "price": "shared-module-scss-module__UlCoHW__price",
  "productRow": "shared-module-scss-module__UlCoHW__productRow",
  "productThumb": "shared-module-scss-module__UlCoHW__productThumb",
  "productTitle": "shared-module-scss-module__UlCoHW__productTitle",
  "profileAvatar": "shared-module-scss-module__UlCoHW__profileAvatar",
  "profileCard": "shared-module-scss-module__UlCoHW__profileCard",
  "profileHeader": "shared-module-scss-module__UlCoHW__profileHeader",
  "profileName": "shared-module-scss-module__UlCoHW__profileName",
  "profileRole": "shared-module-scss-module__UlCoHW__profileRole",
  "select": "shared-module-scss-module__UlCoHW__select",
  "statusBadge": "shared-module-scss-module__UlCoHW__statusBadge",
  "submitBtn": "shared-module-scss-module__UlCoHW__submitBtn",
  "table": "shared-module-scss-module__UlCoHW__table",
  "tableWrapper": "shared-module-scss-module__UlCoHW__tableWrapper",
  "textarea": "shared-module-scss-module__UlCoHW__textarea",
  "title": "shared-module-scss-module__UlCoHW__title",
  "toggleBtn": "shared-module-scss-module__UlCoHW__toggleBtn",
  "tokenCard": "shared-module-scss-module__UlCoHW__tokenCard",
  "tokenList": "shared-module-scss-module__UlCoHW__tokenList",
  "tokenMeta": "shared-module-scss-module__UlCoHW__tokenMeta",
  "tokenValue": "shared-module-scss-module__UlCoHW__tokenValue",
  "uploadArea": "shared-module-scss-module__UlCoHW__uploadArea",
  "uploadHint": "shared-module-scss-module__UlCoHW__uploadHint",
  "uploadIcon": "shared-module-scss-module__UlCoHW__uploadIcon",
  "uploadText": "shared-module-scss-module__UlCoHW__uploadText",
});
}),
"[project]/src/app/dashboard/perfil/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.mjs [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/shared.module.scss [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
function ProfilePage() {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vendedores"][0];
    const [nome, setNome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(user.nome);
    const [whatsapp, setWhatsapp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(user.telefone_whatsapp);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSave = async (e)=>{
        e.preventDefault();
        setSaving(true);
        await new Promise((r)=>setTimeout(r, 800));
        setSaving(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                    children: "Meu Perfil"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: user.foto_perfil,
                                alt: user.nome,
                                width: 80,
                                height: 80,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileAvatar,
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileName,
                                        children: user.nome
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileRole,
                                        children: user.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSave,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                                htmlFor: "name",
                                                children: "Nome"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "name",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                                value: nome,
                                                onChange: (e)=>setNome(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                lineNumber: 48,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                                htmlFor: "email",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "email",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                                value: user.email,
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                                htmlFor: "whatsapp",
                                                children: "WhatsApp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "whatsapp",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                                value: whatsapp,
                                                onChange: (e)=>setWhatsapp(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                                children: "Foto de Perfil"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadArea,
                                                htmlFor: "avatar",
                                                style: {
                                                    padding: '1.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                        size: 20,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadText,
                                                        children: "Alterar foto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "avatar",
                                                type: "file",
                                                accept: "image/*",
                                                style: {
                                                    display: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formActions,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$shared$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                                    disabled: saving,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        saving ? 'Salvando...' : 'Salvar Alterações'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/perfil/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/perfil/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_02zt7oa._.js.map