import BoardgameModel from "../models/boardgame.js";
import UserModel from "../models/user.js";

export const getAllBoardgames = async (req, res) => {
  const boardgames = await BoardgameModel.find();

  return res.json({ boardgames: boardgames });
};

export const getBoardgameById = async (req, res) => {
  const id = req.params.id;
  const userId = req.body.userId;
  const boardgame = await BoardgameModel.findOne({ _id: id }).lean();

  if (!boardgame) {
    return res.status(404).json({ message: `No boardgame with id: ${id}` });
  }

  const user = await UserModel.findOne({ id: userId });

  const isSavedToUser = user?.savedBoardgames?.includes(id);

  return res.json({
    boardgame: { ...boardgame, isSavedToUser: isSavedToUser },
  });
};
