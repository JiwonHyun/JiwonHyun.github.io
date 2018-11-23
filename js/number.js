var NumberInit = function () {
	var decimal_places = 1;
	var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;

	//HTML5
	$('#tar_no_01').animateNumber({
		number: 90 * decimal_factor,

		numberStep: function(now, tween){
			var floored_number = Math.floor(now) / decimal_factor,
				target = $(tween.elem);
			if (decimal_places > 0){
				floored_number = floored_number.toFixed(decimal_places);
			}
			target.text(floored_number + ' %');
			}
		}, 5000
	);

	//CSS3
	$('#tar_no_02').animateNumber({
		number: 90 * decimal_factor,

		numberStep: function(now, tween){
			var floored_number = Math.floor(now) / decimal_factor,
				target = $(tween.elem);
			if (decimal_places > 0){
				floored_number = floored_number.toFixed(decimal_places);
			}
			target.text(floored_number + ' %');
			}
		},	5000
	);

	//웹 표준
	$('#tar_no_04').animateNumber({
		number: 90 * decimal_factor,

		numberStep: function(now, tween){
			var floored_number = Math.floor(now) / decimal_factor,
				target = $(tween.elem);
			if (decimal_places > 0){
				floored_number = floored_number.toFixed(decimal_places);
			}
			target.text(floored_number + ' %');
			}
		},	5000
	);

	//접근성
	$('#tar_no_05').animateNumber({
		number: 90 * decimal_factor,

		numberStep: function(now, tween){
			var floored_number = Math.floor(now) / decimal_factor,
					target = $(tween.elem);
			if (decimal_places > 0){
				floored_number = floored_number.toFixed(decimal_places);
			}
			target.text(floored_number + ' %');
			}
		},	5000
	);

	//반응형
	$('#tar_no_06').animateNumber({
		number: 80 * decimal_factor,

		numberStep: function(now, tween){
			var floored_number = Math.floor(now) / decimal_factor,
				target = $(tween.elem);
			if (decimal_places > 0){
				floored_number = floored_number.toFixed(decimal_places);
			}
			target.text(floored_number + ' %');
			}
		},	5000
	);

	//자바스크립트
	$('#tar_no_03').animateNumber({
		number: 70 * decimal_factor,

		numberStep: function(now, tween){
			var floored_number = Math.floor(now) / decimal_factor,
					target = $(tween.elem);
			if (decimal_places > 0){
				floored_number = floored_number.toFixed(decimal_places);
			}
			target.text(floored_number + ' %');
			}
		},	5000
	);
}
