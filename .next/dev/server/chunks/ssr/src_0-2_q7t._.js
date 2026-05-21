module.exports = [
"[project]/src/utils/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Utility Functions
// ═══════════════════════════════════════════════════════════════
__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatPrice",
    ()=>formatPrice,
    "formatViews",
    ()=>formatViews,
    "getWhatsAppLink",
    ()=>getWhatsAppLink,
    "slugify",
    ()=>slugify,
    "truncateText",
    ()=>truncateText
]);
function formatPrice(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
function formatViews(count) {
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1).replace('.0', '')}k`;
    }
    return String(count);
}
function getWhatsAppLink(numero, mensagem) {
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}
function slugify(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}
}),
"[project]/src/components/ProductCard/ProductCard.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "ProductCard-module-scss-module___HK1Jq__badge",
  "badge-pop": "ProductCard-module-scss-module___HK1Jq__badge-pop",
  "card": "ProductCard-module-scss-module___HK1Jq__card",
  "content": "ProductCard-module-scss-module___HK1Jq__content",
  "imageWrapper": "ProductCard-module-scss-module___HK1Jq__imageWrapper",
  "price": "ProductCard-module-scss-module___HK1Jq__price",
  "priceRow": "ProductCard-module-scss-module___HK1Jq__priceRow",
  "title": "ProductCard-module-scss-module___HK1Jq__title",
  "vendor": "ProductCard-module-scss-module___HK1Jq__vendor",
  "vendorAvatar": "ProductCard-module-scss-module___HK1Jq__vendorAvatar",
  "vendorName": "ProductCard-module-scss-module___HK1Jq__vendorName",
  "views": "ProductCard-module-scss-module___HK1Jq__views",
});
}),
"[project]/src/components/ProductCard/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard/ProductCard.module.scss [app-ssr] (css module)");
;
;
;
;
;
;
function ProductCard({ product, index = 0 }) {
    const mainImage = product.midias.find((m)=>m.tipo === 'imagem');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/produto/${product.id}`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
        style: {
            animationDelay: `${index * 60}ms`
        },
        "aria-label": `Ver ${product.titulo} por ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(product.preco)}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageWrapper,
                children: [
                    mainImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: mainImage.url_arquivo,
                        alt: product.titulo,
                        width: 400,
                        height: 400,
                        loading: index < 4 ? 'eager' : 'lazy',
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard/index.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    product.categoria && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                        children: product.categoria.nome
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard/index.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].views,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                size: 12,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard/index.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatViews"])(product.countViews)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard/index.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard/index.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: product.titulo
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard/index.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].price,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(product.preco)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard/index.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard/index.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    product.vendedor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vendor,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: product.vendedor.foto_perfil,
                                alt: product.vendedor.nome,
                                width: 24,
                                height: 24,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vendorAvatar,
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard/index.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vendorName,
                                children: product.vendedor.nome
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard/index.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard/index.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard/index.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard/index.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SkeletonLoader/SkeletonLoader.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "SkeletonLoader-module-scss-module__910G3a__avatar",
  "button": "SkeletonLoader-module-scss-module__910G3a__button",
  "card": "SkeletonLoader-module-scss-module__910G3a__card",
  "heading": "SkeletonLoader-module-scss-module__910G3a__heading",
  "image": "SkeletonLoader-module-scss-module__910G3a__image",
  "productCardSkeleton": "SkeletonLoader-module-scss-module__910G3a__productCardSkeleton",
  "productContentSkeleton": "SkeletonLoader-module-scss-module__910G3a__productContentSkeleton",
  "productImageSkeleton": "SkeletonLoader-module-scss-module__910G3a__productImageSkeleton",
  "skeleton": "SkeletonLoader-module-scss-module__910G3a__skeleton",
  "skeleton-shimmer": "SkeletonLoader-module-scss-module__910G3a__skeleton-shimmer",
  "text": "SkeletonLoader-module-scss-module__910G3a__text",
});
}),
"[project]/src/components/SkeletonLoader/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCardSkeleton",
    ()=>ProductCardSkeleton,
    "default",
    ()=>SkeletonLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SkeletonLoader/SkeletonLoader.module.scss [app-ssr] (css module)");
;
;
;
function SkeletonLoader({ width = '100%', height, variant = 'text', className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skeleton, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][variant], className),
        style: {
            width,
            height
        },
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/SkeletonLoader/index.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function ProductCardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].productCardSkeleton,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].productImageSkeleton
            }, void 0, false, {
                fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].productContentSkeleton,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {
                        variant: "text",
                        width: "85%",
                        height: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {
                        variant: "text",
                        width: "60%",
                        height: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {
                        variant: "heading",
                        width: "40%",
                        height: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            marginTop: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {
                                variant: "avatar",
                                width: 24,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {
                                variant: "text",
                                width: 100,
                                height: 12
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SkeletonLoader/index.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/FilterSidebar/FilterSidebar.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "FilterSidebar-module-scss-module__yREyzG__actions",
  "active": "FilterSidebar-module-scss-module__yREyzG__active",
  "applyBtn": "FilterSidebar-module-scss-module__yREyzG__applyBtn",
  "clearBtn": "FilterSidebar-module-scss-module__yREyzG__clearBtn",
  "content": "FilterSidebar-module-scss-module__yREyzG__content",
  "drawer": "FilterSidebar-module-scss-module__yREyzG__drawer",
  "drawerClose": "FilterSidebar-module-scss-module__yREyzG__drawerClose",
  "drawerHeader": "FilterSidebar-module-scss-module__yREyzG__drawerHeader",
  "fade-in": "FilterSidebar-module-scss-module__yREyzG__fade-in",
  "header": "FilterSidebar-module-scss-module__yREyzG__header",
  "mobileTrigger": "FilterSidebar-module-scss-module__yREyzG__mobileTrigger",
  "option": "FilterSidebar-module-scss-module__yREyzG__option",
  "options": "FilterSidebar-module-scss-module__yREyzG__options",
  "overlay": "FilterSidebar-module-scss-module__yREyzG__overlay",
  "priceField": "FilterSidebar-module-scss-module__yREyzG__priceField",
  "priceInput": "FilterSidebar-module-scss-module__yREyzG__priceInput",
  "priceInputs": "FilterSidebar-module-scss-module__yREyzG__priceInputs",
  "priceSep": "FilterSidebar-module-scss-module__yREyzG__priceSep",
  "section": "FilterSidebar-module-scss-module__yREyzG__section",
  "sectionTitle": "FilterSidebar-module-scss-module__yREyzG__sectionTitle",
  "sidebar": "FilterSidebar-module-scss-module__yREyzG__sidebar",
  "slide-up": "FilterSidebar-module-scss-module__yREyzG__slide-up",
  "title": "FilterSidebar-module-scss-module__yREyzG__title",
});
}),
"[project]/src/components/FilterSidebar/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/FilterSidebar/FilterSidebar.module.scss [app-ssr] (css module)");
'use client';
;
;
;
;
;
function FilterSidebar({ selectedCategoria, precoMin = 0, precoMax = 2000, onFilter }) {
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cat, setCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(selectedCategoria || '');
    const [min, setMin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(precoMin);
    const [max, setMax] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(precoMax);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategories"])().then(setCategories);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCat(selectedCategoria || '');
    }, [
        selectedCategoria
    ]);
    const apply = ()=>{
        onFilter({
            categoria: cat || undefined,
            precoMin: min > 0 ? min : undefined,
            precoMax: max < 2000 ? max : undefined
        });
        setMobileOpen(false);
    };
    const clear = ()=>{
        setCat('');
        setMin(0);
        setMax(2000);
        onFilter({});
        setMobileOpen(false);
    };
    const filterContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Categoria"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].options,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].option} ${cat === '' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: ()=>setCat(''),
                                children: "Todas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].option} ${cat === c.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: ()=>setCat(c.id),
                                    children: c.nome
                                }, c.id, false, {
                                    fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Faixa de Preço"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceInputs,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceField,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "priceMin",
                                        children: "Mín"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "priceMin",
                                        type: "number",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceInput,
                                        value: min,
                                        onChange: (e)=>setMin(Number(e.target.value)),
                                        min: 0,
                                        step: 10
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceSep,
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceField,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "priceMax",
                                        children: "Máx"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "priceMax",
                                        type: "number",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceInput,
                                        value: max,
                                        onChange: (e)=>setMax(Number(e.target.value)),
                                        min: 0,
                                        step: 10
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].applyBtn,
                        onClick: apply,
                        children: "Aplicar filtros"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clearBtn,
                        onClick: clear,
                        children: "Limpar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FilterSidebar/index.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar,
                "aria-label": "Filtros",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: "Filtros"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    filterContent
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileTrigger,
                onClick: ()=>setMobileOpen(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    "Filtros"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
                        onClick: ()=>setMobileOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawer,
                        role: "dialog",
                        "aria-label": "Filtros",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                        children: "Filtros"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$FilterSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerClose,
                                        onClick: ()=>setMobileOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FilterSidebar/index.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            filterContent
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterSidebar/index.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/(public)/page.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "page-module-scss-module__pqCbwq__content",
  "empty": "page-module-scss-module__pqCbwq__empty",
  "fade-in-up": "page-module-scss-module__pqCbwq__fade-in-up",
  "grid": "page-module-scss-module__pqCbwq__grid",
  "hero": "page-module-scss-module__pqCbwq__hero",
  "heroActions": "page-module-scss-module__pqCbwq__heroActions",
  "heroBadge": "page-module-scss-module__pqCbwq__heroBadge",
  "heroCta": "page-module-scss-module__pqCbwq__heroCta",
  "heroInner": "page-module-scss-module__pqCbwq__heroInner",
  "heroSecondary": "page-module-scss-module__pqCbwq__heroSecondary",
  "heroSubtitle": "page-module-scss-module__pqCbwq__heroSubtitle",
  "heroTitle": "page-module-scss-module__pqCbwq__heroTitle",
  "layout": "page-module-scss-module__pqCbwq__layout",
  "loadingGrid": "page-module-scss-module__pqCbwq__loadingGrid",
  "main": "page-module-scss-module__pqCbwq__main",
  "resultCount": "page-module-scss-module__pqCbwq__resultCount",
  "sectionHeader": "page-module-scss-module__pqCbwq__sectionHeader",
  "sectionTitle": "page-module-scss-module__pqCbwq__sectionTitle",
  "sellBanner": "page-module-scss-module__pqCbwq__sellBanner",
  "sellBannerInner": "page-module-scss-module__pqCbwq__sellBannerInner",
  "sellBtn": "page-module-scss-module__pqCbwq__sellBtn",
  "sellText": "page-module-scss-module__pqCbwq__sellText",
  "sellTitle": "page-module-scss-module__pqCbwq__sellTitle",
});
}),
"[project]/src/app/(public)/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SkeletonLoader/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilterSidebar/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(public)/page.module.scss [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function HomeContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const categoriaParam = searchParams.get('categoria');
    const searchParam = searchParams.get('search');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setFilters((prev)=>({
                ...prev,
                categoria: categoriaParam || undefined,
                search: searchParam || undefined
            }));
    }, [
        categoriaParam,
        searchParam
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLoading(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProducts"])({
            ...filters,
            limit: 40
        }).then((res)=>{
            setProducts(res.products);
            setTotal(res.total);
            setLoading(false);
        });
    }, [
        filters
    ]);
    const handleFilter = (newFilters)=>{
        setFilters((prev)=>({
                ...prev,
                ...newFilters
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroBadge,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                " Marketplace Esportivo Premium"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroTitle,
                            children: "Tudo para o esporte em um só lugar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroSubtitle,
                            children: "Encontre os melhores produtos esportivos dos melhores vendedores. Converse direto pelo WhatsApp."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#produtos",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroCta,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        "Explorar Produtos"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/vendedores",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroSecondary,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        "Ver Vendedores"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/page.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "produtos",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].layout,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterSidebar$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            selectedCategoria: filters.categoria,
                            precoMin: filters.precoMin,
                            precoMax: filters.precoMax,
                            onFilter: handleFilter
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                            children: [
                                                "Produtos ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "em destaque"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultCount,
                                            children: [
                                                total,
                                                " produtos encontrados"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingGrid,
                                    children: Array.from({
                                        length: 8
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCardSkeleton"], {}, i, false, {
                                            fileName: "[project]/src/app/(public)/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this) : products.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                                    children: products.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            product: product,
                                            index: i
                                        }, product.id, false, {
                                            fileName: "[project]/src/app/(public)/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            size: 48
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Nenhum produto encontrado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/page.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["empresa"].linkGrupoDevenda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sellBanner,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sellBannerInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sellTitle,
                            children: "Deseja vender seus produtos?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/page.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sellText,
                            children: "Entre no nosso grupo de vendas e comece a anunciar agora mesmo."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/page.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["empresa"].linkGrupoDevenda,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sellBtn,
                            children: [
                                "Quero vender ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/page.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/page.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/page.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContent, {}, void 0, false, {
            fileName: "[project]/src/app/(public)/page.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(public)/page.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0-2_q7t._.js.map