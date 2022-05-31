"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
(0, mongoose_1.connect)('mongodb+srv://jardimdaro:rosangela789@jardimdaro.4xbah.mongodb.net/jardimDaRo');
let db = mongoose_1.connection;
exports.default = db;
