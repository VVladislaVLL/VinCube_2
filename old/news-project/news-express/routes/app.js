const express = require('express');
const router = express.Router();
const faker = require('faker');




/* GET home page. */
/*router.get('/stations', (req, res) => {
	  
	  var stations = [
	  		{"stations": "Площадь независимости"},
	  		{"stations":"Площадь Ленина"},
	  		{"stations":"Володарского"},
	  		{"stations":"Проспект Независимости"},
	  		{"stations":"Стадион Динамо"},
	  		{"stations":"Лицей БГУ"},
	  		{"stations":"Парк Горького"},
	  		{"stations":"Захарова"}
	  		 
	  	];

	  	res.render('stations',		
	{"stations": stations}    /*ТУТ Я ИСПРАВЛЯЛ*/
	/*);
});


router.get('/buses', (req, res) => {

	  	res.render('buses',		
	{"buses":[

			{"buses":"18", "time":faker.random.number({'min':1, 'max':50})},
	  		{"buses":"24", "time":faker.random.number({'min':1, 'max':50})},
	  		{"buses":"89", "time":faker.random.number({'min':1, 'max':50})},
	  		{"buses":"69", "time":faker.random.number({'min':1, 'max':50})},
	  		{"buses":"15", "time":faker.random.number({'min':1, 'max':50})},
	  		{"buses":"38", "time":faker.random.number({'min':1, 'max':50})},
	  		{"buses":"19", "time":faker.random.number({'min':1, 'max':50})},
	  		{"buses":"78", "time":faker.random.number({'min':1, 'max':50})}

	]}    /*ТУТ Я ИСПРАВЛЯЛ*/
	/*);
});


router.get('/items', (req, res) => {

	  	res.render('items',		
	{"items":[

			{"name": "Shocking news", "id":"by1", "url":"http://www.k-j.by/wp-content/uploads/2018/12/pic-00892.jpg"},
	  		{"name":"Design", "id":"by2", "url":"https://natworld.info/wp-content/uploads/2018/04/Priroda-v-avguste-900x500.jpg"},
	  		{"name":"Sun", "id":"by3", "url":"https://gopolsha.com/wp-content/uploads/2017/09/Natura-Polski.jpg"},
	  		{"name":"Weather", "id":"by4", "url":"https://st.depositphotos.com/1899425/1623/i/450/depositphotos_16232649-stock-photo-moraine-lake-sunrise-colorful-landscape.jpg"}

	]}    /*ТУТ Я ИСПРАВЛЯЛ*/
	/*);
});*/

router.get('/cities', (req, res) => {
	  
	  var cities = [
	  		{"cities": "Минск"},
	  		{"cities":"Брест"},
	  		{"cities":"Гродно"},
	  		{"cities":"Гомель"},
	  		{"cities":"Могилев"},
	  		{"cities":"Витебск"}
	  		 
	  	];

	  	res.render('cities',		
	{"cities": cities}    /*ТУТ Я ИСПРАВЛЯЛ*/
	);
});

router.get('/trees', (req, res) => {

	  	res.render('trees',		
	{"trees":[

			{"trees":"Christmas tree на Площади Ленина", "height":faker.random.number({'min':5, 'max':15}), "toys":faker.random.number({'min':50, 'max':120}), "URL": "http://www.bugaga.ru/uploads/posts/2011-12/1325236193_7.jpg"},
	  		{"trees":"Christmas tree на Октябрьской Площади", "height":faker.random.number({'min':5, 'max':15}), "toys":faker.random.number({'min':50, 'max':120}), "URL":"https://minsknews.by/wp-content/uploads/2018/12/605A8014-kopiya-900x600.jpg"},
	  		{"trees":"Christmas tree окло ЦРТ Дана-Мол(ст. м. Восток)", "height":faker.random.number({'min':5, 'max':15}), "toys":faker.random.number({'min':50, 'max':120}), "URL":"data:image/jpeg;base64,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"},
	  		{"trees":"Christmas tree на Вокзальной Площади", "height":faker.random.number({'min':5, 'max':15}), "toys":faker.random.number({'min':50, 'max':120}), "URL":"https://media-cdn.tripadvisor.com/media/photo-s/05/4e/57/37/manufaktura.jpg"},
	  		{"trees":"Christmas tree ", "height":faker.random.number({'min':5, 'max':15}), "toys":faker.random.number({'min':50, 'max':120}), "URL":"http://1prof.by/ckfinder/userfiles/images/NEWS/V%20strane/2019/November/27.11.2019/moroz-1127.jpg"},
	  		{"trees":"Christmas tree на Немиге", "height":faker.random.number({'min':5, 'max':15}), "toys":faker.random.number({'min':50, 'max':120}), "URL":"http://3.bp.blogspot.com/-IITWl2i4iw0/UNtHljVT6jI/AAAAAAAABG0/zwmnCuEI7Iw/s1600/101_0399.JPG"},
	  		{"trees":"Christmas tree Площади Янки Купалы", "height":faker.random.number({'min':5, 'max':15}), "toys":faker.random.number({'min':50, 'max':120}), "URL":"http://www.21.by/pub/news/2015/12/1451570559272739.jpg"},
	  		{"trees":"Christmas tree около ЦРТ Экватор(о. Восток)", "height":faker.random.number({'min':5, 'max':15}), "toys":faker.random.number({'min':50, 'max':120}), "URL": "http://deswal.ru/newyear/1600-1200/00000419.jpg "}

	]}    /*ТУТ Я ИСПРАВЛЯЛ*/
	);
});



module.exports = router;
