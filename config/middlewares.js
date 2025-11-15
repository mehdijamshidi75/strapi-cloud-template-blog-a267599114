module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

module.exports.settings = {
  cors: {
    enabled: true,
    origin: [
      'https://*.stackblitz.com',
      'https://*.stackblitz.io', 
      'https://*.webcontainer.io',
      'http://localhost:3000',
      'http://localhost:1337'
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    keepHeadersOnError: true,
  },
};