$(document).ready(function() {
	$("#main_cover").height($(window).height());
});

$(window).scroll(function() { 
	$x = $(window).height()-($(window).height()*.50);
	$pos = $(window).scrollTop();
	if($pos > $x) {
		$("#float_top").css({
			"top": "0px"
		});
		$("#float_top>.wrapper .navigation>ul>li>ul").css({
			"top": "58px"
		});
		$el = $(".container-photos");
		if($el.length) {
			var el_pos = $el.position();
			if($pos < el_pos.top-320 || $pos > el_pos.top+200) {
				$("#gotop").css({
					"bottom": "100px"
				});
			} else {
				$("#gotop").css({
					"bottom": "-80px"
				});
			}
		} else {
			$("#gotop").css({
				"bottom": "100px"
			});
		}
		$("#gonext").css({
			"bottom": "-100px"
		});
	} else {
		$("#float_top").css({
			"top": "-164px"
		});
		$("#float_top>.wrapper .navigation>ul>li>ul").css({
			"top": "-200px"
		});
		$("#gotop").css({
			"bottom": "-80px"
		});
		$("#gonext").css({
			"bottom": "40px"
		});
	}
});