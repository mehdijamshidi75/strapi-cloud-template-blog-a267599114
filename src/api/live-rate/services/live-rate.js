'use strict';

/**
 * live-rate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-rate.live-rate');
