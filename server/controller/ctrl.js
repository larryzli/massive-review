module.exports = {
  getPokemon: (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    db
      .get_pokemon([id])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(res.status(500).send());
  }
};
