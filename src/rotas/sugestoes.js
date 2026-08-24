const express = require("express");

const router = express.Router();

// ─── Tarefa C — Sugestões de compra + votação ─────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const sugestoes = [];
let proximoId = 1;

// GET /sugestoes — lista as sugestões, cada uma com sua contagem de votos.
router.get("/", (req, res) => {
  try {

    res.send(sugestoes);
    
  } catch (e) {

    res.status(501).json({ erro: "não implementado" });

  }
});

// POST /sugestoes — cria uma sugestão { titulo } (TEXTO), começando com 0 votos.
router.post("/", (req, res) => {
  const sugestao = req.body;
  console.log(Boolean(sugestao.titulo))

  try {
    if (!sugestao.titulo || typeof sugestao.titulo !== "string") {
      res.status(400).json({ erro: "título inválido" });
    }

    sugestao.id = proximoId;
    sugestao.votos = 0
    proximoId++;

    res.status(201).json({ sugestao });

  } catch (e) {

    res.status(501).json({ erro: "não implementado" });

  }
  // TODO (Tarefa C):
  //  1. Leia titulo (texto) de req.body.
  //  2. Se faltar titulo, responda 400.
  //  3. Crie { id: proximoId++, titulo, votos: 0 }, adicione em `sugestoes`
  //     e responda 201 com a sugestão criada.
});

// POST /sugestoes/voto — registra um voto na sugestão de id informado { id }.
router.post("/voto", (req, res) => {
  // TODO (Tarefa C):
  //  1. Leia id de req.body.
  //  2. Encontre a sugestão com esse id. Se não existir, responda 400.
  //  3. Incremente votos dessa sugestão e responda 200 com a sugestão atualizada.
  res.status(501).json({ erro: "não implementado" });
});

module.exports = router;
