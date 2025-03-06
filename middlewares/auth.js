const dotenv = require('dotenv');
dotenv.config();

// Middleware que verifica se o token de autenticação é válido
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token || token !== `Bearer ${process.env.SECRET_TOKEN}`) {
    return res.status(403).json({ error: 'Acesso negado' });
  }

  next();
};

module.exports = authMiddleware;