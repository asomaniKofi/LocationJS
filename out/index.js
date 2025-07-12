"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const Location_1 = __importDefault(require("./Model/Location"));
const AreaSeeds_1 = __importDefault(require("./Model/AreaSeeds"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const MONGO_URL = process.env.MONGO_URL || '';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('tiny'));
mongoose_1.default.connect(MONGO_URL)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: { message: err.message } });
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} | Env: ${NODE_ENV}`);
});
app.get('/getLocation/?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { location } = req.query;
    if (!location) {
        return res.status(400).json({ error: "Missing or invalid 'location' parameter" });
    }
    try {
        const loc = yield Location_1.default.findOne({ Name: req.query.location });
        if (!loc) {
            return res.status(404).json({ error: 'Location not found' });
        }
        return res.json(loc);
    }
    catch (err) {
        return res.status(500).json({ error: 'Server error' });
    }
}));
app.get('/getLocationArea/?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { area } = req.query;
    if (!area) {
        return res.status(400).json({ error: "Missing or invalid 'area' parameter" });
    }
    try {
        const areaData = yield AreaSeeds_1.default.findOne({ Name: area });
        if (!areaData) {
            return res.status(404).json({ error: 'Area not found' });
        }
        ;
        return res.json(areaData);
    }
    catch (err) {
        return res.status(500).json({ error: 'Server error' });
    }
}));
exports.default = app;
//# sourceMappingURL=index.js.map