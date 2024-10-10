var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout: "main" });
});

router.get('/ketersediaan', function(req, res, next) {
  const ketersediaan = [
    { id: 1, type: 'Superior'},
    { id: 2, type: 'Deluxe'},
    { id: 3, type: 'Executive Suite'}
  ];
res.json({title:'Ketersedian kamar',ketersediaan});
});

router.get('/fasilitas', function(req, res, next) {
  const fasilitas = [
    { id: 1, name: 'Wi-Fi'},
    { id: 2, name: 'AC'},
    { id: 3, name: 'Kolam Renang'},
    { id: 4, name: 'Gym'},
    { id: 5, name: 'Restoran'}
  ];
res.json({title: 'Fasilitas',fasilitas});
});

router.get('/tipeKamar', function(req, res, next) {
  const tipeKamar = [
    { id: 1, name: 'Superior', price: 100 },
    { id: 2, name: 'Deluxe', price: 150 },
    { id: 3, name: 'Executive Suite', price: 300 }
  ];
res.json({title:'Tipe Kamar',tipeKamar});
});

module.exports = router;
