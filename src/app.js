const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { swaggerUi, specs } = require("./swagger/swagger");

const authRoutes = require("./routes/auth.routes");
const internalRoutes = require("./routes/internal.routes");
const oauthRoutes = require("./routes/oauth.routes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/internal", internalRoutes);
app.use("/api/v1/oauth", oauthRoutes);
app.use("/internal", internalRoutes);
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
