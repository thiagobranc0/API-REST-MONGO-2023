import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const autoresLista = await autor.find({});
      res.status(200).json(autoresLista);
    } catch (e) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (e) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do autor` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao atualizar Autor!` });
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor excluído com sucesso!" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao excluir autor!` });
    }
  }
}

export default AutorController;
