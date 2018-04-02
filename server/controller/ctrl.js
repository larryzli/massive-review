// export methods
module.exports = {
  // get single pokemon
  getPokemon: (req, res) => {
    // get id off params
    const { id } = req.params;

    // get db off app
    const db = req.app.get("db");

    // run sql statement
    db
      .get_pokemon([id])
      .then(response => {
        // send data back
        res.status(200).json(response);
      })
      .catch(res.status(500).send()); // error
  }
};
