const express = require('express');
const router = express.Router();
const faker = require('faker/locale/ru');

/* GET home page. */
router.get('/cities', (req, res) => {
    var dates = [
    {
        "dates":"12.06.19"
    },
    {
        "dates":"12.06.19"
    },
    {
        "dates":"12.06.19"
    }
    ];

  res.render('dates', {"dates":dates});
});



router.get('/animal', (req, res) => {
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
});
module.exports = router;