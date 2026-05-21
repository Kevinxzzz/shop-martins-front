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

//# sourceMappingURL=src_0kwvadr._.js.map