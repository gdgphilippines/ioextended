var App = {
	ready: function(page) {
		this.refreshActionBar();
		$("ul.nav a").click(function() {
			$section = $(this).attr("href").substr(1);
			App.navigation($section);
		})
		$("table.schedule a[data-talk]").click(function() {
			var action = $(this).attr("data-talk");
			App.popup(action);
		});
		$("a[data-schedule]").click(function() {
			var action = $(this).attr("data-schedule");
			App.schedule(this, action);
		})
		$(window).resize(function() {
			App.refreshActionBar();
		});

		$(".action-bar .menu").click(function() {
			App.slider("show");
		})
		$(".black-trans").click(function() {
			App.slider("hide");
			App.popup("hide");
		})
		$(".slider a").click(function() {
			App.slider("hide");
		})
		$(".black-trans")
		if(page == "")
			page = "about";
		App.navigation(page);
		$(".button-group a:first-child").each(function() {
			App.schedule(this, $(this).attr("data-schedule"))
		})
	},
	schedule: function(el, action) {
		$section = $(el).parents("section");
		$section.find(".button-group a").removeClass("selected");
		$(el).addClass("selected");
		$section.find(".schedule")
			.html('<div class="loading"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="6" stroke-miterlimit="10"/></svg></div>')
			.load("schedules/"+action+".html");
	},
	navigation: function(section) {
		$current = $("section.selected").attr("name");
		if($current != section) {
			$("ul.nav a").removeClass("selected");
			$('ul.nav a[href="#'+section+'"]').addClass("selected");
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
	popup: function(action) {
		$popup = $(".popup");
		if(action == "hide") {
			$popup.css("opacity", "0").hide();
		} else {
			$(".black-trans").show();
			$popup.show().animate({
				"opacity": "1"
			}, 500)
			$popup.html('<div class="loading"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="6" stroke-miterlimit="10"/></svg></div>');
			var width = $popup.outerWidth(), height = $popup.outerHeight();
			$popup.css({
				"top": "50%",
				"left": "50%",
				"margin-top": 0-(height/2)+"px",
				"margin-left": 0-(width/2)+"px"
			}).load("talks/"+action+".html", function() {
				width = $popup.outerWidth();
				height = $popup.outerHeight();
				$popup.css({
					"top": "50%",
					"left": "50%",
					"margin-top": 0-(height/2)+"px",
					"margin-left": 0-(width/2)+"px"
				});
			})
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
		if($(window).outerWidth() < 840) {
			$(".action-bar .menu").show();
			$(".action-bar ul.nav").hide();
		} else {
			$(".action-bar .menu").hide();
			$(".action-bar ul.nav").show();
		}
	}
}