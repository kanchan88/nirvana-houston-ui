/* =============================================================
   Nirvana Indian Restaurant — Single source of truth.
   Change business details, links, and ordering URL HERE only.
   ============================================================= */
window.NIRVANA = {
  name: "Nirvana",
  tagline: "Indian Restaurant",

  // CRITICAL: the one Toast online-ordering URL. One tap → Toast.
  TOAST_ORDER_URL: "https://order.toasttab.com/online/nirvana-houston",

  phone: "(281) 496-3232",
  phoneHref: "tel:+12814963232",

  email: "hello@nirvanahouston.com",

  address: {
    line1: "14545 Memorial Drive",
    line2: "Houston, TX 77079",
    full: "14545 Memorial Drive, Houston, TX 77079",
    mapsUrl: "https://maps.google.com/?q=Nirvana+14545+Memorial+Drive+Houston+TX+77079",
    geo: { lat: 29.7805, lng: -95.5910 },
  },

  hours: [
    { day: "Mon – Thu", time: "11:30 AM – 10:00 PM" },
    { day: "Fri – Sat", time: "11:30 AM – 11:00 PM" },
    { day: "Sunday",    time: "12:00 PM – 9:30 PM" },
  ],
  hoursTeaser: "Open today till 10 PM",

  buffet: {
    label: "Lunch Buffet",
    blurb: "An all-you-can-savour spread of tandoori, curries, biryani & fresh naan.",
    price: "$16.95",
    days: "Daily, 11:30 AM – 3:00 PM",
  },

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    google: "https://maps.google.com/?q=Nirvana+Indian+Restaurant+Houston",
  },

  // Catering inquiry endpoint (wire to CRM/email service in production).
  cateringEndpoint: "",

  googlePlaceId: "",
};
