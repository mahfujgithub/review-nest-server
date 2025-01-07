"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = buildNestedUpdateQuery;
function buildNestedUpdateQuery(payload, prefix = '') {
    const updateQuery = {};
    Object.keys(payload).forEach(key => {
        const path = prefix ? `${prefix}.${key}` : key;
        if (Array.isArray(payload[key])) {
            updateQuery[path] = payload[key]; // Replace whole array
        }
        else if (typeof payload[key] === 'object' && payload[key] !== null) {
            Object.assign(updateQuery, buildNestedUpdateQuery(payload[key], path));
        }
        else {
            updateQuery[path] = payload[key];
        }
    });
    return updateQuery;
}
