const express = require("express");

const router = express.Router();

// ─── Tarefa A — Acervo (Livros) ───────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const livros = ["Orgulho e Preconceito (Jane Austen)","Verity (Colleen Hoover)","1984 (George Orwell)","Vidas Secas (Graciliano Ramos)","Dom Casmurro (Machado de Assis)","O Pequeno Príncipe (Antoine de Saint-Exupéry)","O Alquimista (Paulo Coelho)","A Garota no Trem (Paula Hawkins)"];
let proximoId = 1;

// GET /livros — lista todos os livros do acervo.
router.get("/", (req, res) => {
    res.status(200).json (livros)


  // TODO (Tarefa A): responda com status 200 e o array `livros`.
  res.status(501).json({ erro: "não implementado" });
});

// POST /livros — cadastra um livro { titulo, autor } (ambos TEXTO/string).
router.post("/", (req, res) => {
  const{titulo,autor} = req.body

  if (!titulo || !autor ){
   return res.status(400).json({erro: "so pode ser os dois abesTA-DO!"})
  }

  const Novolivro = {id:proximoId++,titulo,autor};
  livros.push(Novolivro)

  return res.status(201).json(Novolivro)
});

  // TODO (Tarefa A):
  //  1. Leia titulo (texto) e autor (texto) de req.body.
  //  2. Se faltar titulo OU autor, responda 400.
  //  3. Crie { id: proximoId++, titulo, autor }, adicione em `livros`
module.exports = router;
