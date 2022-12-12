"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', function (req, res) { return res.status(200).send('Salut ca va ?'); });
app.use('*', function (req, res) { return res.status(404).send('Retour arrière frérot'); });
app.listen(process.env.SERVER_PORT, function () {
    console.log("Le serveur est OK sur le port ".concat(process.env.SERVER_PORT));
});
