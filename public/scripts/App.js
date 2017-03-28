var App = {
	ready: function(page) {
		this.refreshActionBar();
		$("ul.nav a").click(function() {
			$section = $(this).attr("href").substr(1);
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
			App.popup(null, null, null, "hide");
		})
		$(".slider a").click(function() {
			App.slider("hide");
		})
		if(page == "")
			page = "about";
		App.navigation(page);
		$(window).resize(function() {
			App.resizePopup();
		})
		$(".button-group").each(function() {
			var buttons = Data.schedule[$(this).parents("section").attr("name")];
			for(var i in buttons) {
				$(this).append('<a data-schedule="'+i+'" onclick="App.schedule(\''+$(this).parents("section").attr("name")+'\',\''+i+'\')" class="raised_button">'+buttons[i].text+'</a>')
			}
		})
		$(".button-group a:first-child").each(function() {
			App.schedule($(this).parents("section").attr("name"), $(this).attr("data-schedule"));
		})
		$("a[data-schedule]").click(function() {
			var action = $(this).attr("data-schedule");
			App.schedule(this, action);
		})
	},
	schedule: function(leg, action) {
		$section = $("section[name="+leg+"]");
		$el = $section.find(".button-group a[data-schedule="+action+"]");
		if(!$el.is(".selected")) {
			$section.find(".button-group a").removeClass("selected");
			$el.addClass("selected");
			$section.find(".schedule").html('<table class="schedule"></table>');
			var schedule = Data.schedule[leg];
			var p_start = 0;
			for(var i in schedule[action].desc) {
				var s = schedule[action].desc[i];
				var apm = "a";
				var start = s.start;
				if(p_start == s.start) {
					start = "";
					apm = "";
				} else {
					p_start = start;
					if(start >= 12)
						apm = "p";
					if(start >= 13)
						start -= 12;
					start = start.toFixed(2);
					if(start.indexOf(".00") >= 1)
						start = start.substring(0, start.indexOf(".00"));
				}
				var duration = "";
				if(s.duration.h != 0)
					duration += s.duration.h + " hour";
				if(s.duration.h > 1)
					duration += "s";
				if(s.duration.h > 0 && s.duration.m > 0)
					duration += " ";
				if(s.duration.m != 0)
					duration += (s.duration.m) + " minute";
				if(s.duration.m > 1)
					duration += "s";
				var speaker = " / ";
				if(s.speakers.length != 0) {
					for(var j in s.speakers) {
						var speakerProfile = Data.speaker[s.speakers[j]];
						speaker += '<img src="images/speakers/'+s.speakers[j]+'.jpg" class="speaker">'+speakerProfile.name;
					}
				} else speaker = "";
				$section.find("table.schedule").append('<tr'+((s.id == "") ? "" : ' onclick="App.popup(\''+leg+'\', \''+action+'\', \''+s.id+'\')"')+'>'+
					'<td><span>'+start+'</span>'+apm+'</td>'+
					'<td><span>'+s.title+((s.id != "") ? '<i class="md-icon" style="margin-left: 12px">info_outline</i>' : "")+'</span><span>'+duration+speaker+'</span></td></tr>');
			}
		}
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
	popup: function(leg, category, id, action) {
		$popup = $(".popup");
		$popup.scrollTop(0);
		if(action == "hide") {
			$popup.css("opacity", "0").hide();
			$("html, body").css("overflow", "auto");
		} else {
			$("html, body").css("overflow", "hidden");
			$(".black-trans").show();
			var data = Data.schedule[leg][category].desc;
			var index = 0;
			for(var i in data) {
				if(data[i].id == id) {
					index = i;
					break;
				}
			}
			data = data[index];
			var duration = "";
				if(data.duration.h != 0)
					duration += data.duration.h + " hour";
				if(data.duration.h > 1)
					duration += "s";
				if(data.duration.h > 0 && data.duration.m > 0)
					duration += " ";
				if(data.duration.m != 0)
					duration += data.duration.m + " minute";
				if(data.duration.m > 1)
					duration += "s";
				var speaker = " / ";
				if(data.speakers.length != 0) {
					var speakerindex = 0;
					for(var j in data.speakers) {
						if(speakerindex > 0) 
							speaker += " & ";
						var speakerProfile = Data.speaker[data.speakers[j]];
						speaker += speakerProfile.name;
						speakerindex++;
					}
				} else speaker = "";
			$popup.html('<div class="cover"></div>');
			$popup.append('<div class="wrapper"><h2>'+data.title+'</h2><span>'+duration+speaker+'</span><p>'+data.desc+'</p></div>')
			speaker = "";
			for(var j in data.speakers) {
				var speakerProfile = Data.speaker[data.speakers[j]];
				speaker += '<div class="col-6"><table class="speaker"><tr>'+
				'<td><img src="images/speakers/'+data.speakers[j]+'.jpg"></td>'+
				'<td><b>'+speakerProfile.name+'</b><span>'+speakerProfile.title+'</span></td>'+
				'</tr></table><p>'+speakerProfile.bio+'</p>'+
				((speakerProfile.sm.gp != "") ? '<a href="'+speakerProfile.sm.gp+'" class="social gp" target="_blank"></a>': '')+
				((speakerProfile.sm.fb != "") ? '<a href="'+speakerProfile.sm.fb+'" class="social fb" target="_blank"></a>': '')+
				((speakerProfile.sm.tw != "") ? '<a href="'+speakerProfile.sm.tw+'" class="social tw" target="_blank"></a>': '')+
				'</div>';
			}
			$popup.append('<div class="wrapper bt"><span class="title">Speakers</span><div class="columns">'+speaker+'</div></div>')
			$popup.show().animate({
				"opacity": "1"
			}, 500)
			$popup.css("width", "1000px");
			App.resizePopup();
			var width = $popup.outerWidth(), height = $popup.outerHeight();
			$popup.css({
				"top": "50%",
				"left": "50%",
				"margin-top": 0-(height/2)+"px",
				"margin-left": 0-(width/2)+"px"
			});
		}
	},
	resizePopup: function() {
		$popup = $(".popup");
		if(window.outerWidth < 700) 
			$popup.width(window.outerWidth);
		var width = $popup.outerWidth(), height = $popup.outerHeight();
		$popup.css({
			"top": "50%",
			"left": "50%",
			"margin-top": 0-(height/2)+"px",
			"margin-left": 0-(width/2)+"px"
		});
	},
	slider: function(action) {
		if(action == "show") {
			$(".slider").animate({
				"left": "0px"
			}, 300);
			$(".black-trans").show();
			$("html, body").css("overflow", "hidden");
		} else {
			$(".slider").animate({
				"left": "-350px"
			}, 300);
			$(".black-trans").hide();
			$("html, body").css("overflow", "auto");
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