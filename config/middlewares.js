// file: config/middlewares.js
module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    // ما رشته 'strapi::cors' را با این آبجکت جایگزین می‌کنیم
    name: 'strapi::cors',
    config: {
      enabled: true,
      // به همه‌جا اجازه می‌دهد (برای تست)
      origin: ['*'], 
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];