import BoardgameModel from "../models/boardgame.js";

export const getAllBoardgames = async (req, res) => {
  const boardgames = await BoardgameModel.find();

  return res.json({ boardgames: boardgames });
};

export const getBoardgameById = async (req, res) => {
  const id = req.params.id;
  const boardgame = await BoardgameModel.findOne({ id: id });

  if (!boardgame) {
    return res.status(404).json({ message: `No boardgame with id: ${id}` });
  }

  if (boardgame?.userId !== req.body.userId) {
    return res.status(401).json({ message: `${id} does not belong to you` });
  }

  return res.json({ boardgame: boardgame });
};
