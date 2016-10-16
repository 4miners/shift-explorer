'use strict';

var orders = require('../orders'),
    _ = require('underscore');

module.exports = function (app) {
    var poloniex = new orders.poloniex(app.locals.redis);
    var bittrex = new orders.bittrex(app.locals.redis);

    this.getOrders = function (e, error, success) {
        if (!app.get('orders enabled')) {
            return success({ success : true, orders : [] });
        }

        validExchange(e).restoreOrders(function (err, reply) {
            if (err) {
                return error({ success : false });
            } else {
                return success({ success : true, orders : reply });
            }
        });
    };

    // Private

    var validExchange = function (e) {
        if (e === 'poloniex') {
            return poloniex;
        } else if (e === 'bittrex') {
            return bittrex;
        } else {
            return null;
        }
    };
};
