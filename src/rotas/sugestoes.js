const express = require("express");

const router = express.Router();

const sugestoes = [];
let proximoId = 1;

router.get("/", (req, res) => {
  try {

    res.send(sugestoes);

  } catch (e) {

    res.status(501).json({ erro: "não implementado" });

  }
});

router.post("/", (req, res) => {
  const sugestao = req.body;

  try {
    if (!sugestao.titulo || typeof sugestao.titulo !== "string") {
      res.status(400).json({ erro: "título inválido" });
    }

    sugestao.id = proximoId;
    sugestao.votos = 0
    proximoId++;

    sugestoes.push(sugestao);

    res.status(201).json({ sugestao });

  } catch (e) {

    res.status(501).json({ erro: "não implementado" });

  }
});


router.post("/voto", (req, res) => {
  const id = req.body.id;

  try {
    if (!id) {
      return res.status(400).json({ erro: "ID nulo" });
    }

    const sugestao = sugestoes.find(sugestao => sugestao.id === id);

    if (!sugestao) {
      return res.status(400).json({
        erro: "Não há nenhuma sugestão com tal ID"
      });
    }

    sugestao.votos++;

    return res.status(200).json({
      mensagem: "Voto registrado com sucesso",
      sugestao
    });

  } catch (e) {
    return res.status(501).json({ erro: "não implementado" });
  }
});


module.exports = router;
