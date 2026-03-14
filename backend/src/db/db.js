"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = __importDefault(require("pg"));
var Pool = pg_1.default.Pool;
var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_rpg',
    password: 'password',
    port: 5432,
});
exports.default = pool;
