'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
const express_1 = __importDefault(require('express'));
require('dotenv/config');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server start at ${PORT}`);
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
module.exports = app;
