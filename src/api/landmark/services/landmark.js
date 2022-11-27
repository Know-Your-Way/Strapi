'use strict';

/**
 * landmark service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::landmark.landmark');
