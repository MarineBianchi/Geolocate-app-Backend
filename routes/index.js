var express = require('express');
var router = express.Router();

require('../models/connection');
const Place = require('../models/places');

// Créer et enregistrer des nouveuax marques/endroits
router.post('/places', (req, res) => {

  const newPlace = new Place({
        nickname: req.body.nickname,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      });

      newPlace.save().then(newDoc => {
        res.json({ result: true });
      });
});

// Afficher les endroits enregistrés par un utilisateur
router.get('/places/:nickname', (req, res) => {
    Place.find({ nickname: req.params.nickname}).then(data => {
       console.log(data)
        // console.log(data.places);
        res.json({ result: true, places : data});
     
    });
  });

// Supprimer les endroits enregistrés chez un utilisateur
  router.delete("/places", (req, res) => {
    Place.deleteOne({ nickname: req.body.nickname, name: req.body.name })
    .then(data => {
        console.log(data)
        if (data.deletedCount >=1) {

            res.json({ result: true, message: 'User deleted'});
      
        } else {

            res.json({ result: false, message: "Wissem est mon hero" });
        }

    
    });
  });



module.exports = router;
