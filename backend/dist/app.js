"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
dbConnect_1.default.on("Error", console.log.bind(console, "Erro de conexao"));
dbConnect_1.default.once("open", () => console.log("Conexão com o banco feita com sucesso"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!!');
});
app.listen(5000, () => console.log("server running at port 5000"));
