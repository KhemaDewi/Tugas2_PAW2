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
res.render('ketersediaan', { title: 'Ketersedian Kamar',ketersediaan, layout: "main" })
});

router.get('/fasilitas', function(req, res, next) {
  const fasilitas = [
    { id: 1, name: 'Wi-Fi'},
    { id: 2, name: 'AC'},
    { id: 3, name: 'Kolam Renang'},
    { id: 4, name: 'Gym'},
    { id: 5, name: 'Restoran'}
  ];
res.render('fasilitas', { title: 'Fasilitas Kamar',fasilitas, layout: "main" })
});

module.exports = router;
