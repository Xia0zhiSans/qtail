console.log("page.js has been loaded.")

const page = {
	appName: "",
	appNameShort: "",
	version: "v1.0.0",
	versionCode: 10020240420,
	buildVer: "(20240420)",
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
		alert("更改成功 (￣﹃￣)");
		return 0;
	},
	changeBoxAlpha: function() {
		var alpha = prompt("请输入透明度（0 ~ 1.0）：", "1.0");
		if((alpha > 1.0)||(alpha < 0.0)||(alpha == NaN)) {
			alert("更改失败 Σ(っ °Д °;)っ \n 无效的数值。");
			console.error("page.js: on changeBoxAlpha, error code: -1");
			return -1;
		}
		if((typeof alpha) != "string") {
			alert("更改失败 Σ(っ °Д °;)っ \n 输入的内容不合法。");
			console.error("page.js: on changeBoxAlpha, error code: -2");
			return -2;
		}
		document.getElementById("mainWindow").style.opacity = alpha;
		alert("更改成功 (￣﹃￣)");
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
	hideFooter: function() {
		const hideBtn = document.getElementById("hide");
		document.getElementById("footerPnl").style.display = "none";
		hideBtn.setAttribute("onclick", "page.displayFooter();");
		hideBtn.setAttribute("tooltip", "显示")
		hideBtn.innerHTML = "➕";
		return 0;
	},
	displayFooter: function() {
		const hideBtn = document.getElementById("hide");
		document.getElementById("footerPnl").style.display = '';
		hideBtn.setAttribute("onclick", "page.hideFooter();");
		hideBtn.setAttribute("tooltip", "隐藏");
		hideBtn.innerHTML = "➖";
		return 0;
	}/*,
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