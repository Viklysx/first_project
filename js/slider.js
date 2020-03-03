var slides = document.getElementsByClassName("slider-dots__item");
var slidesTitle = document.getElementsByClassName("projects-navigation__item");
var index = 1; // индекс слайда по умолчанию
var indexBlock = 1; // индекс слайда по умолчанию у второго блока с фото
var sld_1 = document.getElementById('sld_1');
var block_slider_city = document.getElementById('block_slider_city');
var block_slider_time =  document.getElementById('block_slider_time');
var block_slider_area = document.getElementById('block_slider_area');
var sld_2 = document.getElementById('sld_2');


const variants = [
  {
    city: 'Rostov-on-Don<br> LCD admiral',
    time: '3.5 months',
    area: '81 m<sup>2</sup>',
    img: 'images/slide_1.jpg'
  },
  {
    city: 'Sochi <br>Thieves',
    time: '4 months',
    area: '105 m<sup>2</sup>',
    img: 'images/slide_2.jpg'
  },
  {
    city: 'Rostov-on-Don <br>Patriotic',
    time: '3 months',
    area: '93 m<sup>2</sup>',
    img: 'images/slide_3.jpg'
  }
]

function plusSlide() {
	index += 1;
	if (index === 4) index = 1;
	slide(index);
}

function minusSlide() {
	index -= 1;
	if (index === 0) index = 3;
	slide(index);
}

function plusSlideBlock() {
	indexBlock  += 1;
	if (indexBlock  === 4) indexBlock  = 1;
	slide(indexBlock);
}

function minusSlideBlock() {
	indexBlock-= 1;
	if (indexBlock === 0) indexBlock = 3;
	slide(indexBlock);
}

function slide(index) {
	for (i = 0; i < slides.length; i++) {
         slides[i].classList.remove('active');
	}
	for (i = 0; i < slidesTitle .length; i++) {
         slidesTitle[i].classList.remove('active_item');
	}

	sld_1.src = variants[index-1].img;
	slides[index-1].classList.add('active')
	slidesTitle[index-1].classList.add('active_item')
	block_slider_city.innerHTML = variants[index-1].city;
	block_slider_time.innerHTML = variants[index-1].time;
	block_slider_area.innerHTML = variants[index-1].area;

	sld_2.src = 'images/slide_'+index+'.jpg';
}