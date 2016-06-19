var App = {
	ready: function() {
		App.navigation("about");
		this.refreshActionBar();
		$("ul.nav a").click(function() {
			$section = $(this).attr("data-section");
			App.navigation($section);
		})
		$(window).resize(function() {
			App.refreshActionBar();
		});

		$(".action-bar .menu").click(function() {
			App.slider("show");
		})
		$(".black-trans").click(function() {
			App.slider("hide");
		})
		$(".slider a").click(function() {
			App.slider("hide");
		})
	},
	navigation: function(section) {
		$current = $("section.selected").attr("name");
		if($current != section) {
			$("ul.nav a").removeClass("selected");
			$("ul.nav a[data-section="+section+"]").addClass("selected");
			if($("section[name="+section+"]").length == 0) section = "error";
			if($current != "error" || section != "error") {
				$("section.selected").animate({
					"top": "50px",
					"opacity": "0"
				}, 200, function() {
					$(this).hide();
				}).removeClass("selected");
				setTimeout(function() {
					$("section[name="+section+"]").show().animate({
						"top": "0px",
						"opacity": "1"
					}, 500).addClass("selected");
				}, 200);
			}
		}
	},
	slider: function(action) {
		if(action == "show") {
			$(".slider").animate({
				"left": "0px"
			}, 300);
			$(".black-trans").show();
		} else {
			$(".slider").animate({
				"left": "-350px"
			}, 300);
			$(".black-trans").hide();
		}
	},
	refreshActionBar: function() {
		if($(window).outerWidth() < 820) {
			$(".action-bar .menu").show();
			$(".action-bar ul.nav").hide();
		} else {
			$(".action-bar .menu").hide();
			$(".action-bar ul.nav").show();
		}
	}
}