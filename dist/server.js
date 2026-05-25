"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskRoute_1 = __importDefault(require("./routes/taskRoute"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", taskRoute_1.default);
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        uptime: process.uptime()
    });
});
app.listen(3000, () => {
    console.log("Server running");
});
//# sourceMappingURL=server.js.map