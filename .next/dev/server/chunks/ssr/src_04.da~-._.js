module.exports = [
"[project]/src/components/ProductCarousel/ProductCarousel.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "ProductCarousel-module-scss-module__9gVcXa__active",
  "carousel": "ProductCarousel-module-scss-module__9gVcXa__carousel",
  "counter": "ProductCarousel-module-scss-module__9gVcXa__counter",
  "image": "ProductCarousel-module-scss-module__9gVcXa__image",
  "main": "ProductCarousel-module-scss-module__9gVcXa__main",
  "navButton": "ProductCarousel-module-scss-module__9gVcXa__navButton",
  "next": "ProductCarousel-module-scss-module__9gVcXa__next",
  "prev": "ProductCarousel-module-scss-module__9gVcXa__prev",
  "thumb": "ProductCarousel-module-scss-module__9gVcXa__thumb",
  "thumbVideo": "ProductCarousel-module-scss-module__9gVcXa__thumbVideo",
  "thumbs": "ProductCarousel-module-scss-module__9gVcXa__thumbs",
  "video": "ProductCarousel-module-scss-module__9gVcXa__video",
});
}),
"[project]/src/components/ProductCarousel/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ProductCarousel/ProductCarousel.module.scss [app-ssr] (css module)");
'use client';
;
;
;
;
;
function ProductCarousel({ midias, title }) {
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const goTo = (index)=>{
        setCurrent(index);
        if (videoRef.current) videoRef.current.pause();
    };
    const prev = ()=>goTo(current > 0 ? current - 1 : midias.length - 1);
    const next = ()=>goTo(current < midias.length - 1 ? current + 1 : 0);
    const currentMedia = midias[current];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carousel,
        role: "region",
        "aria-label": `Galeria de ${title}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                children: [
                    currentMedia?.tipo === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        src: currentMedia.url_arquivo,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].video,
                        controls: true,
                        playsInline: true,
                        "aria-label": `Vídeo de ${title}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCarousel/index.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: currentMedia?.url_arquivo || '',
                        alt: `${title} - imagem ${current + 1}`,
                        width: 600,
                        height: 600,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image,
                        priority: true,
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCarousel/index.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].prev}`,
                        onClick: prev,
                        "aria-label": "Imagem anterior",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCarousel/index.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCarousel/index.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].next}`,
                        onClick: next,
                        "aria-label": "Próxima imagem",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCarousel/index.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCarousel/index.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].counter,
                        children: [
                            current + 1,
                            " / ",
                            midias.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCarousel/index.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCarousel/index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumbs,
                role: "tablist",
                "aria-label": "Miniaturas",
                children: midias.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumb} ${i === current ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                        onClick: ()=>goTo(i),
                        role: "tab",
                        "aria-selected": i === current,
                        "aria-label": `${m.tipo === 'video' ? 'Vídeo' : 'Imagem'} ${i + 1}`,
                        children: m.tipo === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$ProductCarousel$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumbVideo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCarousel/index.tsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCarousel/index.tsx",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: m.url_arquivo,
                            alt: `Miniatura ${i + 1}`,
                            width: 80,
                            height: 80,
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCarousel/index.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, this)
                    }, m.id, false, {
                        fileName: "[project]/src/components/ProductCarousel/index.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCarousel/index.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCarousel/index.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
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
"[project]/src/app/(public)/produto/[id]/page.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backBtn": "page-module-scss-module__1crA7a__backBtn",
  "breadcrumbs": "page-module-scss-module__1crA7a__breadcrumbs",
  "categoryBadge": "page-module-scss-module__1crA7a__categoryBadge",
  "container": "page-module-scss-module__1crA7a__container",
  "description": "page-module-scss-module__1crA7a__description",
  "details": "page-module-scss-module__1crA7a__details",
  "empty": "page-module-scss-module__1crA7a__empty",
  "gallery": "page-module-scss-module__1crA7a__gallery",
  "layout": "page-module-scss-module__1crA7a__layout",
  "price": "page-module-scss-module__1crA7a__price",
  "priceBlock": "page-module-scss-module__1crA7a__priceBlock",
  "priceNote": "page-module-scss-module__1crA7a__priceNote",
  "pulse-glow": "page-module-scss-module__1crA7a__pulse-glow",
  "related": "page-module-scss-module__1crA7a__related",
  "relatedGrid": "page-module-scss-module__1crA7a__relatedGrid",
  "relatedTitle": "page-module-scss-module__1crA7a__relatedTitle",
  "skeleton": "page-module-scss-module__1crA7a__skeleton",
  "title": "page-module-scss-module__1crA7a__title",
  "vendorAvatar": "page-module-scss-module__1crA7a__vendorAvatar",
  "vendorBlock": "page-module-scss-module__1crA7a__vendorBlock",
  "vendorInfo": "page-module-scss-module__1crA7a__vendorInfo",
  "vendorName": "page-module-scss-module__1crA7a__vendorName",
  "vendorSub": "page-module-scss-module__1crA7a__vendorSub",
  "vendorTitle": "page-module-scss-module__1crA7a__vendorTitle",
  "viewCount": "page-module-scss-module__1crA7a__viewCount",
  "whatsappBtn": "page-module-scss-module__1crA7a__whatsappBtn",
});
}),
"[project]/src/app/(public)/produto/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCarousel/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(public)/produto/[id]/page.module.scss [app-ssr] (css module)");
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
function ProductDetailPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [related, setRelated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = params.id;
        setLoading(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductById"])(id).then((p)=>{
            setProduct(p);
            setLoading(false);
            if (p) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelatedProducts"])(p.categoria_id, p.id).then(setRelated);
            }
        });
    }, [
        params.id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skeleton,
                children: "Carregando..."
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Produto não encontrado"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backBtn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            " Voltar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    const whatsappMessage = `Olá! Vi o produto "${product.titulo}" por ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(product.preco)} no Shop Martins e gostaria de mais informações.`;
    const whatsappLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWhatsAppLink"])(product.vendedor?.telefone_whatsapp || '', whatsappMessage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].breadcrumbs,
                "aria-label": "Navegação",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Início"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        size: 14,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    product.categoria && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/?categoria=${product.categoria_id}`,
                                children: product.categoria.nome
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 14,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: product.titulo
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gallery,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCarousel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            midias: product.midias,
                            title: product.titulo
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].details,
                        children: [
                            product.categoria && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryBadge,
                                children: product.categoria.nome
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: product.titulo
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewCount,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        size: 16,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatViews"])(product.countViews),
                                    " visualizações"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceBlock,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].price,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(product.preco)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceNote,
                                        children: "à vista via WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: whatsappLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].whatsappBtn,
                                "aria-label": "Chamar vendedor no WhatsApp",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    "Chamar no WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Descrição"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: product.descricao
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            product.vendedor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vendorBlock,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vendorTitle,
                                        children: "Vendedor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/vendedor/${product.vendedor.id}`,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vendorInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: product.vendedor.foto_perfil,
                                                alt: product.vendedor.nome,
                                                width: 48,
                                                height: 48,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vendorAvatar,
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vendorName,
                                                        children: product.vendedor.nome
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vendorSub,
                                                        children: "Ver todos os produtos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            related.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].related,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].relatedTitle,
                        children: [
                            "Produtos ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "relacionados"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 139,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$produto$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].relatedGrid,
                        children: related.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                product: p,
                                index: i
                            }, p.id, false, {
                                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(public)/produto/[id]/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_04.da~-._.js.map