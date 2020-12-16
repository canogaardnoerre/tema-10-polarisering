function openLink() {
	const url = "http://criticalthinking.rethinkproject.eu/"
	window.open(url, '_blank');

	gtag('event', 'click', {
		'event_category': 'outbound',
		'event_label': url,
		'transport_type': 'beacon',
	});
}

function openFacebook() {
	window.open("https://facebook.com/ikketaaltforgodfisk")

	gtag('event', 'click', {
		'event_category': 'outbound',
		'event_label': "open-facebook",
		'transport_type': 'beacon',
	});
}

function openInstagram() {
	window.open("https://www.instagram.com/ikketaaltforgodfisk/")

	gtag('event', 'click', {
		'event_category': 'outbound',
		'event_label': "open-instagram",
		'transport_type': 'beacon',
	});

}

function addAnimation() {
	let title1 = document.querySelector('.title2');
	title1.innerHTML = title1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({
			loop: true
		})
		.add({
			targets: '.title2 .letter',
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutExpo",
			duration: 1400,
			delay: (el, i) => 300 + 30 * i
		}).add({
			targets: '.title2 .letter',
			translateY: [0, -100],
			opacity: [1, 0],
			easing: "easeInExpo",
			duration: 1200,
			delay: (el, i) => 100 + 30 * i
		});
}

addAnimation(".title2")

function addAnimation2() {

	let text1 = document.querySelector('.section-set1');

	text1.innerHTML = text1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({
			loop: true
		})
		.add({
			targets: '.section-set1 .letter',
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutExpo",
			duration: 1400,
			delay: (el, i) => 300 + 30 * i
		}).add({
			targets: '.section-set1 .letter',
			translateY: [0, -100],
			opacity: [1, 0],
			easing: "easeInExpo",
			duration: 1200,
			delay: (el, i) => 100 + 30 * i
		});
}

addAnimation2()

function addAnimation3() {

	let text2 = document.querySelector('.section-set2');

	text2.innerHTML = text2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

	anime.timeline({
			loop: true
		})
		.add({
			targets: '.section-set2 .letter',
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutExpo",
			duration: 1400,
			delay: (el, i) => 300 + 30 * i
		}).add({
			targets: '.section-set2 .letter',
			translateY: [0, -100],
			opacity: [1, 0],
			easing: "easeInExpo",
			duration: 1200,
			delay: (el, i) => 100 + 30 * i
		});
}

addAnimation3()

function addAnimation4() {

	let text3 = document.querySelector('.section-set3');

	text3.innerHTML = text3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({
			loop: true
		})
		.add({
			targets: '.section-set3 .letter',
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutExpo",
			duration: 1400,
			delay: (el, i) => 300 + 30 * i
		}).add({
			targets: '.section-set3 .letter',
			translateY: [0, -100],
			opacity: [1, 0],
			easing: "easeInExpo",
			duration: 1200,
			delay: (el, i) => 100 + 30 * i
		});
}

addAnimation4()

function addAnimation5() {

	let text4 = document.querySelector('.section-set4');

	text4.innerHTML = text4.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

	anime.timeline({
			loop: true
		})
		.add({
			targets: '.section-set4 .letter',
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutExpo",
			duration: 1400,
			delay: (el, i) => 300 + 30 * i
		}).add({
			targets: '.section-set4 .letter',
			translateY: [0, -100],
			opacity: [1, 0],
			easing: "easeInExpo",
			duration: 1200,
			delay: (el, i) => 100 + 30 * i
		});
}

addAnimation5()

function addAnimation6() {

	let text5 = document.querySelector('.section-set5');

	text5.innerHTML = text5.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({
			loop: true
		})
		.add({
			targets: '.section-set5 .letter',
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutExpo",
			duration: 1400,
			delay: (el, i) => 300 + 30 * i
		}).add({
			targets: '.section-set5 .letter',
			translateY: [0, -100],
			opacity: [1, 0],
			easing: "easeInExpo",
			duration: 1200,
			delay: (el, i) => 100 + 30 * i
		});
}

addAnimation6()

// const sec12 = document.querySelector("#1")
// const sec12 = document.querySelector("#2")
// const sec12 = document.querySelector("#3")
// const sec12 = document.querySelector("#4")
// const sec12 = document.querySelector("#5")
// const sec12 = document.querySelector("#6")

// function vis() {

// }

// sec12.onclick = vis