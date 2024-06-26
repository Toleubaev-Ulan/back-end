const favoriteService = require("../services/favoriteService");

async function addFavorite(req, res) {
  try {
    const { uid, rid } = req.body;
    const favorite = await favoriteService.addFavorite(uid, rid);
    res.status(200).json({
      result_code: 0,
      result_msg: "Success!",
      data: { rows: favorite },
    });
  } catch (error) {
    res.status(400).json({ result_code: -1, result_msg: error.message });
  }
}

async function listFavorites(req, res) {
  try {
    const { uid } = req.body;
    const favorites = await favoriteService.listFavorites(uid);
    res.json({ result_code: 0, result_msg: "Success!", data: { recordcount: favorites.length, rows: favorites } });
  } catch (error) {
    res.status(500).json({ result_msg: error.message });
  }
}

async function removeFavorite(req, res) {
  try {
    const { uid, rid } = req.body;
    await favoriteService.removeFavorite(uid, rid);
    res.status(200).json({ result_code: 0, result_msg: "Success!" });
  } catch (error) {
    res.status(500).json({ result_msg: error.message });
  }
}

module.exports = {
  addFavorite,
  listFavorites,
  removeFavorite,
};
