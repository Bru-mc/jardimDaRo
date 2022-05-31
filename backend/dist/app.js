"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://localhost/jardimDaRo').then(() => {
    console.log("Conexão realizada com sucesso");
}).catch((error) => {
    console.log("ERROUUUUUUU");
});
app.get('/', (req, res) => {
    res.send('Hello World!!');
});
app.listen(5000, () => console.log("server running at port 5000"));
