const express = require('express');
const router = express.Router();
const faker = require('faker');


router.get('/', (req, res) => {
	  
	  var  events = [
	  		{"name_museum": "<<Страна мини>> музей миниатюр",
	  		 "city_museum":"Город Минск",
	  		 "address_museum": "проспект Независимости 25",
	  		 "mobile_phone":"8029151-151-56-70",
	  		 "type_museum":"Музей архитекруных миниатюр",
	  		 "rating_museum":"4.9/5"	
	  		},

	  		{"name_museum":"Национальный художественный музей Республики Беларусь",
	  		 "city_museum":"Город Минск",
	  		 "address_museum": "улица Ленина 20",
	  		 "mobile_phone":"8 017 327-71-63",
	  		 "type_museum":"Крупнейший музей художественного профиля",
	  		 "rating_museum":"4.7/5"	
	  		},

	  		{"name_museum": "Музей истории Великой Отечественной войны",
	  		 "city_museum":"Город Минск",
	  		 "address_museum": "пр-т. Победителей 8",
	  		 "mobile_phone":"8 017 327-11-66",
	  		 "type_museum":"Музей истории Великой Отечественной войны",
	  		 "rating_museum":"4.8/5"	
	  		},

	  		{"name_museum": "Национальный исторический музей Республики Беларусь",
	  		 "city_museum":"Город Минск",
	  		 "address_museum": "ул. Карла Маркса 12",
	  		 "mobile_phone":" 8 017 327-36-65",
	  		 "type_museum":"Крупнейший по числу единиц хранения музей",
	  		 "rating_museum":"4.5/5"	
	  		},
	  	];


	  /*	var news = [
	  		{"name": "Кино",
	  		 "time": faker.date.future(),
	  		 "place": faker.address.streetAddress(),
	  		 "rating":"7/10",
	  		 "location": ""+ faker.address.latitude()  + "  ;  " + faker.address.longitude(),
	  		 "type":"Представление"
	  		},

	  		{"name": "Театр",
	  		 "time": faker.date.future(),
	  		 "place": faker.address.streetAddress(),
	  		 "rating":"8/10",
	  		 "location": ""+ faker.address.latitude()  + "  ;  " + faker.address.longitude(),
	  		 "type":"Выступление"
	  		},
	  		{"name": "Концерт",
	  		 "time": faker.date.future(),
	  		 "place": faker.address.streetAddress(),
	  		 "rating":"10/10",
	  		 "location": ""+ faker.address.latitude()  + "  ;  " + faker.address.longitude(),
	  		 "type":"Выступление"
	  		},
	  		{"name": "Выставка Картин",
	  		 "time": faker.date.future(),
	  		 "place": faker.address.streetAddress(),
	  		 "rating":"5/10",
	  		 "location": ""+ faker.address.latitude()  + "  ;  " + faker.address.longitude(),
	  		 "type":"Выставка"
	  		},
	  		{"name": "Цирк",
	  		 "time": faker.date.future(),
	  		 "place": faker.address.streetAddress(),
	  		 "rating":"7/10",
	  		 "location": ""+ faker.address.latitude()  + "  ;  " + faker.address.longitude(),
	  		 "type":"Выступление"
	  		}
	  	];
*/
res.render('index', 
	{"events": events}
	);
});

module.exports = router;