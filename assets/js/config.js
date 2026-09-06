/* =========================================================
   LZG DIGITAL — EDITABLE BUSINESS CONFIGURATION
   Change business details, pricing, services and CTA copy here.
   ========================================================= */
const SITE_CONFIG = {
  brand: {
    name: "LZG Digital",
    shortName: "LZG",
    tagline: "Built to be found.",
    description:
      "LZG Digital helps local businesses improve their Google visibility with Local SEO, MEO, professional websites, digital authority and ongoing website management."
  },

  contact: {
    email: "Ricopack0117@gmail.com",
    phone: "0681 195 089",
    whatsapp: "+255681195089",
    location: "Online-based",
    responseNote: "Online enquiries are handled during our listed availability hours."
  },

  availability: {
    label: "Online enquiries",
    monday: "08:00 – 18:00",
    tuesday: "08:00 – 18:00",
    wednesday: "08:00 – 18:00",
    thursday: "08:00 – 18:00",
    friday: "08:00 – 18:00",
    saturday: "08:00 – 18:00",
    sunday: "Closed"
  },

  socials: {
    instagram: "",
    linkedin: "",
    facebook: "",
    x: ""
  },

  cta: {
    primary: "Book a Call Now",
    secondary: "Explore Our Services",
    contact: "Start a Conversation",
    audit: "Check Your Digital Presence",
    service: "Discuss This Service",
    work: "View Our Work"
  },

  pricing: {
    seoStarter: "TZS 150,000 / month",
    seoGrowth: "TZS 300,000 / month",
    seoPro: "TZS 500,000 / month",
    websiteStarter: "TZS 350,000",
    websiteBusiness: "TZS 650,000",
    websiteGrowth: "TZS 950,000",
    management: "From TZS 100,000 / month",
    linkStarter: "TZS 150,000",
    linkAuthority: "TZS 300,000",
    linkGrowth: "TZS 500,000"
  },

  seo: {
    siteUrl: "https://lzg-digital.github.io/lzg-digital/",
    defaultTitle: "LZG Digital | Local SEO, MEO & Web Development",
    defaultDescription:
      "LZG Digital helps local businesses improve their Google visibility with Local SEO, MEO, professional websites, digital authority and ongoing website management."
  }
};

function applyConfig() {
  document.querySelectorAll("[data-brand]").forEach(el => el.textContent = SITE_CONFIG.brand.name);
  document.querySelectorAll("[data-short-brand]").forEach(el => el.textContent = SITE_CONFIG.brand.shortName);
  document.querySelectorAll("[data-tagline]").forEach(el => el.textContent = SITE_CONFIG.brand.tagline);
  document.querySelectorAll("[data-email]").forEach(el => {
    el.textContent = SITE_CONFIG.contact.email;
    if (el.tagName === "A") el.href = `mailto:${SITE_CONFIG.contact.email}`;
  });
  document.querySelectorAll("[data-phone]").forEach(el => {
    el.textContent = SITE_CONFIG.contact.phone;
    if (el.tagName === "A") el.href = `tel:${SITE_CONFIG.contact.phone.replace(/[^\d+]/g, "")}`;
  });
  document.querySelectorAll("[data-location]").forEach(el => el.textContent = SITE_CONFIG.contact.location);

  document.querySelectorAll("[data-cta]").forEach(el => {
    const key = el.dataset.cta;
    if (SITE_CONFIG.cta[key]) el.textContent = SITE_CONFIG.cta[key];
  });

  document.querySelectorAll("[data-price]").forEach(el => {
    const key = el.dataset.price;
    if (SITE_CONFIG.pricing[key]) el.textContent = SITE_CONFIG.pricing[key];
  });

  document.querySelectorAll("[data-hours]").forEach(el => {
    const key = el.dataset.hours;
    if (SITE_CONFIG.availability[key]) el.textContent = SITE_CONFIG.availability[key];
  });

  document.querySelectorAll("[data-social]").forEach(el => {
    const key = el.dataset.social;
    const url = SITE_CONFIG.socials[key];
    if (url) {
      el.href = url;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-whatsapp]").forEach(el => {
    const number = SITE_CONFIG.contact.whatsapp.replace(/\D/g, "");
    const text = encodeURIComponent(
      `Hello ${SITE_CONFIG.brand.name}, I'd like to discuss a project.`
    );
    el.href = `https://wa.me/${number}?text=${text}`;
  });
}

document.addEventListener("DOMContentLoaded", applyConfig);
