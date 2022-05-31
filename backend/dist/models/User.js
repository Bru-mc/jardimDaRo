"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
const Users = (0, mongoose_1.model)('users', userSchema);
exports.default = Users;
