var slides = document.getElementsByClassName("slider-dots__item");
var slidesTitle = document.getElementsByClassName("projects-navigation__item");
var index = 1; // индекс слайда по умолчанию
var indexBlock = 1; // индекс слайда по умолчанию у второго блока с фото

function plusSlide() {
	index += 1;
	if (index === 4) index = 1;
	slide('slide_'+index);
}

function minusSlide() {
	index -= 1;
	if (index === 0) index = 3;
	slide('slide_'+index);
}

function plusSlideBlock() {
	indexBlock  += 1;
	if (indexBlock  === 4) indexBlock  = 1;
	slide('slide_block_'+indexBlock);
}

function minusSlideBlock() {
	indexBlock-= 1;
	if (indexBlock === 0) indexBlock = 3;
	slide('slide_block_'+indexBlock);
}

function slide(id) {
	for (i = 0; i < slides.length; i++) {
         slides[i].className = slides[i].className.replace(" active", "");
	}
	for (i = 0; i < slidesTitle .length; i++) {
         slidesTitle [i].className = slidesTitle [i].className.replace(" active_item", "");
	}
	if (id === 'slide_1'){
		document.getElementById('sld_1').src = 'images/image2.jpg';
		slides[0].className += " active";
		slidesTitle[0].className += " active_item";
		document.getElementById('block_slider_city').innerHTML =
			'Rostov-on-Don<br> LCD admiral';
		document.getElementById('block_slider_time').innerHTML =
			'3.5 months';
		document.getElementById('block_slider_area').innerHTML =
			'81 m<sup>2</sup>';
	}
	if (id === 'slide_2'){
		document.getElementById('sld_1').src = 'images/slide_2.jpg';
		slides[1].className += " active";
		slidesTitle[1].className += " active_item";
		document.getElementById('block_slider_city').innerHTML =
			'Sochi <br>Thieves';
		document.getElementById('block_slider_time').innerHTML =
			'4 months';
		document.getElementById('block_slider_area').innerHTML =
			'105 m<sup>2</sup>';
	}
	if (id === 'slide_3'){
		document.getElementById('sld_1').src = 'images/slide_3.jpg';
		slides[2].className += " active";
		slidesTitle[2].className += " active_item";
		document.getElementById('block_slider_city').innerHTML =
			'Rostov-on-Don <br>Patriotic';
		document.getElementById('block_slider_time').innerHTML =
			'3 months';
		document.getElementById('block_slider_area').innerHTML =
			'93 m<sup>2</sup>';
	}
	if (id === 'slide_block_1'){
		document.getElementById('sld_2').src = 'images/slide_2.jpg';
	}
	if (id === 'slide_block_2'){
		document.getElementById('sld_2').src = 'images/slide_3.jpg';
	}
	if (id === 'slide_block_3'){
		document.getElementById('sld_2').src = 'images/image2.jpg';
	}
}