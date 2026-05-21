module.exports = [
"[project]/src/utils/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/components/SkeletonLoader/SkeletonLoader.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/SkeletonLoader/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCardSkeleton",
    ()=>ProductCardSkeleton,
    "default",
    ()=>SkeletonLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SkeletonLoader/SkeletonLoader.module.scss [app-rsc] (css module)");
;
;
;
function SkeletonLoader({ width = '100%', height, variant = 'text', className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skeleton, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"][variant], className),
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].productCardSkeleton,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].productImageSkeleton
            }, void 0, false, {
                fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$SkeletonLoader$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].productContentSkeleton,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {
                        variant: "text",
                        width: "85%",
                        height: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {
                        variant: "text",
                        width: "60%",
                        height: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {
                        variant: "heading",
                        width: "40%",
                        height: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            marginTop: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {
                                variant: "avatar",
                                width: 24,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkeletonLoader/index.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {
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
"[project]/src/app/(public)/page.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeTag": "page-module-scss-module__pqCbwq__activeTag",
  "activeTags": "page-module-scss-module__pqCbwq__activeTags",
  "banner": "page-module-scss-module__pqCbwq__banner",
  "bannerContent": "page-module-scss-module__pqCbwq__bannerContent",
  "bannerImage": "page-module-scss-module__pqCbwq__bannerImage",
  "bannerOverlay": "page-module-scss-module__pqCbwq__bannerOverlay",
  "bannerSubtitle": "page-module-scss-module__pqCbwq__bannerSubtitle",
  "bannerTitle": "page-module-scss-module__pqCbwq__bannerTitle",
  "ctaBanner": "page-module-scss-module__pqCbwq__ctaBanner",
  "ctaBtn": "page-module-scss-module__pqCbwq__ctaBtn",
  "ctaInner": "page-module-scss-module__pqCbwq__ctaInner",
  "ctaText": "page-module-scss-module__pqCbwq__ctaText",
  "ctaTitle": "page-module-scss-module__pqCbwq__ctaTitle",
  "empty": "page-module-scss-module__pqCbwq__empty",
  "filterBadge": "page-module-scss-module__pqCbwq__filterBadge",
  "filterBtn": "page-module-scss-module__pqCbwq__filterBtn",
  "grid": "page-module-scss-module__pqCbwq__grid",
  "main": "page-module-scss-module__pqCbwq__main",
  "resultCount": "page-module-scss-module__pqCbwq__resultCount",
  "sectionHeader": "page-module-scss-module__pqCbwq__sectionHeader",
  "sectionLeft": "page-module-scss-module__pqCbwq__sectionLeft",
  "sectionTitle": "page-module-scss-module__pqCbwq__sectionTitle",
});
}),
"[project]/src/app/(public)/loading.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SkeletonLoader/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(public)/page.module.scss [app-rsc] (css module)");
;
;
;
function HomeLoading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hero,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].heroInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].heroBadge,
                            style: {
                                opacity: 0.5
                            },
                            children: "Carregando..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/loading.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].heroTitle,
                            children: "Tudo para o esporte em um só lugar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/loading.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/loading.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/loading.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].main,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].layout,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].content,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].loadingGrid,
                            children: Array.from({
                                length: 8
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkeletonLoader$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCardSkeleton"], {}, i, false, {
                                    fileName: "[project]/src/app/(public)/loading.tsx",
                                    lineNumber: 18,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/loading.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/loading.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/loading.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/loading.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/(public)/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(public)/loading.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=src_001n4ou._.js.map