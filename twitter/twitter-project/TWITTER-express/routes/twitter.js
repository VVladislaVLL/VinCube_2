const express = require('express');
const router = express.Router();
const faker = require('faker/locale/ru');

/* GET home page. */
<<<<<<< HEAD
router.get('/news', (req, res) => {
=======
<<<<<<< HEAD
router.get('/names', (req, res) => {
    var names = [
=======
router.get('/cities', (req, res) => {
>>>>>>> 48fea7813b76cd6e72c8ea8e9b317c58cbd3c5a3
    var dates = [
>>>>>>> 9f812f4142d0828ce7eb243efedf7fe89abc27c0
    {
<<<<<<< HEAD
        "news":"В Бресте прошло открытие главной елки города", "autor": "BrestNews"
    },
    {
        "news":"Ожидается похолодание, будет снег, ожидается гололедица", "autor": "Minsk-Weather"
=======
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName()
    },
  {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName()
    },
<<<<<<< HEAD
      {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName()
    },
      {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName()
>>>>>>> 48fea7813b76cd6e72c8ea8e9b317c58cbd3c5a3
    },
      {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName()
    }
    ];

  res.render('names', {"names":names});
});
=======
    {
        "news":"Движение поездов приостановлено в связи с поломкой состава между станциями Малиновка - Петровщина", "autor": "Mins-Metro"
    },
    {
        "news":"Встречайте Деда Мороза!", "autor": "BelPush"
    }
    ];

  res.render('news', {"news":news});
});


>>>>>>> 9f812f4142d0828ce7eb243efedf7fe89abc27c0

<<<<<<< HEAD
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
=======

>>>>>>> 48fea7813b76cd6e72c8ea8e9b317c58cbd3c5a3
module.exports = router;