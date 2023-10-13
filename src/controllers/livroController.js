import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const livrosLista = await livro.find({});
      res.status(200).json(livrosLista);
    } catch (e) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (e) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do livro` });
    }
  }

  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - falha ao cadastrar livro` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao atualizar livro!` });
    }
  }

  static async excluirLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro excluído com sucesso!" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao excluído livro!` });
    }
  }
}

export default LivroController;
