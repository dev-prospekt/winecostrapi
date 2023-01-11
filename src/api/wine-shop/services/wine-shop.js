'use strict';

/**
 * wine-shop service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wine-shop.wine-shop');
