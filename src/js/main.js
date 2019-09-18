// Function thêm class lazyload vào các thẻ <img> có thuộc tính [data-src]
const addClassLazyload = () => {
	let imgList = document.querySelectorAll("img[data-src]")
	Array.prototype.forEach.call(imgList, function (el) {
		if (el.className.length > 0) {
			el.className = el.className + " lazyload"
		} else {
			el.className = "lazyload"
		}
	});
}

// ACTIVE SCROLL MENU
function activeScrollMenu() {
	if ($(window).scrollTop() > 50) {
		$("header").addClass("active")
	} else {
		$("header").removeClass("active")
	}
}

// SLIDER HOME BANNER
function sliderHomeBanner() {
	var swiper = new Swiper('.slider-bannerHome', {
		slidesPerView: 1,
		speed: 1000,
		simulateTouch: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.slider-bannerHome .swiper-button-next',
			prevEl: '.slider-bannerHome .swiper-button-prev',
		},
	});
}

// POPUP ABOUT
function popupAbout() {
	$('.about [data-fancybox]').fancybox({
		youtube: {
			controls: true,
		},
	});
}

// SLIDER CATALOG EVNET
function sliderProductByCatalog() {
	var swiper = new Swiper('.slider-ProductByCatalog', {
		slidesPerView: 3,
		speed: 1000,
		loop: true,
		spaceBetween: 10,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.slider-ProductByCatalog .swiper-button-next',
			prevEl: '.slider-ProductByCatalog .swiper-button-prev',
		},
	});
}



$(document).ready(function () {
	objectFitImages("img.ofc"); // Luôn luôn chậy polyfill cho thuôc tính object-fit: cover trên các phiên bản IE >= 9
	addClassLazyload(); // Luôn luôn addClass lazyload cho các hình ảnh có thuộc tính [data-src]
	sliderHomeBanner();
	sliderProductByCatalog();
	activeScrollMenu();
	popupAbout();






	new WOW().init();
})

$(document).ajaxComplete(function () {
	addClassLazyload();
})

window.addEventListener("scroll", () => {
	activeScrollMenu();
})