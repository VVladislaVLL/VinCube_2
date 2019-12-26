const express = require('express');
const router = express.Router();
const faker = require('faker/locale/ru');

/* GET home page. */
<<<<<<< HEAD
router.get('/names', (req, res) => {
    var names = [
=======
router.get('/cities', (req, res) => {
    var dates = [
>>>>>>> 9f812f4142d0828ce7eb243efedf7fe89abc27c0
    {
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
        "dates":"12.06.19"
    }
    ];

  res.render('dates', {"dates":dates});
});


>>>>>>> 9f812f4142d0828ce7eb243efedf7fe89abc27c0


module.exports = router;