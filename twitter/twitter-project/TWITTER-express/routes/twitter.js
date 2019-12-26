const express = require('express');
const router = express.Router();
const faker = require('faker/locale/ru');

/* GET home page. */
router.get('/news', (req, res) => {
    var dates = [
    {
        "news":"В Бресте прошло открытие главной елки города", "autor": "BrestNews"
    },
    {
        "news":"Ожидается похолодание, будет снег, ожидается гололедица", "autor": "Minsk-Weather"
    },
    {
        "news":"Движение поездов приостановлено в связи с поломкой состава между станциями Малиновка - Петровщина", "autor": "Mins-Metro"
    },
    {
        "news":"Встречайте Деда Мороза!", "autor": "BelPush"
    }
    ];

  res.render('news', {"news":news});
});



/*router.get('/animal', (req, res) => {
    var animal = [
    {
        "animal":"volk"
    },
    {
        "animal":"volk"
    },
    {
        "animal":"volk"
    }
    ];

  res.render('animal', {"animal":animal});
});*/
module.exports = router;