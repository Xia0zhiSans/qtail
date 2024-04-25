console.log("page.js has been loaded.")
const msg = function(msg, time) {
	qtailHtml.message(msg, time);
}

setTimeout(function() {
	document.getElementById("verText").innerHTML = ("Running <a href=\"https://github.com/XiaozhiSans/qtail.js\">qtail.js</a> " + qtail.buildType + ' ' + qtail.version);
}, 3500);

const page = {
	appName: "",
	appNameShort: "",
	version: "v1.0.1",
	versionCode: 10020240425,
	buildVer: "(20240425)",
	buildType: "",
	license: "",
	author: "XiaozhiSans",
	url: "",
	changeBg: function() {
		var bgUrl = prompt("请输入图片url：", "https://eg.web/imgs/img0.jpg");
		if((bgUrl != null)&&(bgUrl != "")) {
			document.getElementById("body").style.backgroundImage = bgUrl;
			document.getElementById("body").style.backgroundSize = auto;
		}
		else {
			console.error("page.js: on changeBg, error code: -1");
			return -1;
		}
		msg("更改成功 (￣﹃￣)", 3);
		return 0;
	},
	changeBoxAlpha: function() {
		var alpha = prompt("请输入透明度（0 ~ 1.0）：", "1.0");
		if((alpha > 1.0)||(alpha < 0.0)||(alpha == NaN)) {
			msg("更改失败 Σ(っ °Д °;)っ<br>无效的数值。", 3);
			console.error("page.js: on changeBoxAlpha, error code: -1");
			return -1;
		}
		if((typeof alpha) != "string") {
			msg("更改失败 Σ(っ °Д °;)っ<br>输入的内容不合法。", 3);
			console.error("page.js: on changeBoxAlpha, error code: -2");
			return -2;
		}
		document.getElementById("mainWindow").style.opacity = alpha;
		msg("更改成功 (￣﹃￣)", 3);
		return 0;
	},/*
	changeBoxBg: function() {
		const box = document.getElementById("bg");
		var bgUrl = prompt("请输入图片url：", "https://eg.web/imgs/img0.jpg");
		if((bgUrl != null)&&(bgUrl != "")) {
			box.setAttribute("style", "background-image: url(" + bgUrl + ");\nmargin: auto;");
		}
		else return -1;
		alert("更改成功 (￣﹃￣)");
		return 0;
	},*/
		/* 不必理会以下两个函数的控制台报错,以免改的石山崩塌( */
	hideBox: function(name) {
		const footers = document.getElementsByClassName("footerPnl");
		const hideBtns = document.getElementsByClassName("hide");
		for (footer in footers) {
			if (footers[footer].getAttribute("name") == name) {
				footers[footer].style.display = "none";
				hideBtns[footer].setAttribute("onclick", "page.displayBox('" + name + "');");
				hideBtns[footer].setAttribute("tooltip", "显示")
				hideBtns[footer].innerHTML = "➕";
			}
		}
		return 0;
	},
	displayBox: function(name) {
		const footers = document.getElementsByClassName("footerPnl");
		const hideBtns = document.getElementsByClassName("hide");
		for (footer in footers) {
			if (footers[footer].getAttribute("name") == name) {
				footers[footer].style.display = 'block';
				hideBtns[footer].setAttribute("onclick", "page.hideBox('" + name + "');");
				hideBtns[footer].setAttribute("tooltip", "隐藏");
				hideBtns[footer].innerHTML = "➖";
			}
		}
		return 0;
	}
	/* 不要管↑ */
	/*,
	sentence: function() {
		
	},
	randBg: function() {
		const url = "https://s21.ax1x.com/";
		if (device.mobile()){
			const bgList = [
				"2024/04/18/pFzwE79.jpg"
			]
		}
		else {
			const bgList = [
				"2024/04/18/pFzwQXD.jpg",
				"2024/04/18/pFzwmfx.jpg",
				"2024/04/18/pFzwE79.jpg",
				"2024/04/18/pFzwZkR.jpg",
				"2024/04/18/pFzwup6.jpg"
			]
		}
		document.getElementById("customBg").style.background = bgUrl + bgList[Math.floor(Math.random() * 6)];
	}*/
}

$.get("tips.txt", function(data) {
	globalThis.tips = data.split('\n');
	document.getElementById("tips").innerHTML = tips[Math.floor(Math.random()*(tips.length - 1))];
});
setInterval(function() {
	document.getElementById("tips").innerHTML = tips[Math.floor(Math.random()*(tips.length - 1))];
}, 10000);
