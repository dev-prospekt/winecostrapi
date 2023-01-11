'use strict';

/**
 * wine-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wine-list.wine-list');
