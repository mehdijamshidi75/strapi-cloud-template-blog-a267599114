// file: config/middlewares.js
module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    // ما رشته 'strapi::cors' را با این آبجکت جایگزین می‌کنیم
    name: 'strapi::cors',
    config: {
      enabled: true,
      // ما از تنظیماتی که خودتان نوشته بودید + یک ستاره (*) برای اطمینان استفاده می‌کنیم
      origin: [
        'https://stackblitz.com',
        'https://*.stackblitz.io', // برای همه زیردامنه‌های stackblitz
        'http://localhost:3000',
        'http://localhost:1337',
        '*' // به عنوان پشتیبان، به همه‌جا اجازه می‌دهد
      ],
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