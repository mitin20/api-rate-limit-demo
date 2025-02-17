const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const app = express();
const port = 4000;

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Ruta vulnerable
app.get("/api/vulnerable", (req, res) => {
  res.json({ message: "¡Soy una API sin defensas! 🚨" });
});

// Activamos protección
app.use(helmet());

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 100,
  message: "¡Uy, demasiadas peticiones! 🔥",
  standardHeaders: true,
  handler: (req, res) => {
    console.log(`🚨 IP ${req.ip} BLOQUEADA por rate limit!`);
    res.status(429).json({ error: "¡Demasiadas peticiones!" });
  },
});

app.use(limiter);

// Ruta protegida
app.get("/api/protegida", (req, res) => {
  res.json({ message: "¡Estoy blindada contra ataques! 🛡️" });
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
