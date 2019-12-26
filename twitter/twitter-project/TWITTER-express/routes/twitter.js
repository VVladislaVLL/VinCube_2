const express = require('express');
const router = express.Router();
const faker = require('faker/locale/ru');

/* GET home page. */
router.get('/names', (req, res) => {
    var names = [
    {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "img":faker.image.avatar()
    },
  {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "img":faker.image.avatar()
    },
      {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "img":faker.image.avatar()
    },
      {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "img":faker.image.avatar()
    },
      {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "img":faker.image.avatar()
    }
    ];

  res.render('names', {"names":names});
});

module.exports = router;