"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
function getRandNumber(min, max) {
    console.log('lodash version:', _.VERSION);
    return _.random(min, max);
}
exports.getRandNumber = getRandNumber;
//# sourceMappingURL=numbers.js.map