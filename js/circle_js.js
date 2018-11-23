var circle = function () {
	//HTML5
	$('#circle_html').circleProgress({
		startAngle: -Math.PI / 4 * 2,
		value:.9,
		size:180,
		fill:{ gradient: ['#1abc9c', '#2ecc71'] },
		animation: {duration:5000}
	});

	//CSS3
	$('#circle_css').circleProgress({
		startAngle: -Math.PI / 4 * 2,
		value:.9,
		size:180,
		fill:{ gradient: ['#2980b9', '#3498db'] },
		animation: {duration:5000}
	});

	//웹 표준
	$('#circle_stand').circleProgress({
		startAngle: -Math.PI / 4 * 2,
		value:.9,
		size:180,
		fill:{ gradient: ['#f11712', '#0099f7'] },
		animation: {duration:5000}
	});

	//접근성
	$('#circle_access').circleProgress({
		startAngle: -Math.PI / 4 * 2,
		value:.9,
		size:180,
		fill:{ gradient: ['#f39c12', '#f1c40f'] },
		animation: {duration:5000}
	});

	//반응형
	$('#circle_respon').circleProgress({
		startAngle: -Math.PI / 4 * 2,
		value:.8,
		size:180,
		fill:{ gradient: ['#ff1e41', '#ff5f43'] },
		animation: {duration:5000}
	});

	//자바스크립트
	$('#circle_java').circleProgress({
		startAngle: -Math.PI / 4 * 2,
		value:.8,
		size:180,
		fill:{ gradient: ['#DD5E89', '#F7BB97'] },
		animation: {duration:5000}
	});
}
