const fs = require('fs');

let js = fs.readFileSync('original.js', 'utf8');

// 1. Couple names
js = js.split('آية').join('آلاء');

// 2. Occasion & Wedding words -> Engagement
js = js.split('دعوة زفاف').join('دعوة خطوبة');
js = js.split('حفل زفاف').join('حفل خطوبة');
js = js.split('باقي على الفرح').join('باقي على الخطوبة');
js = js.split('يوم الفرح').join('يوم الخطوبة المبارك');
js = js.split('مستنيينكم يوم الفرح').join('مستنيينكم يوم الخطوبة المبارك');
js = js.split('مكان الفرح على الخريطة').join('مكان الخطوبة على الخريطة');

// 3. Love and Affection quotes between sections
js = js.split('بكل الحب والسعادة').join('بكل ما في القلب من محبة ومودة');
js = js.split('كل ثانية بتفرّبنا لليلة العمر').join('كل ثانية بتقربنا لبداية أجمل حكاية حب تجمع قلبينا ✨');
js = js.split('وجودك معانا في اليوم ده يعني لينا الدنيا كلها،').join('محبتكم وسام على صدورنا ووجودكم يملأ قلوبنا نوراً وبهجة،');
js = js.split('دوسة زرار واحدة وتبقى معانا 🤍').join('حضوركم يكمل فرحتنا ويزيد ليلتنا جمالاً وسعادة 💍🤍');

// 4. Venue & Location
js = js.split('قاعة التراث').join('أمام البيت');
js = js.split('طلخا، المنصورة').join('السجاعية');
js = js.split('طلخا — الدقهلية').join('عند محطة المياه الكبيرة بالسجاعية - أرض السمسار');
js = js.split('الوصول لقاعة التراث').join('الوصول لمكان الحفل');
js = js.split('🤍 وصلت… أهلاً بيك في التراث').join('🤍 نورتونا… تكتمل سعادتنا بوجودكم الغالي');
js = js.split('البوابة اتفتحت… والقاعة كلها قدامك').join('أهلاً بكم في ليلة العمر التي تزدان بحضوركم ومحبتكم 🤍');

// 5. WhatsApp Phone number 01011541853
js = js.split('201040677295').join('201011541853');

// 6. Maps URL
js = js.split('https://maps.app.goo.gl/ZyegquBc5NA3QHdG8').join('https://maps.app.goo.gl/zMow3jPNzvKnBXFg6');

// 7. Calculate upcoming Thursday ISO
const d = new Date();
const currentDay = d.getDay();
let daysUntilThursday = (4 - currentDay + 7) % 7;
if (daysUntilThursday === 0 && d.getHours() >= 23) daysUntilThursday = 7;
const target = new Date(d);
target.setDate(d.getDate() + (daysUntilThursday === 0 ? 0 : daysUntilThursday));
target.setHours(19, 0, 0, 0);
const isoDate = target.toISOString();
console.log('Target date ISO:', isoDate);

js = js.replace(/weddingDate:`[^`]+`/g, 'weddingDate:`' + isoDate + '`');

// 8. Custom Gallery with Lightbox and 3 photos
const galleryReplacement = `
var customPhotos = [
  {
    src: "/images/custom2.jpg",
    alt: "أحمد يقدم الوردة لآلاء - بداية الحكاية",
    title: "بداية أجمل حكاية",
    caption: "",
    type: "portrait"
  },
  {
    src: "/images/custom3.jpg",
    alt: "أحمد وآلاء في الطفولة معاً - رفقاء الدرب",
    title: "رفقاء الدرب والروح",
    caption: "",
    type: "portrait"
  },
  {
    src: "/images/photo1.jpg",
    alt: "خاتم الخطوبة وباقة الزهور الملكية",
    title: "عقد المحبة والنصيب",
    caption: "«واليوم نلبس دبلتنا ونبدأ أجمل فصول العمر 💍🤍»",
    type: "landscape"
  }
];

function LightboxModal({ items, index, onClose, onPrev, onNext }) {
  var item = items[index];
  (0, v.useEffect)(function () {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onNext();
      else if (e.key === "ArrowRight") onPrev();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return function () {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index]);

  return (0, $.jsxs)("div", {
    className: "lightbox-overlay",
    onClick: function (e) {
      if (e.target === e.currentTarget) onClose();
    },
    children: [
      (0, $.jsxs)("div", {
        className: "lightbox-dialog",
        children: [
          (0, $.jsx)("button", {
            type: "button",
            className: "lightbox-close-btn",
            onClick: onClose,
            "aria-label": "إغلاق",
            children: "✕"
          }),
          (0, $.jsxs)("div", {
            className: "lightbox-stage",
            children: [
              (0, $.jsx)("button", {
                type: "button",
                className: "lightbox-nav-btn lightbox-nav--prev",
                onClick: function (e) { e.stopPropagation(); onPrev(); },
                "aria-label": "الصورة السابقة",
                children: (0, $.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: (0, $.jsx)("path", { d: "M9 18l6-6-6-6" })
                })
              }),
              (0, $.jsxs)("div", {
                className: "lightbox-frame",
                children: [
                  (0, $.jsx)("img", {
                    src: item.src,
                    alt: item.alt,
                    className: "lightbox-full-img"
                  }),
                  (0, $.jsx)("div", { className: "lightbox-corner-accent tl" }),
                  (0, $.jsx)("div", { className: "lightbox-corner-accent tr" }),
                  (0, $.jsx)("div", { className: "lightbox-corner-accent bl" }),
                  (0, $.jsx)("div", { className: "lightbox-corner-accent br" })
                ]
              }),
              (0, $.jsx)("button", {
                type: "button",
                className: "lightbox-nav-btn lightbox-nav--next",
                onClick: function (e) { e.stopPropagation(); onNext(); },
                "aria-label": "الصورة التالية",
                children: (0, $.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: (0, $.jsx)("path", { d: "M15 18l-6-6 6-6" })
                })
              })
            ]
          }),
          (0, $.jsxs)("div", {
            className: "lightbox-details",
            children: [
              (0, $.jsx)("h3", {
                className: "lightbox-title",
                children: item.title
              }),
              item.caption ? (0, $.jsx)("p", {
                className: "lightbox-caption",
                children: item.caption
              }) : null,
              (0, $.jsxs)("span", {
                className: "lightbox-counter-pill",
                children: [index + 1, " / ", items.length]
              })
            ]
          })
        ]
      })
    ]
  });
}

function GalleryCard({ item, index, onOpen }) {
  var ref = Pc({ threshold: 0.15 });
  return (0, $.jsxs)("figure", {
    ref: ref,
    className: "gallery-item gallery-item--" + item.type + " reveal",
    onClick: onOpen,
    role: "button",
    tabIndex: 0,
    "aria-label": item.title + " - اضغط للتكبير",
    onKeyDown: function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpen();
      }
    },
    children: [
      (0, $.jsxs)("div", {
        className: "gallery-par",
        children: [
          (0, $.jsx)("img", {
            src: item.src,
            alt: item.alt,
            loading: "lazy",
            className: "ph-img enhanced-photo"
          }),
          (0, $.jsx)("div", { className: "gallery-card-glow" }),
          (0, $.jsx)("div", { className: "card-corner-decor tl" }),
          (0, $.jsx)("div", { className: "card-corner-decor tr" }),
          (0, $.jsx)("div", { className: "card-corner-decor bl" }),
          (0, $.jsx)("div", { className: "card-corner-decor br" }),
          item.title && (0, $.jsxs)("div", {
            className: "gallery-caption-bar",
            children: [
              (0, $.jsx)("span", {
                className: "gallery-caption-title",
                children: item.title
              }),
              item.caption ? (0, $.jsx)("p", {
                className: "gallery-caption-text",
                children: item.caption
              }) : null
            ]
          })
        ]
      })
    ]
  });
}

Zi.registerPlugin(Q);
function Qc() {
  var e = (0, v.useRef)(null);
  var t = Pc();
  var n = wc();
  var activeState = (0, v.useState)(null);
  var activeIndex = activeState[0];
  var setActiveIndex = activeState[1];

  (0, v.useEffect)(function () {
    if (n) return;
    var ctx = Zi.context(function () {
      Zi.utils.toArray(".gallery-par").forEach(function (el) {
        Zi.fromTo(el, { yPercent: -3 }, {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, e);
    return function () { ctx.revert(); };
  }, [n]);

  return (0, $.jsxs)("section", {
    id: "gallery",
    ref: e,
    className: "scene",
    "aria-label": "لحظات لا تُنسى",
    children: [
      (0, $.jsxs)("div", {
        className: "scene-container",
        children: [
          (0, $.jsxs)("div", {
            ref: t,
            className: "gallery-head reveal",
            children: [
              (0, $.jsx)("p", { className: "kicker", children: "ذكريات وحكايات" }),
              (0, $.jsx)("h2", { className: "gallery-title", children: "لحظات لا تُنسى" }),
              (0, $.jsx)(Oc, { className: "signpost-ornament" })
            ]
          }),
          (0, $.jsx)("div", {
            className: "gallery-stack",
            children: customPhotos.map(function (item, idx) {
              return (0, $.jsx)(GalleryCard, {
                item: item,
                index: idx,
                onOpen: function () { setActiveIndex(idx); }
              }, item.src + idx);
            })
          })
        ]
      }),
      activeIndex !== null && (0, $.jsx)(LightboxModal, {
        items: customPhotos,
        index: activeIndex,
        onClose: function () { setActiveIndex(null); },
        onPrev: function () {
          setActiveIndex((activeIndex - 1 + customPhotos.length) % customPhotos.length);
        },
        onNext: function () {
          setActiveIndex((activeIndex + 1) % customPhotos.length);
        }
      })
    ]
  });
}
function $c(){return null;}
`;

const zcIdx = js.indexOf('function Zc({');
const elIdx = js.indexOf('function el(){');
if (zcIdx !== -1 && elIdx !== -1) {
  js = js.substring(0, zcIdx) + galleryReplacement + '\n' + js.substring(elIdx);
} else {
  console.error('Could not find Zc or el function in original.js!');
}

fs.writeFileSync('public/assets/index-BNaIo4vQ.js', js);

// 9. Update CSS for gallery, cards, ornaments, and lightbox
let css = fs.readFileSync('original.css', 'utf8');

const additionalCss = `
/* ==========================================================================
   ENHANCED GALLERY, LUXURY FRAMING, COLOR ENHANCEMENT & LIGHTBOX MODAL
   ========================================================================== */

.gallery-stack {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: clamp(3.5rem, 9vh, 5.5rem) !important;
  width: 100% !important;
  max-width: 650px !important;
  margin-inline: auto !important;
}

.gallery-item {
  position: relative !important;
  overflow: hidden !important;
  border-radius: 22px !important;
  cursor: pointer !important;
  width: 100% !important;
  border: 2px solid rgba(212, 175, 55, 0.5) !important;
  background: linear-gradient(160deg, rgba(38, 12, 28, 0.95), rgba(18, 5, 14, 0.98)) !important;
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.88), 0 0 30px rgba(212, 175, 55, 0.22) !important;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease, border-color 0.45s ease !important;
}

.gallery-item:hover, .gallery-item:focus-visible {
  transform: translateY(-8px) scale(1.025) !important;
  border-color: rgba(255, 224, 130, 0.9) !important;
  box-shadow: 0 32px 75px -20px rgba(0, 0, 0, 0.95), 0 0 45px rgba(212, 175, 55, 0.45) !important;
  outline: none !important;
}

.gallery-item--portrait {
  aspect-ratio: 4 / 4.8 !important;
  max-width: 440px !important;
  margin-inline: auto !important;
}

.gallery-item--landscape {
  aspect-ratio: 4 / 3.1 !important;
  max-width: 540px !important;
  margin-inline: auto !important;
}

.gallery-par {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
}

.ph-img.enhanced-photo {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center 20% !important;
  filter: contrast(1.06) brightness(1.04) saturate(1.14) !important;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease !important;
}

.gallery-item:hover .ph-img.enhanced-photo {
  transform: scale(1.05) !important;
  filter: contrast(1.08) brightness(1.07) saturate(1.18) !important;
}

.gallery-item--landscape .ph-img.enhanced-photo {
  object-position: center center !important;
}

.gallery-card-glow {
  position: absolute !important;
  inset: 0 !important;
  pointer-events: none !important;
  background: radial-gradient(circle at center, transparent 35%, rgba(15, 3, 11, 0.55) 100%) !important;
  mix-blend-mode: multiply !important;
  z-index: 1 !important;
}

.card-corner-decor {
  position: absolute !important;
  width: 18px !important;
  height: 18px !important;
  border: 2px solid #d4af37 !important;
  pointer-events: none !important;
  z-index: 3 !important;
  opacity: 0.85 !important;
  transition: all 0.3s ease !important;
}
.card-corner-decor.tl { top: 10px !important; right: 10px !important; border-left: none !important; border-bottom: none !important; border-top-right-radius: 6px !important; }
.card-corner-decor.tr { top: 10px !important; left: 10px !important; border-right: none !important; border-bottom: none !important; border-top-left-radius: 6px !important; }
.card-corner-decor.bl { bottom: 10px !important; right: 10px !important; border-left: none !important; border-top: none !important; border-bottom-right-radius: 6px !important; }
.card-corner-decor.br { bottom: 10px !important; left: 10px !important; border-right: none !important; border-top: none !important; border-bottom-left-radius: 6px !important; }

.gallery-item:hover .card-corner-decor {
  border-color: #ffe48a !important;
  opacity: 1 !important;
  width: 22px !important;
  height: 22px !important;
}

.gallery-zoom-badge {
  position: absolute !important;
  top: 14px !important;
  left: 14px !important;
  z-index: 4 !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.4rem !important;
  background: rgba(18, 5, 14, 0.8) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(212, 175, 55, 0.6) !important;
  color: #f7e8c1 !important;
  font-size: 0.82rem !important;
  font-family: var(--font-heading, "El Messiri", serif) !important;
  padding: 0.35rem 0.8rem !important;
  border-radius: 999px !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6) !important;
  transition: all 0.3s ease !important;
}

.gallery-zoom-badge .zoom-icon {
  width: 14px !important;
  height: 14px !important;
  stroke: #d4af37 !important;
}

.gallery-item:hover .gallery-zoom-badge {
  background: rgba(212, 175, 55, 0.35) !important;
  border-color: #ffd875 !important;
  color: #ffffff !important;
  transform: scale(1.06) !important;
}

.gallery-caption-bar {
  position: absolute !important;
  bottom: 0 !important;
  inset-inline: 0 !important;
  z-index: 3 !important;
  padding: 3rem 1.2rem 1.2rem !important;
  background: linear-gradient(to top, rgba(12, 3, 9, 0.98) 0%, rgba(12, 3, 9, 0.82) 60%, transparent 100%) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 0.35rem !important;
  text-align: center !important;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3) !important;
}

.gallery-caption-title {
  font-family: var(--font-heading, "El Messiri", serif) !important;
  font-size: 1.15rem !important;
  font-weight: 700 !important;
  color: #f0cb75 !important;
  text-shadow: 0 2px 8px rgba(0,0,0,0.9) !important;
}

.gallery-caption-text {
  font-family: var(--font-heading, "El Messiri", serif) !important;
  font-size: 0.95rem !important;
  color: #f9eedc !important;
  line-height: 1.5 !important;
  text-shadow: 0 2px 10px rgba(0,0,0,0.95) !important;
  margin: 0 !important;
}

/* Lightbox Modal */
.lightbox-overlay {
  position: fixed !important;
  inset: 0 !important;
  z-index: 999999 !important;
  background: rgba(8, 2, 6, 0.94) !important;
  backdrop-filter: blur(22px) !important;
  -webkit-backdrop-filter: blur(22px) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 1.2rem !important;
  animation: lbFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

@keyframes lbFade {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

.lightbox-dialog {
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  max-width: 94vw !important;
  max-height: 94vh !important;
}

.lightbox-close-btn {
  position: absolute !important;
  top: -46px !important;
  left: 0 !important;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50 !important;
  border-radius: 50% !important;
  background: rgba(30, 8, 20, 0.88) !important;
  border: 1.5px solid rgba(212, 175, 55, 0.75) !important;
  color: #f5e4b8 !important;
  font-size: 1.2rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  transition: all 0.25s ease !important;
  z-index: 10 !important;
}

.lightbox-close-btn:hover {
  background: rgba(212, 175, 55, 0.4) !important;
  border-color: #ffe082 !important;
  color: #fff !important;
  transform: scale(1.1) rotate(90deg) !important;
}

.lightbox-stage {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: clamp(0.5rem, 2vw, 1.5rem) !important;
  width: 100% !important;
}

.lightbox-nav-btn {
  width: 46px !important;
  height: 46px !important;
  border-radius: 50% !important;
  background: rgba(28, 7, 20, 0.88) !important;
  border: 1.5px solid rgba(212, 175, 55, 0.7) !important;
  color: #f5e4b8 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  transition: all 0.25s ease !important;
  flex-shrink: 0 !important;
}

.lightbox-nav-btn svg {
  width: 24px !important;
  height: 24px !important;
}

.lightbox-nav-btn:hover {
  background: rgba(212, 175, 55, 0.35) !important;
  border-color: #ffe082 !important;
  color: #fff !important;
  transform: scale(1.12) !important;
}

.lightbox-frame {
  position: relative !important;
  border-radius: 20px !important;
  overflow: hidden !important;
  border: 2px solid rgba(212, 175, 55, 0.85) !important;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.96), 0 0 50px rgba(212, 175, 55, 0.35) !important;
  max-height: 68vh !important;
  max-width: 80vw !important;
  background: #000 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.lightbox-full-img {
  max-height: 68vh !important;
  max-width: 80vw !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  display: block !important;
  filter: contrast(1.06) brightness(1.04) saturate(1.14) !important;
}

.lightbox-corner-accent {
  position: absolute !important;
  width: 24px !important;
  height: 24px !important;
  border: 2px solid #e0be6c !important;
  pointer-events: none !important;
  z-index: 2 !important;
}
.lightbox-corner-accent.tl { top: 12px !important; right: 12px !important; border-left: none !important; border-bottom: none !important; border-top-right-radius: 8px !important; }
.lightbox-corner-accent.tr { top: 12px !important; left: 12px !important; border-right: none !important; border-bottom: none !important; border-top-left-radius: 8px !important; }
.lightbox-corner-accent.bl { bottom: 12px !important; right: 12px !important; border-left: none !important; border-top: none !important; border-bottom-right-radius: 8px !important; }
.lightbox-corner-accent.br { bottom: 12px !important; left: 12px !important; border-right: none !important; border-top: none !important; border-bottom-left-radius: 8px !important; }

.lightbox-details {
  margin-top: 1rem !important;
  text-align: center !important;
  max-width: 580px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 0.35rem !important;
}

.lightbox-title {
  color: #f0cb75 !important;
  font-family: var(--font-heading, "El Messiri", serif) !important;
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  margin: 0 !important;
  text-shadow: 0 2px 10px rgba(0,0,0,0.9) !important;
}

.lightbox-caption {
  color: #f7eedc !important;
  font-family: var(--font-heading, "El Messiri", serif) !important;
  font-size: 1.05rem !important;
  line-height: 1.6 !important;
  margin: 0 !important;
  text-shadow: 0 2px 10px rgba(0,0,0,0.9) !important;
}

.lightbox-counter-pill {
  margin-top: 0.3rem !important;
  display: inline-block !important;
  background: rgba(212, 175, 55, 0.18) !important;
  border: 1px solid rgba(212, 175, 55, 0.5) !important;
  color: #f5e4b8 !important;
  padding: 0.2rem 0.9rem !important;
  border-radius: 999px !important;
  font-size: 0.85rem !important;
  font-family: var(--font-body, "Tajawal", sans-serif) !important;
}

}

/* ==========================================================================
   HIGH CONTRAST & RADIANT LUXURY TEXT ENHANCEMENTS
   ========================================================================== */

/* Map Note & Address Text */
.map-note {
  color: #fff8eb !important;
  font-family: var(--font-heading, "El Messiri", serif) !important;
  font-size: 1.12rem !important;
  font-weight: 700 !important;
  background: rgba(28, 8, 22, 0.9) !important;
  border: 1.5px solid rgba(230, 195, 105, 0.8) !important;
  padding: 0.65rem 1.6rem !important;
  border-radius: 999px !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85), 0 0 20px rgba(212, 175, 55, 0.35) !important;
  margin-top: 0.9rem !important;
  display: inline-block !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95) !important;
  letter-spacing: 0.2px !important;
}

/* Arrival Section */
.scene-arrival .arrival-content {
  background: linear-gradient(180deg, rgba(38, 12, 28, 0.92), rgba(20, 5, 16, 0.96)) !important;
  border: 1.5px solid rgba(212, 175, 55, 0.65) !important;
  border-radius: 24px !important;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(212, 175, 55, 0.25) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  padding: 2.2rem 1.6rem !important;
}

.arrival-title {
  color: #fce79f !important;
  text-shadow: 0 0 28px rgba(245, 218, 138, 0.65), 0 2px 8px rgba(0, 0, 0, 0.9) !important;
  font-size: clamp(1.8rem, 6.5vw, 2.5rem) !important;
  font-weight: 700 !important;
}

.arrival-sub {
  color: #fff4db !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  line-height: 1.9 !important;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95) !important;
}

/* Closing Section */
.scene-closing .closing-content {
  background: linear-gradient(180deg, rgba(38, 12, 28, 0.94), rgba(18, 4, 14, 0.98)) !important;
  border: 1.5px solid rgba(212, 175, 55, 0.7) !important;
  border-radius: 24px !important;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.92), 0 0 40px rgba(212, 175, 55, 0.3) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  padding: 2.4rem 1.8rem !important;
}

.closing-dua {
  color: #fde8a0 !important;
  text-shadow: 0 0 30px rgba(253, 232, 160, 0.7), 0 2px 8px rgba(0, 0, 0, 0.9) !important;
  font-size: clamp(1.75rem, 6.5vw, 2.4rem) !important;
  font-weight: 700 !important;
  line-height: 1.8 !important;
}

.closing-thanks {
  color: #ffffff !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.95) !important;
  margin: 0.5rem 0 !important;
}

.closing-footer {
  color: #f7e6be !important;
  font-size: 1.05rem !important;
  font-weight: 600 !important;
  background: rgba(212, 175, 55, 0.22) !important;
  border: 1px solid rgba(212, 175, 55, 0.55) !important;
  padding: 0.5rem 1.4rem !important;
  border-radius: 999px !important;
  display: inline-block !important;
  margin-top: 1.6rem !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95) !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6) !important;
}

/* RSVP Text */
.rsvp-text {
  color: #fff6e4 !important;
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  line-height: 2 !important;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9) !important;
}

/* General Signpost Body text readability */
.signpost-body {
  color: #fff6e4 !important;
  font-size: 1.1rem !important;
  font-weight: 500 !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.85) !important;
}

.count-caption {
  color: #faebd0 !important;
  font-size: 1.05rem !important;
  font-weight: 600 !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.85) !important;
}

.date-main {
  color: #ffffff !important;
  font-weight: 700 !important;
  text-shadow: 0 2px 10px rgba(0,0,0,0.9) !important;
}

.date-hijri {
  color: #fde8a0 !important;
  font-weight: 600 !important;
  font-size: 1.08rem !important;
  text-shadow: 0 2px 8px rgba(0,0,0,0.85) !important;
}

.kicker {
  color: #ffdf85 !important;
  font-weight: 700 !important;
  text-shadow: 0 0 15px rgba(255, 223, 133, 0.45) !important;
}
`;

fs.writeFileSync('public/assets/index-YZphGmre.css', css + additionalCss);
fs.writeFileSync('public/bundle.css', css + additionalCss);

// 10. Update MapScene
let mapJs = fs.readFileSync('public/assets/MapScene-Oi2yY4XI.js', 'utf8');
mapJs = mapJs.split('مكان الفرح على الخريطة').join('مكان الخطوبة على الخريطة');
mapJs = mapJs.split('قاعة التراث').join('أمام البيت');
mapJs = mapJs.split('طلخا، المنصورة').join('السجاعية');
mapJs = mapJs.split('طلخا — الدقهلية').join('عند محطة المياه الكبيرة بالسجاعية - أرض السمسار');
mapJs = mapJs.split('افتح القاعة في Google Maps').join('افتح الموقع في Google Maps');
fs.writeFileSync('public/assets/MapScene-Oi2yY4XI.js', mapJs);

// 11. Sync venue directory & og-cover
fs.mkdirSync('public/venue', { recursive: true });
fs.copyFileSync('public/images/custom2.jpg', 'public/venue/facade.jpg');
fs.copyFileSync('public/images/custom2.jpg', 'public/venue/hall-1.jpg');
fs.copyFileSync('public/images/custom3.jpg', 'public/venue/hall-2.jpg');
fs.copyFileSync('public/images/custom2.jpg', 'public/og-cover.png');

console.log('Successfully applied all custom photos, luxury frames, color enhancement, and interactive Lightbox!');
