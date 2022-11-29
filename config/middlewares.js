module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      // contentSecurityPolicy: false,
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com','https://res.cloudinary.com', 'https://dl.airtable.com', "'self' data: blob: https://dl.airtable.com"],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // 'strapi::security',
   'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
